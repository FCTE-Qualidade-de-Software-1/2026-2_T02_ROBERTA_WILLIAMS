# ME3.1 – Volume de dados consumidos por requisição e taxa de reuso do cache (coleta padronizada)

| Item | Registro |
| ---- | -------- |
| Característica | Eficiência de Desempenho |
| Questão | Q3-E – Qual é o volume de dados de rede consumido ao utilizar os recursos de repetição de vídeo, alteração de velocidade e consulta ao dicionário? |
| Hipótese | H3-E – As ações de repetição e alteração de velocidade de um trecho já traduzido reutilizam o cache local em 100% dos casos, sem tráfego adicional na rede. |
| Data da coleta | 15/11/2026, das 22:31 às 22:56 (horário de Brasília) |
| Responsável | Geovane S. Freitas |
| Definição da métrica | `website/docs/fase-2/metricas.md`, seção ME3.1 |
| Critério de pontuação | `website/docs/fase-2/pontuacao-e-criterios.md`, linha ME3.1 |
| Protocolo | `website/docs/fase-3/metodo-de-avaliacao.md` (ME3.1) e `website/docs/fase-3/massa-de-dados.md` (roteiro "Rede e cache") |

Um teste complementar, feito no portal `www.gov.br/pt-br` fora deste protocolo, está em `../govbr/`.

## Resultado

| Indicador | Valor |
| --------- | ----- |
| **X = (A / B) × 100 (reexecução)** | **154 / 202 × 100 = 76,2 %** |
| Dados de rede na 1ª execução (10 frases e 5 termos do dicionário) | 5.347.052 B ≈ **5,35 MB** (387 requisições; 239 pela rede, 148 pelo cache) |
| Dados de rede na reexecução (21 reproduções repetidas das 10 frases) | 28.073 B ≈ **28,1 kB** (202 requisições; 48 pela rede, 154 pelo cache) |
| Redução de volume da 1ª execução para a reexecução | 99,5 % |
| Nível de pontuação | **Ruim (1 a 2)**: X &lt; 80 % (`pontuacao-e-criterios.md`) |

A = requisições da reexecução atendidas pelo cache local (coluna *Size* com `(disk cache)`/`(memory cache)`, `_fromCache` no HAR, ou status 204/304). B = total de requisições disparadas pelas ações da reexecução. Bytes = coluna *Size* da aba *Network* (`_transferSize` no HAR). 1 kB = 1.000 B.

### O que foi para a rede na reexecução (48 de 202)

| Requisição | Quantidade | Bytes | Por quê |
| ---------- | ---------: | ----: | ------- |
| `POST traducao2.vlibras.gov.br/translate` | 21 | 23.203 (≈ 1,1 kB cada) | A cada nova reprodução, o widget reenvia o texto ao tradutor; a tradução não fica em cache local |
| `OPTIONS traducao2.vlibras.gov.br/translate` | 21 | 0 | Verificação CORS (*preflight*) enviada pelo navegador antes de cada `POST` |
| `GET dicionario2…/WEBGL/GOV`, `…/12` e `…/90` | 6 | 4.870 | Sinais que não existem no servidor (404) nas frases F3, F9 e F10; como a resposta é erro, nada fica guardado e o pedido se repete a cada reprodução |

As outras 154 requisições foram ícones da interface e seus redirecionamentos, todos lidos do cache de disco. **Nenhum sinal baixado na 1ª execução foi baixado de novo.** A lista completa está em `requisicoes_classificadas.csv` (colunas `execucao`, `acao`, `trecho`, `atendida_por`, `bytes_rede`).

### Por frase

| Frase | 1ª execução (1x): requisições (rede / cache) | 1ª execução: bytes | Reexecuções | Reexecução: requisições (rede / cache) | Reexecução: bytes |
| ----- | :------------------------------------------: | -----------------: | ----------: | :------------------------------------: | ----------------: |
| F1 | 14 (10 / 4) | 80.091 | 2 | 16 (4 / 12) | 2.122 |
| F2 | 14 (8 / 6) | 77.258 | 2 | 22 (4 / 18) | 2.110 |
| F3 | 19 (11 / 8) | 111.457 | 2 | 14 (6 / 8) | 3.757 |
| F4 | 22 (14 / 8) | 143.299 | 2 | 20 (4 / 16) | 2.166 |
| F5 | 24 (16 / 8) | 188.262 | 3 | 24 (6 / 18) | 3.266 |
| F6 | 24 (18 / 6) | 196.478 | 2 | 12 (4 / 8) | 2.257 |
| F7 | 24 (14 / 10) | 164.397 | 2 | 18 (4 / 14) | 2.150 |
| F8 | 24 (22 / 2) | 254.214 | 2 | 24 (4 / 20) | 2.376 |
| F9 | 27 (23 / 4) | 260.923 | 2 | 22 (6 / 16) | 3.880 |
| F10 | 33 (27 / 6) | 280.521 | 2 | 30 (6 / 24) | 3.989 |
| Dicionário (5 termos) | 162 (76 / 86) | 3.590.152 | – | – | – |
| **Total** | **387 (239 / 148)** | **5.347.052** | **21** | **202 (48 / 154)** | **28.073** |

