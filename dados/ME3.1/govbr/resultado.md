# ME3.1 – Teste complementar no portal gov.br

> Teste complementar, feito em um portal real (`www.gov.br/pt-br`) e fora do protocolo padronizado da Fase 3. O resultado oficial da ME3.1, na página de teste com as 10 frases padronizadas, está em `../padronizado/`.

| Item | Registro |
| ---- | -------- |
| Característica | Eficiência de Desempenho |
| Questão | Q3-E – Qual é o volume de dados de rede consumido ao utilizar os recursos de repetição de vídeo, alteração de velocidade e consulta ao dicionário? |
| Hipótese | H3-E – As ações de repetição e alteração de velocidade de um trecho já traduzido reutilizam o cache local em 100% dos casos, sem tráfego adicional na rede. |
| Data da coleta | 15/11/2026, das 21:31 às 21:53 (horário de Brasília) |
| Responsável | Geovane S. Freitas |
| Definição da métrica | `website/docs/fase-2/metricas.md`, seção ME3.1 |
| Critério de pontuação | `website/docs/fase-2/pontuacao-e-criterios.md`, linha ME3.1 |

## Resultado

| Indicador | Valor |
| --------- | ----- |
| **X = (A / B) × 100 (reexecução)** | **177 / 185 × 100 = 95,7 %** |
| X só das ações sobre trechos traduzidos (repetir, velocidade, pausar/retomar) | 36 / 42 = 85,7 % |
| X só do dicionário (reabertura e nova busca de ABERTO) | 141 / 143 = 98,6 % |
| Dados de rede na 1ª execução | 917.817 B ≈ **918 kB** (283 requisições; 84 pela rede, 199 pelo cache) |
| Dados de rede na reexecução | 17.539 B ≈ **17,5 kB** (185 requisições; 8 pela rede, 177 pelo cache) |
| Redução de volume da 1ª execução para a reexecução | 98,1 % |
| Nível de pontuação | **Satisfatório/Ideal (4 a 5)**: X ≥ 95 % (`pontuacao-e-criterios.md`) |

A = requisições da reexecução atendidas pelo cache local (coluna *Size* com `(disk cache)`/`(memory cache)`, `_fromCache` no HAR, ou status 204/304). B = total de requisições disparadas pelas ações da reexecução. Bytes = coluna *Size* da aba *Network* (`_transferSize` no HAR). 1 kB = 1.000 B.

### Por ação

| Ação do roteiro | 1ª execução: requisições (rede / cache) | 1ª execução: bytes | Reexecução: requisições (rede / cache) | Reexecução: bytes | Prints |
| --------------- | :-------------------------------------: | -----------------: | :------------------------------------: | ----------------: | ------ |
| Tradução, repetição e velocidade – texto 1 (Agricultura) | 47 (25 / 22) | 322.876 | 18 (2 / 16) | 2.332 | 03 a 07 |
| Tradução, repetição e velocidade – texto 2 (Assistência Social) | 25 (13 / 12) | 147.696 | 5 (1 / 4) | 1.151 | 08 a 11 |
| Tradução, repetição e velocidade – texto 3 (Pesquisa e ciência) | 19 (11 / 8) | 124.744 | 10 (2 / 8) | 2.305 | 12 a 14 |
| Tradução, repetição e velocidade – texto 4 (Autorizações) | 13 (9 / 4) | 117.737 | 9 (1 / 8) | 1.144 | 15 e 16 |
| Dicionário (1ª vez: ABERTO, ABELHA, ABSTRATO, ABRIDOR, AÇÃO, ABACATE; reexecução: ABERTO) | 179 (26 / 153) | 204.764 | 143 (2 / 141) | 10.607 | 17 a 27 |
| **Total** | **283 (84 / 199)** | **917.817** | **185 (8 / 177)** | **17.539** | |

### O que foi para a rede na reexecução (8 de 185)

| Requisição | Quantidade | Bytes | Por quê |
| ---------- | ---------: | ----: | ------- |
| `POST traducao2.vlibras.gov.br/translate` | 6 | 6.932 (≈ 1,15 kB cada) | Ao reproduzir de novo um texto já traduzido, o widget reenvia o texto ao tradutor; a tradução não fica em cache local |
| `GET repositorio.vlibras.gov.br/api/tags` | 1 | 2.558 | Lista de categorias do dicionário, pedida de novo ao reabrir o dicionário depois de 5 minutos; a resposta não tem cabeçalhos de cache |
| `GET repositorio.vlibras.gov.br/api/tagsigns?tag=ADJETIVOS` | 1 | 8.049 | Lista de sinais da categoria, pedida de novo pelo mesmo motivo |

