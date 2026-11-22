---
unlisted: true
sidebar_label: Tabela de coleta
---

# MI2.1: Registro das mensagens e evidências

## Identificação da coleta

| Campo | Registro |
| ----- | -------- |
| Data dos testes | 22/11/2026 |
| Revisão do código inspecionado | `d79ca86` |
| Execução | Testes manuais relatados pelo avaliador, com DevTools e capturas fornecidas. |
| Ambientes | E1 no gov.br; demais casos em página HTML de teste. |
| Versões observadas | Player `v7.12.2`; o registro indica módulo servido pelo pacote `v7.12.3` na página de teste. |

## Critérios de classificação e cálculo

- Foram inventariadas 15 apresentações candidatas: E1–E7 e S1–S8. A unidade é a apresentação da mensagem; textos iguais em apresentações diferentes, como S2 e S3, são contados separadamente.
- **Somente texto:** não foi observado ícone explicativo nem sinalização do avatar associada à mensagem. Cor e barra de progresso, por si sós, não contam como ícone ou sinalização.
- **Com recurso visual:** foi observado ícone, indicador visual de carregamento ou sinalização do avatar associado à mensagem.
- Há evidência da tentativa para as 15 apresentações candidatas. Em cinco casos, porém, a captura mostra a tentativa ou um estado posterior, não o texto/status candidato; esses casos ficam fora do cálculo. Isso não prova que sejam impossíveis de reproduzir.
- Falhas sem mensagem são registradas separadamente e não entram no numerador nem no denominador.
- E2 e E3 são contados separadamente, embora compartilhem a tela. E5 e E6 são estados vazios, não erros técnicos, e foram mantidos como mensagens de status.

**Tabela 1.** Inventário das mensagens candidatas, conteúdo capturado e classificação.

| ID | Origem no código | Texto | Gatilho e resultado observado | Recurso visual observado | Classificação | Evidência |
| -- | ---------------- | ----- | ---------------------------- | ------------------------ | ------------- | --------- |
| E1 | `src/widget/components/unity-loading/index.tsx` | Não foi possível carregar o player. | Bloqueio de `playerweb.data.unityweb`; a captura registra a tentativa e a tela de espera, sem exibir a mensagem de erro candidata. | Não avaliável: erro não visível. | Texto candidato não capturado; fora do cálculo. | [Tela e requisições](../evidencias/e1-carregamento-e-requisicoes.png); [console](../evidencias/e1-console-requisicoes-bloqueadas.png) |
| E2 | `src/widget/screens/dictionary/components/dictionary-error.tsx` | Não foi possível carregar o dicionário de sinais. | Bloqueio de `2018.3.1.json` ao selecionar o dicionário geral A–Z. | Emoji triste. | Com recurso visual. | [E2](../evidencias/e2-dicionario-erro-e-bloqueio.png) |
| E3 | `src/widget/screens/dictionary/components/dictionary-error.tsx` | Tente novamente mais tarde. | Após tentativas repetidas em E2, o botão desapareceu e o texto surgiu. | O mesmo emoji triste da tela E2. | Com recurso visual, considerando o contexto compartilhado. | [E3](../evidencias/e3-limite-de-tentativas.png) |
| E4 | `src/widget/screens/dictionary/components/dictionary-categories.tsx` | Sem conexão com a internet. Não é possível estabelecer conexão com o banco de sinais. | Bloqueio da requisição `tags` e abertura de Categorias. | Nenhum ícone explicativo observado; texto azul. | Somente texto. | [E4](../evidencias/e4-categorias-sem-conexao.png) |
| E5 | `src/widget/screens/dictionary/components/dictionary-categories.tsx` | Nenhuma categoria encontrada. | Busca sem correspondência em Categorias. | Nenhum ícone explicativo observado. | Somente texto. | [E5](../evidencias/e5-categoria-nao-encontrada.png) |
| E6 | `src/widget/screens/dictionary/components/dictionary-list.tsx` | Sem resultados para “…” | Busca sem correspondência em A–Z. | Nenhum ícone explicativo observado. | Somente texto. | [E6](../evidencias/e6-busca-sem-resultados.png) |
| E7 | `src/widget/screens/dictionary/components/dictionary-word-meaning.tsx` | Significado não encontrado. | Bloqueio de `pt.wiktionary.org` ao abrir o significado de um sinal. | Nenhum ícone explicativo observado. | Somente texto. | [E7](../evidencias/e7-significado-nao-encontrado.png) |
| S1 | `src/widget/components/unity-loading/index.tsx` | Iniciando... | Durante a inicialização do player. | Barra de progresso; sem ícone explicativo ou sinalização do avatar identificados. | Somente texto pelo critério adotado. | [S1](../evidencias/s1-iniciando.png) |
| S2 | `src/widget/dialogs/translator/index.tsx` | Traduzindo... | Envio de texto no Tradutor. | Indicador de carregamento no botão. | Com recurso visual. | [S2](../evidencias/s2-traduzindo-botao.png) |
| S3 | `src/widget/components/controls/translating-badge.tsx` | Traduzindo... | Tradução de texto da página. | Indicador de carregamento junto ao texto. | Com recurso visual. | [S3](../evidencias/s3-traduzindo-painel.png) |
| S4 | `src/widget/screens/dictionary/components/dictionary-word-meaning.tsx` | Buscando significado... | A captura registra a tentativa, mas não mostra “Buscando significado...”; mostra temporariamente “Significado não encontrado.” e depois o significado. | Não avaliável para o texto candidato. | Texto candidato não capturado; fora do cálculo. | [S4](../evidencias/s4-significado-antes-do-retorno.png) |
| S5 | `src/widget/screens/dictionary/components/dictionary-all-words.tsx` | Carregando... | A captura mostra a lista A–Z já carregada; o texto “Carregando...” não aparece. | Não avaliável para o texto candidato. | Texto candidato não capturado; fora do cálculo. | [S5](../evidencias/s5-lista-carregada.png) |
| S6 | `src/widget/dialogs/feedback/feedback-like-confirm.tsx` | Enviando | A captura registra o estado posterior ao envio; o texto “Enviando” não aparece. | Não avaliável para o texto candidato. | Texto candidato não capturado; fora do cálculo. | [Estado posterior](../evidencias/s6-s7-s8-agradecimento.png) |
| S7 | `src/widget/dialogs/feedback/feedback-suggestion.tsx` | Enviando... | A captura registra o estado posterior ao envio; o texto “Enviando...” não aparece. | Não avaliável para o texto candidato. | Texto candidato não capturado; fora do cálculo. | [Estado posterior](../evidencias/s6-s7-s8-agradecimento.png) |
| S8 | `src/widget/utils/feedback/index.ts` e `src/widget/providers/toaster/toast-item.tsx` | Agradecemos sua contribuição! | Após envio de avaliação ou sugestão. | Nenhum ícone no toast; não foi relatada sinalização associada do avatar. | Somente texto na execução observada. | [Mensagem](../evidencias/s6-s7-s8-agradecimento.png); [estado posterior do avatar](../evidencias/s8-avatar-apos-envio.png) |