Cada frase foi traduzida pela primeira vez a 1x e reproduzida de novo a 0.5x e a 2x (na F5, uma reprodução a mais).

## Interpretação

1. **Velocidade e repetição reaproveitam os sinais.** Em nenhuma das 21 reproduções repetidas um sinal já baixado foi pedido de novo: os sinais ficam na memória do *player*, e os ícones vêm do cache de disco (prints 04 a 32).
2. **Cada reprodução repetida gera duas requisições de rede.** O widget reenvia o texto ao tradutor (`POST /translate`, ≈ 1,1 kB, 56–99 ms contra 145–246 ms na 1ª tradução de cada frase), e o navegador faz antes uma verificação CORS (`OPTIONS`, 0 kB). São 42 das 48 requisições pela rede da reexecução.
3. **Sinais inexistentes são pedidos de novo.** GOV (F3), 12 (F9) e 90 (F10) retornam 404 do servidor de sinais e são pedidos de novo a cada reprodução (o avatar soletra a palavra).
4. **O dicionário reaproveita os sinais já carregados.** Dos 5 termos consultados, BENEFÍCIO (F7), PROTOCOLO (F8), COMPROVANTE e REQUERENTE (F10) já tinham sido baixados nas frases e foram reproduzidos sem nenhuma requisição; só PRAZO foi baixado (33,2 kB). O histórico do dicionário no `localStorage` confirma os 5 termos consultados (print 38). A maior parte do volume do dicionário é o índice `2018.3.1.json` (3,48 MB), baixado pela rede na abertura (print 39).
5. **Hipótese H3-E: não confirmada.** Os sinais e os ícones foram 100 % reaproveitados, mas toda reprodução repetida gerou tráfego adicional (tradução, verificação CORS e sinais inexistentes). Em volume, esse tráfego é pequeno: 28,1 kB na reexecução, contra 5,35 MB na 1ª execução.

**Conclusão:** X = 76,2 %, nível **Ruim (1 a 2)** pela fórmula da ficha, que conta requisições. Em volume de dados, a reexecução consumiu 99,5 % menos que a 1ª execução. O que derruba X é o fato de o resultado da tradução não ser guardado localmente: cada reprodução reenvia o texto e, nesta página, dispara também a verificação CORS.

### Sensibilidade do resultado

| Cenário | A / B | X | Nível |
| ------- | ----- | - | ----- |
| Todas as requisições da reexecução (resultado oficial) | 154 / 202 | 76,2 % | Ruim |
| Sem as verificações CORS (`OPTIONS`) | 154 / 181 | 85,1 % | Aceitável/Regular |
| Sem as verificações CORS e sem os sinais inexistentes (404) | 154 / 175 | 88,0 % | Aceitável/Regular |
| Incluindo a telemetria em B | 154 / 257 | 59,9 % | Ruim |

No teste complementar no gov.br (`../govbr/`), as verificações CORS não apareceram e X ficou em 95,7 %. A diferença provável é a origem da página: a página de teste é aberta como arquivo local (`file://`), e o navegador faz a verificação CORS a cada `POST`.

### Ativação do widget (fora do cálculo)

Antes da primeira tradução, o widget fez 70 requisições: 7 pela rede (21.417 B, entre elas o `vlibras-plugin.js` e as imagens do botão de acesso) e 63 do cache de disco, incluindo os arquivos do *player* Unity.

## Ambiente

| Item | Valor |
| ---- | ----- |
| Página | `instrumentos/pagina-teste.html`, aberta localmente, com o widget carregado pelo código padrão de instalação (`vlibras.gov.br/app/vlibras-plugin.js`) |
| Widget | `vlibras-plugin-app.js?v=7.12.2`; tradução em `traducao2.vlibras.gov.br`; sinais e índice em `dicionario2.vlibras.gov.br` |
| Navegador | Brave (Chromium 157), Windows 10 x64, perfil do avaliador |
| Ferramenta | DevTools, aba *Network*: *Keep log* ligado, *Disable cache* desligado, *No throttling* |
| Rede | Conexão residencial do avaliador, sem limitação de banda |
| Estado do cache | Arquivos em cache do navegador limpos antes da coleta |

## Procedimento executado