As outras 177 requisições foram ícones da interface, o índice do dicionário (`2018.3.1.json`) e redirecionamentos, todos lidos do cache de disco. **Nenhum sinal já baixado foi baixado de novo**: nem os sinais das frases, nem o sinal ABERTO no dicionário. A lista completa está em `requisicoes_classificadas.csv` (colunas `execucao`, `acao`, `trecho`, `atendida_por`, `bytes_rede`).

## Interpretação

1. **Velocidade, pausa e repetição reaproveitam os sinais.** Nos quatro textos a velocidade foi trocada entre 0.5x, 1x e 2x (no texto 4, 1x e 2x), com pausas e repetições (prints 04 a 16). Nenhuma dessas ações baixou sinais de novo: os sinais da frase ficam na memória do *player*, e os ícones vêm do cache de disco. Trocar a velocidade durante a reprodução, sozinho, não gerou nova chamada ao tradutor (print 10).
2. **A tradução é sempre pedida de novo.** Das 42 requisições das ações sobre trechos traduzidos, 6 foram `POST /translate` reenviando o mesmo texto (≈ 1,15 kB cada, 32–70 ms, contra 40–238 ms na 1ª tradução de cada texto). É isso que deixa essas ações em 85,7 %.
3. **O dicionário reaproveita o índice e os sinais, mas não as listas.** Na 1ª abertura, o índice `2018.3.1.json` (3,47 MB) já veio do cache de disco (ver Limitações). Ao reabrir o dicionário às 21:48:43, quase 10 minutos depois da 1ª abertura, o widget pediu de novo o índice (de novo do cache de disco, print 26) e baixou de novo a lista de categorias (`api/tags`) e a lista de sinais de ADJETIVOS (`api/tagsigns`), que não têm cabeçalhos de cache. O código do widget guarda esses dados num cache em memória com validade de 5 minutos (`DEFAULT_STALE_TIME = 1000 * 60 * 5` em `src/common/hooks/use-query.ts`, repositório `vlibras-web-browsers`). Na reabertura seguinte, às 21:49:00, dentro dos 5 minutos, nada disso foi pedido. O sinal ABERTO, reproduzido várias vezes, não foi baixado de novo (prints 23 a 25).
4. **Sinais compartilhados entre textos.** Os textos 1, 2 e 4 começam com "Serviços relacionados…" e terminam com "…entre outros", e o texto 3 também começa com "Serviços relacionados…". Os sinais SERVIÇO, RELACIONAR&COMPARAR, ENTRE e OUTRO só foram baixados na tradução do texto 1, e APOIO, EMPRESA e PROMOÇÃO&PROMOVER também foram reaproveitados entre textos (print 27, filtro `dicionario2`: cada sinal aparece uma vez).
5. **Hipótese H3-E.** Para repetição e alteração de velocidade, a hipótese se confirma quanto aos sinais e ícones (100 % reaproveitados), mas **não** quanto a "sem tráfego adicional": cada reprodução repetida reenviou o texto ao tradutor (≈ 1,15 kB).

**Conclusão:** X = 95,7 %, nível **Satisfatório/Ideal (4 a 5)**, perto do limite: com 2 requisições pela rede a mais na reexecução, X cairia para 94,7 % (Aceitável/Regular). O tráfego restante vem do reenvio do texto ao tradutor e das listas do dicionário, pedidas de novo depois de 5 minutos; somados, foram 17,5 kB contra 918 kB da 1ª execução.

### Ativação do widget (fora do cálculo)

Antes da primeira tradução, o widget fez 74 requisições (scripts, fontes, ícones e os arquivos do *player* Unity). 68 vieram do cache de disco e 6 foram para a rede (6.073 B: ícone `hands.webp`, um `HEAD` do *player* e o avatar `guga.webp`). O aviso de consentimento de coleta de dados apareceu de novo (print 02), o que mostra que os dados do site gov.br foram apagados, mas os arquivos do widget continuaram no cache HTTP do navegador.

## Ambiente

| Item | Valor |
| ---- | ----- |
| Página | `https://www.gov.br/pt-br` (seção "Navegue por categoria"), com o VLibras Widget embutido |
| Widget | `vlibras.gov.br/app/vlibras-plugin-app.js?v=7.12.2`; tradução em `traducao2.vlibras.gov.br`; sinais em `dicionario2.vlibras.gov.br`; listas do dicionário em `repositorio.vlibras.gov.br` |
| Navegador | Brave (Chromium 157), Windows 10 x64, perfil do avaliador, Brave Shields ativo (padrão) |
| Ferramenta | DevTools, aba *Network*: *Keep log* ligado, *Disable cache* desligado, *No throttling* |
| Rede | Conexão residencial do avaliador, sem limitação de banda |
| Estado do cache | Dados do site gov.br apagados antes da coleta; o cache de `dicionario2.vlibras.gov.br` foi limpo depois, abrindo esse endereço direto (ver Limitações) |

