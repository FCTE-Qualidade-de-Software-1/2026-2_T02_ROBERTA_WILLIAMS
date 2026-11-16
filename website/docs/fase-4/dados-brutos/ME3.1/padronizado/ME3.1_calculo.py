"""ME3.1 - Volume de dados consumidos por requisição e taxa de reuso do cache.

Recalcula a métrica a partir do HAR exportado da aba Network do DevTools.

Uso:   python ME3.1_calculo.py [brutos/ME3.1_Padronizado_2026-11-15.har]
Saída: requisicoes_classificadas.csv e o resumo impresso na tela.

Regras (descritas também em resultado.md):
- Ativação: tudo antes do primeiro POST /translate. Fora do cálculo.
- Tradução: cada POST /translate abre um trecho, que vai até o próximo POST
  (ou até a abertura do dicionário). O texto enviado identifica o trecho:
    1ª execução (E1) = primeira vez que o texto é traduzido;
    reexecução (R)   = o texto já tinha sido traduzido (repetir, mudar a
                       velocidade, pausar/retomar, reproduzir de novo).
- Dicionário: da abertura do menu/dicionário (DICIONARIO, horário tirado do
  HAR e dos prints) até o fim do registro. Os 5 termos são consultados uma
  vez, na 1ª execução.
- Telemetria (domínios posthog.com): fora de A e B, contada à parte.
- Cache (conta em A): _fromCache = "disk" ou "memory" (coluna Size com
  "(disk cache)"/"(memory cache)") ou status 204/304, como na ficha.
- Rede: demais requisições, inclusive erros; bytes = _transferSize.
- X = A / B x 100, com A e B contados nas requisições R.
"""
import csv
import json
import sys
from collections import defaultdict
from urllib.parse import unquote, urlsplit

HAR = "brutos/ME3.1_Padronizado_2026-11-15.har"
DICIONARIO = "2026-11-16T01:49:26"  # 22:49:26 (Brasília): menu > Dicionário


def main(caminho):
    har = json.load(open(caminho, encoding="utf-8"))
    textos = {}
    acao, execucao, trecho = "ativacao", "fora", "ativacao"
    linhas = []
    for e in har["log"]["entries"]:
        inicio = e["startedDateTime"]
        partes = urlsplit(e["request"]["url"])
        resp = e["response"]
        if inicio >= DICIONARIO:
            acao, execucao, trecho = "dicionario", "E1", "dicionario"
        elif partes.path.endswith("/translate") and e["request"]["method"] == "POST":
            texto = json.loads(e["request"]["postData"]["text"])["text"]
            execucao = "R" if texto in textos else "E1"
            textos.setdefault(texto, len(textos) + 1)
            acao, trecho = "traducao", f"texto{textos[texto]}"

        if "posthog.com" in partes.netloc:
            tipo = "telemetria"
            atendida = "CACHE" if e.get("_fromCache") else ("BLOQUEADA" if resp.get("_error") else "REDE")
        else:
            tipo = "funcional"
            cache = e.get("_fromCache") in ("disk", "memory") or resp["status"] in (204, 304)
            atendida = "CACHE" if cache else "REDE"
        nbytes = resp.get("_transferSize", 0) if atendida == "REDE" else 0
        linhas.append({
            "execucao": execucao, "acao": acao, "trecho": trecho, "inicio_utc": inicio, "tipo": tipo,
            "atendida_por": atendida, "bytes_rede": nbytes, "metodo": e["request"]["method"],
            "status": resp["status"], "fromCache": e.get("_fromCache") or "", "erro": resp.get("_error") or "",
            "tempo_ms": round(e["time"]), "dominio": partes.netloc,
            "recurso": unquote(partes.path).split("/")[-1] or partes.path, "parametros": unquote(partes.query)[:60],
        })

    with open("requisicoes_classificadas.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(linhas[0].keys()))
        w.writeheader()
        w.writerows(linhas)

    resumo = defaultdict(lambda: {"req": 0, "cache": 0, "rede": 0, "bloqueadas": 0, "bytes": 0})
    for l in linhas:
        chaves = [f"{l['execucao']}|{l['tipo']}", f"{l['execucao']}|{l['acao']}|{l['tipo']}",
                  f"{l['execucao']}|{l['acao']}|{l['trecho']}|{l['tipo']}"]
        for chave in chaves:
            r = resumo[chave]
            r["req"] += 1
            r[{"CACHE": "cache", "REDE": "rede", "BLOQUEADA": "bloqueadas"}[l["atendida_por"]]] += 1
            r["bytes"] += l["bytes_rede"]

    print("Textos traduzidos:")
    for texto, n in textos.items():
        print(f"  texto{n}: {texto}")
    print()
    for k in sorted(resumo):
        if k.endswith("|funcional"):
            print(f"{k:42s} {dict(resumo[k])}")
    e1, r = resumo["E1|funcional"], resumo["R|funcional"]
    print()
    print(f"1ª execução: {e1['req']} requisições, {e1['cache']} do cache, {e1['bytes']} B pela rede")
    print(f"Reexecução : {r['req']} requisições, {r['cache']} do cache, {r['bytes']} B pela rede")
    print(f"X = A/B x 100 = {r['cache']}/{r['req']} x 100 = {100 * r['cache'] / r['req']:.1f}%")
    t = resumo["R|telemetria"]
    print(f"Telemetria na reexecução: {t['req']} tentativas, {t['bloqueadas']} bloqueadas, {t['bytes']} B")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else HAR)