1. Limpar os arquivos em cache do navegador e abrir a página de teste com o DevTools na aba *Network* (*Keep log* ligado, *Disable cache* desligado); ativar o widget (prints 01 e 02).
2. **1ª execução:** traduzir F1 a F10 a 1x; abrir o dicionário e consultar PROTOCOLO, BENEFÍCIO, PRAZO, COMPROVANTE e REQUERENTE (prints 03 a 37).
3. **Reexecução:** depois da 1ª tradução de cada frase, reproduzi-la de novo a 0.5x e a 2x com "Repetir" (prints 04 a 32).
4. Prints do histórico do dicionário (print 38) e do filtro `dicionario2` com o total final (print 39).
5. Exportar o HAR (`brutos/ME3.1_Padronizado_2026-11-15.har`).
6. Rodar `python ME3.1_calculo.py`, que classifica cada requisição do HAR por ação e execução e gera `requisicoes_classificadas.csv` e os totais acima.

### Critérios de classificação

| Situação | Classificação |
| -------- | ------------- |
| Requisições antes da primeira tradução | Ativação, fora do cálculo |
| Trecho de tradução cujo texto é enviado pela primeira vez (cada `POST /translate` abre um trecho) | 1ª execução |
| Trecho de tradução cujo texto já tinha sido traduzido | Reexecução |
| Dicionário, a partir de 22:49:26 (menu → Dicionário) | 1ª execução |
| *Size* = `(disk cache)`/`(memory cache)` (`_fromCache`), ou status 204/304 | Cache (conta em A) |
| Demais respostas, inclusive `OPTIONS` e erros 404 | Rede; bytes = `_transferSize` |
| Telemetria (`posthog.com`) | Fora de A e B: 132 requisições, 36.051 B (55 na reexecução) |

## Limitações

- **Telemetria.** Na página local, os envios de telemetria do widget (PostHog, ≈ 0,3 kB a cada 5 s) não foram bloqueados pelo navegador. Eles ficaram fora de A e B por serem periódicos e não dependerem da ação executada; com eles, X seria 59,9 %.
- **Verificação CORS.** As 21 requisições `OPTIONS` são feitas pelo navegador, não pelo código do widget, e dependem da origem da página. Elas foram mantidas em B porque são disparadas pelas ações da reexecução (ver "Sensibilidade do resultado").
- **Totais da barra inferior × HAR.** A barra inferior mostra 907 requisições e 6.710 kB transferidos (print 39), e o HAR soma 791 requisições e 5.433 kB: a aba *Network* também lista arquivos de extensões do navegador, que não entram no HAR. O filtro `dicionario2` confere exatamente com o HAR: 150 requisições e 5.261 kB nos dois.
- **Uma única sessão.** Para média e variação, repetir o roteiro em outros dias, navegadores e redes.

## Evidências

| Arquivo | Conteúdo |
| ------- | -------- |
| `brutos/ME3.1_Padronizado_2026-11-15.har` | HAR da aba *Network* (791 requisições, das 22:31 às 22:56) |
| `requisicoes_classificadas.csv` | Todas as requisições do HAR, com ação, trecho, execução (E1/R/fora), cache ou rede e bytes |
| `ME3.1_calculo.py` | Script que recalcula tudo a partir do HAR |
| `prints/01` a `prints/39` | Aba *Network* do DevTools durante a coleta (lista abaixo) |

| Prints | Momento | Barra inferior da aba *Network* (requisições, transferido) |
| ------ | ------- | ---------------------------------------------------------- |
| 01 e 02 | Ativação do widget e aviso de consentimento | 179 → 183, 1,3 MB |
| 03 a 05 | F1 a 1x, 0.5x e 2x | 212 → 231, 1,4 MB |
| 06 a 08 | F2 a 1x, 0.5x e 2x | 248 → 274, 1,5 MB |
| 09 a 11 | F3 a 1x, 0.5x e 2x | 299 → 319, 1,6 MB |
| 12 a 14 | F4 a 1x, 0.5x e 2x | 343 → 370, 1,7 MB |
| 15 a 17 | F5 a 1x, 0.5x e 2x | 396 → 421, 1,9 MB |
| 18 a 20 | F6 a 1x, 0.5x e 2x | 456 → 474, 2,1 MB |
| 21 a 23 | F7 a 1x, 0.5x e 2x | 498 → 521, 2,3 MB |
| 24 a 26 | F8 a 1x, 0.5x e 2x | 552 → 578, 2,6 MB |
| 27 a 29 | F9 a 1x, 0.5x e 2x | 610 → 637, 2,8 MB |
| 30 a 32 | F10 a 1x, 0.5x e 2x | 674 → 704, 3,1 MB |
| 33 a 37 | Dicionário: PROTOCOLO, BENEFÍCIO, PRAZO, COMPROVANTE e REQUERENTE | 807 → 902, 6,7 MB |
| 38 | Histórico do dicionário no `localStorage` (5 termos) | – |
| 39 | Filtro `dicionario2`, fim do registro | 150 / 907, 5.261 kB / 6.710 kB |