## Procedimento executado

1. Limpar os dados do site gov.br, abrir `https://www.gov.br/pt-br` no Brave com o DevTools na aba *Network* (*Keep log* ligado, *Disable cache* desligado) e ativar o VLibras (prints 01 e 02).
2. **Tradução, velocidade e repetição**: para cada um de 4 textos da seção "Navegue por categoria", clicar no texto (1ª execução) e depois reproduzi-lo de novo, alterando a velocidade (0.5x, 1x, 2x), pausando, retomando e usando "Repetir" (reexecução) (prints 03 a 16).
3. **Dicionário, 1ª execução**: abrir o dicionário e reproduzir ABERTO, ABELHA, ABSTRATO, ABRIDOR, AÇÃO e ABACATE, cada um pela sua categoria (prints 17 a 22).
4. **Dicionário, reexecução**: reabrir o dicionário e reproduzir ABERTO várias vezes (prints 23 a 25).
5. Prints com filtro `2018.3.1.json` e `dicionario2` no fim do registro (prints 26 e 27).
6. Exportar o HAR da aba *Network* (`brutos/ME3.1_govbr_2026-11-15.har`).
7. Rodar `python ME3.1_calculo.py`, que classifica cada requisição do HAR por ação e execução e gera `requisicoes_classificadas.csv` e os totais acima.

### Diferenças em relação ao protocolo da Fase 3

| Item | Protocolo (Fase 3) | Este teste |
| ---- | ------------------ | ---------- |
| Página | Página de teste com as 10 frases padronizadas | `www.gov.br/pt-br` (portal P1 da amostra), com o widget já embutido |
| Textos traduzidos | F1 a F10 | 4 descrições de cartões da seção "Navegue por categoria" |
| Termos do dicionário | protocolo, benefício, prazo, comprovante e requerente | ABERTO, ABELHA, ABSTRATO, ABRIDOR, AÇÃO e ABACATE, cada um de uma categoria do dicionário |
| Cache | Arquivos em cache do navegador limpos antes | Só os dados do site gov.br foram apagados |

### Critérios de classificação

| Situação | Classificação |
| -------- | ------------- |
| Requisições antes da primeira tradução | Ativação, fora do cálculo |
| Trecho de tradução cujo texto é enviado pela primeira vez (cada `POST /translate` abre um trecho) | 1ª execução |
| Trecho de tradução cujo texto já tinha sido traduzido | Reexecução |
| Dicionário, de 21:39:15 (menu → Dicionário) até 21:48:43 | 1ª execução |
| Dicionário, de 21:48:43 (reabertura) até o fim | Reexecução |
| *Size* = `(disk cache)`/`(memory cache)` (`_fromCache`), ou status 204/304 | Cache (conta em A) |
| Demais respostas | Rede; bytes = `_transferSize` |
| Telemetria (`posthog.com`) | Fora de A e B: 318 requisições, 313 bloqueadas pelo navegador, 2 do cache e 3 pela rede (`/flags/`, ≈ 0,48 kB cada, a cada 5 min) |

## Limitações

- **Índice do dicionário já em cache.** Mesmo com os dados do gov.br apagados, o índice `2018.3.1.json` veio do cache de disco já na 1ª abertura (print 26), e o mesmo aconteceu com quase todos os arquivos do widget. Limpar o cache abrindo `dicionario2.vlibras.gov.br` direto não resolveu. A explicação provável é que o navegador guarda o cache HTTP separado por site de primeiro nível, e os arquivos do VLibras usados dentro do gov.br ficam na área do gov.br. Por isso, os 3,47 MB do índice não aparecem na 1ª execução, que subestima o volume de um primeiro uso real. Para a próxima coleta, limpar o cache inteiro do navegador antes (Configurações → Privacidade → Limpar dados de navegação → "Imagens e arquivos armazenados em cache").
- **Corte entre 1ª execução e reexecução.** Cada trecho de tradução vai de um `POST /translate` até o próximo. Pausas e trocas de velocidade feitas durante a 1ª reprodução de um texto, antes de uma nova chamada ao tradutor (prints 04 e 10), ficaram na 1ª execução. Essas ações só geraram requisições do cache; se todas as 46 requisições do cache dos trechos de 1ª tradução fossem contadas na reexecução, X subiria no máximo para 223 / 231 = 96,5 %.
- **Ação exata de cada requisição.** O HAR registra as requisições, não os botões clicados. As velocidades estão documentadas nos prints (cada print mostra a velocidade no rodapé do widget).
- **HAR só com os domínios do VLibras.** O HAR tem 860 requisições, dos domínios do VLibras e da PostHog; as requisições da própria página do gov.br não estão nele. Por isso a barra inferior (1.482 kB transferidos, print 27) é maior que a soma do HAR (943 kB). O filtro `dicionario2` confere exatamente com o HAR: 68 requisições e 874 kB nos dois.
- **Telemetria bloqueada.** O Brave bloqueia quase toda a telemetria da PostHog por padrão. Se a telemetria da reexecução (153 tentativas) entrasse em B, X cairia para 177 / 338 = 52,4 %. Em outro navegador, esses envios iriam de fato para a rede.
- **Uma única sessão.** Para média e variação, repetir o roteiro em outros dias, navegadores e redes.