O código de S8 também chama `playStatic("OBRIGADO")`. A classificação registra o que foi observado pelo avaliador; a captura estática não demonstra por si só toda a animação.

## Cálculo registrado

**Tabela 2.** Contagem conforme o critério primário da coleta.

| Indicador | Valor |
| --------- | ----: |
| Apresentações candidatas inventariadas | 15 |
| Mensagens candidatas capturadas e classificadas | 10 |
| Somente texto (A) | 6 |
| Com recurso visual | 4 |
| Tentativas documentadas, mas texto candidato não capturado; excluídas do cálculo | 5 (E1, S4, S5, S6 e S7) |
| **MI2.1 (A / B × 100)** | **6 / 10 × 100 = 60%** |

## Falhas observadas sem mensagem

São achados qualitativos; não entram na contagem das mensagens observadas.

| Caso | Observação registrada | Evidência |
| ---- | --------------------- | --------- |
| Falha de tradução | Bloqueio de `/translate`; foi observada soletração, sem aviso de falha. | [Falha na tradução](../evidencias/falha-traducao-sem-aviso.png) |
| Falha no envio de feedback | Bloqueio de `/review`; a interface prosseguiu sem aviso de erro. A captura não mostra uma mensagem de agradecimento durante a falha. | [Falha no feedback](../evidencias/falha-feedback-sem-aviso.png) |
| Falha ao carregar sinais por categoria | Bloqueio de `/tagsigns`; a categoria abriu com lista vazia e sem aviso. | [Falha nos sinais da categoria](../evidencias/falha-sinais-categoria-sem-aviso.png) |
| Falha ao carregar arquivo de sinal | Uma solicitação de sinal foi bloqueada; foi observada soletração sem aviso de falha. | [Falha no arquivo de sinal](../evidencias/falha-sinal-soletracao-observada.png) |

## Limitações do registro

- Os testes e capturas foram fornecidos pelo avaliador; não houve execução independente.
- Alguns estados são transitórios. A ausência na captura não comprova ausência em todas as execuções.
- O texto “Carregando...” do componente `src/widget/components/ui/spinner.tsx` é `sr-only` e não aparece visualmente nas capturas; não foi contado como mensagem visual independente.
- E1 foi testado no gov.br e os demais casos em uma página HTML de teste. Os prints mostram o player `v7.12.2`; o registro identifica um módulo servido pelo pacote `v7.12.3` na página de teste. A revisão `d79ca86` foi a referência do código inspecionado, portanto não se assume que todo recurso executado corresponda exatamente a essa revisão.
- A observação de que o fluxo de feedback prosseguiu após bloqueio de `/review` merece confirmação em uma nova execução antes de concluir se houve confirmação indevida.

O resultado consolidado e a comparação com os critérios estão em [MI2.1 — Proporção de Mensagens Apenas em Texto](../../../capacidade-de-interacao/mi2-1-proporcao-mensagens-apenas-texto.md).
