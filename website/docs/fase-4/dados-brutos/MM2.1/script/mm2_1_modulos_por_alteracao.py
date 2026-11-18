#!/usr/bin/env python3
"""
MM2.1 - Média de Módulos Impactados por Alteração (VLibras Web Browsers)

Uso:
  git clone https://github.com/spbgovbr-vlibras/vlibras-web-browsers.git
  cd vlibras-web-browsers
  python3 mm2_1_modulos_por_alteracao.py --paths src/caminho/velocidade src/caminho/repeticao ...

Saídas (na pasta atual):
  MM2.1_<data>_alteracoes.csv   -> uma linha por alteração (commit ou PR)
  MM2.1_<data>_resumo.txt       -> comando usado, total, média, mediana, classificação
"""
import argparse, csv, re, subprocess, statistics, datetime, collections

MODULE_MAP = {
    "src/loader":  "Loader",
    "src/widget":  "Widget",
    "src/player":  "Player",
    "src/core":    "Core e Common",
    "src/common":  "Core e Common",
    "extensions":  "Extensão",
    "public/unity": "Player",  
}

def sh(*args):
    args = (args[0], "-c", "core.quotepath=off") + args[1:]
    return subprocess.run(args, capture_output=True, text=True, check=True,
                          encoding="utf-8", errors="replace").stdout

EXCLUDE = None

def module_of(path):
    for prefix, name in MODULE_MAP.items():
        if path.startswith(prefix):
            return name
    parts = path.split("/")
    return parts[0] if len(parts) > 1 else "Raiz"

def pr_key(subject, h):
    m = re.search(r"\(#(\d+)\)|[Mm]erge (?:request|pull request) [#!](\d+)|!(\d+)", subject)
    return ("PR#" + next(g for g in m.groups() if g)) if m else h

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--paths", nargs="+", required=True, help="caminhos dos controles (velocidade, repetição, regionalismo)")
    ap.add_argument("--group-by-pr", action="store_true", help="agrupar commits do mesmo PR")
    ap.add_argument("--include-merges", action="store_true")
    ap.add_argument("--drop-modules", default="", help="módulos fora da Tabela 4 a não contar, separados por vírgula (ex.: src,Raiz,demo,public)")
    ap.add_argument("--exclude", help="regex de arquivos a ignorar na contagem (ex.: bundles gerados)")
    a = ap.parse_args()

    global EXCLUDE
    EXCLUDE = re.compile(a.exclude) if a.exclude else None
    cmd = ["git", "log", "--pretty=format:%h\t%s"]
    if not a.include_merges:
        cmd.insert(2, "--no-merges")
    cmd += ["--"] + a.paths
    commits = [l.split("\t", 1) for l in sh(*cmd).splitlines() if l]

    groups = collections.OrderedDict()
    for h, subj in commits:
        files = [f for f in sh("git", "show", "--no-renames", "--name-only", "--pretty=format:", h).splitlines() if f and not (EXCLUDE and EXCLUDE.search(f))]
        key = pr_key(subj, h) if a.group_by_pr else h
        g = groups.setdefault(key, {"commits": [], "files": set()})
        g["commits"].append(h); g["files"].update(files)

    rows = []
    for key, g in groups.items():
        drop = {m.strip() for m in a.drop_modules.split(",") if m.strip()}
        mods = sorted({module_of(f) for f in g["files"]} - drop)
        rows.append([key, " ".join(g["commits"]), len(g["files"]), "; ".join(sorted(g["files"])), "; ".join(mods), len(mods)])

    d = datetime.date.today().isoformat()
    with open(f"MM2.1_{d}_alteracoes.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["alteracao", "commits", "n_arquivos", "arquivos", "modulos", "n_modulos"])
        w.writerows(rows)

    ns = [r[5] for r in rows]
    mean = sum(ns) / len(ns) if ns else float("nan")
    cls = "Baixo (<=2)" if mean <= 2 else ("Alto (>4)" if mean > 4 else "Intermediário (2-4)")
    resumo = (
        f"Comando: {' '.join(cmd)}\n"
        f"Alterações analisadas: {len(ns)}\n"
        f"Soma de módulos distintos: {sum(ns)}\n"
        f"MM2.1 (média) = {mean:.2f} módulos/alteração  -> {cls}\n"
        f"Mediana: {statistics.median(ns) if ns else 'n/a'}\n"
        f"Distribuição (n_modulos: qtd): {dict(sorted(collections.Counter(ns).items()))}\n"
    )
    open(f"MM2.1_{d}_resumo.txt", "w", encoding="utf-8").write(resumo)
    print(resumo)

if __name__ == "__main__":
    main()