## Evidências

| Arquivo | Conteúdo |
| ------- | -------- |
| `brutos/ME3.1_govbr_2026-11-15.har` | HAR da aba *Network* (860 requisições, das 21:31 às 21:53) |
| `requisicoes_classificadas.csv` | Todas as requisições do HAR, com ação, trecho, execução (E1/R/fora), cache ou rede e bytes |
| `ME3.1_calculo.py` | Script que recalcula tudo a partir do HAR |
| `prints/01` a `prints/27` | Aba *Network* do DevTools durante a coleta (lista abaixo) |

| Print | Momento | Velocidade | Barra inferior da aba *Network* |
| ----- | ------- | ---------- | -------------------------------- |
| 01 | Ativação: widget iniciando, arquivos do cache de disco | – | não visível |
| 02 | Ativação: aviso de consentimento | – | 138 requests, 542 kB, 22,4 MB de recursos |
| 03 | Texto 1, 1ª tradução: sinais baixados | 1x | não visível |
| 04 | Texto 1, pausa durante a 1ª reprodução | 1x | 218 requests, 868 kB |
| 05 | Texto 1, reexecução | 0.5x | não visível |
| 06 | Texto 1, reexecução | 2x | 266 requests, 871 kB |
| 07 | Texto 1, reexecução | 0.5x | 286 requests, 871 kB |
| 08 | Texto 2, 1ª tradução | 1x | 328 requests, 1,0 MB |
| 09 | Texto 2, 1ª tradução | 1x | 338 requests, 1,0 MB |
| 10 | Texto 2, velocidade trocada durante a 1ª reprodução (sem nova chamada ao tradutor) | 0.5x | 349 requests, 1,0 MB |
| 11 | Texto 2, reexecução | 2x | 359 requests, 1,0 MB |
| 12 | Texto 3, 1ª tradução | 2x | 385 requests, 1,1 MB |
| 13 | Texto 3, reexecução | 1x | 403 requests, 1,1 MB |
| 14 | Texto 3, reexecução | 0.5x | 415 requests, 1,1 MB |
| 15 | Texto 4, 1ª tradução | 1x | 439 requests, 1,3 MB |
| 16 | Texto 4, reexecução | 2x | 450 requests, 1,3 MB |
| 17 | Dicionário, 1ª vez: ABERTO | 2x | 554 requests, 1,3 MB |
| 18 | Dicionário, 1ª vez: ABELHA | 2x | 573 requests, 1,3 MB |
| 19 | Dicionário, 1ª vez: ABSTRATO | 2x | 586 requests, 1,4 MB |
| 20 | Dicionário, 1ª vez: ABRIDOR | 2x | 602 requests, 1,4 MB |
| 21 | Dicionário, 1ª vez: AÇÃO | 1x | 687 requests, 1,4 MB |
| 22 | Dicionário, 1ª vez: ABACATE | 1x | 707 requests, 1,5 MB |
| 23 | Dicionário, reexecução: ABERTO | 1x | 885 requests, 1,5 MB |
| 24 | Dicionário, reexecução: ABERTO | 1x | 895 requests, 1,5 MB |
| 25 | Dicionário, reexecução: ABERTO (fim) | 1x | 903 requests, 1,5 MB |
| 26 | Filtro `2018.3.1.json`: índice pedido 2 vezes, as duas do cache de disco | – | – |
| 27 | Filtro `dicionario2`, fim do registro: cada sinal baixado uma única vez | – | 68 / 931 requests, 874 kB / 1.482 kB |
