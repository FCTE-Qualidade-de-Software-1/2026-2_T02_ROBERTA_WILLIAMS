---
sidebar_position: 2
sidebar_label: Tabela de medições
---

# MF2.1: Ficha de integração por portal

Cada portal da [amostra da Fase 3](../../../fase-3/massa-de-dados.md#portais-da-amostra) foi testado com o código padrão de instalação do widget, injetado pelo console depois de bloqueada a instalação do próprio portal, conforme o [protocolo da MF2.1](../../../fase-3/metodo-de-avaliacao.md#mf21-taxa-de-integração-sem-ajuste-manual). As quatro verificações são: o botão de acesso aparece, o painel abre, a seleção do texto inicia a tradução e o avatar sinaliza.

## Ficha de integração

**Tabela 1.** Ficha de integração dos 10 portais.

| ID  | Portal | Instalação retirada | Texto selecionado | Botão | Painel | Seleção | Avatar | Resultado |
| --- | ------ | ------------------- | ----------------- | :---: | :----: | :-----: | :----: | --------- |
| P1  | [Portal gov.br](https://www.gov.br/pt-br) | `vlibras.gov.br/app` | "Serviços para você" | OK | OK | OK | OK | Sem ajuste |
| P2  | [Receita Federal](https://www.gov.br/receitafederal/pt-br) | `vlibras.gov.br/app` | "Encontre serviços e orientações" | OK | OK | OK | OK | Sem ajuste |
| P3  | [Ministério da Saúde](https://www.gov.br/saude/pt-br) | `vlibras.gov.br/app` | "OPAS reconhece ação de vigilância e vacinação no Brasil e pede que países reforcem o controle da doença" | OK | OK | OK | OK | Sem ajuste |
| P4  | [Casa Civil](https://www.gov.br/casacivil/pt-br) | `vlibras.gov.br/app` | "Canais de Atendimento" | OK | OK | OK | OK | Sem ajuste |
| P5  | [Controladoria-Geral da União](https://www.gov.br/cgu/pt-br) | `vlibras.gov.br/app` | "Destaques" | OK | OK | OK | OK | Sem ajuste |
| P6  | [IBGE](https://www.ibge.gov.br) | `vlibras.gov.br/app2`, carregado pela barra do Governo Federal | "Comunicados" | OK | OK | OK | OK | Sem ajuste |
| P7  | [Banco Central](https://www.bcb.gov.br) | `bcb.gov.br/assets/vlibras` (cópia própria) | "Cotação" | OK | OK | OK | OK | Sem ajuste |
| P8  | [Ipea](https://www.ipea.gov.br/portal/) | `vlibras.gov.br/app` | "Publicações Recentes" | OK | OK | OK | OK | Sem ajuste |
| P9  | [Agência Brasil](https://agenciabrasil.ebc.com.br) | `vlibras.gov.br/app` | "Veja também" | OK | OK | OK | OK | Sem ajuste |
| P10 | [Fiocruz](https://fiocruz.br) | `vlibras.gov.br/app2`, carregado pela barra do Governo Federal | "Publicação do Programa das Nações Unidas para o Desenvolvimento traz 112 práticas inovadoras de comunicação voltadas ao interesse público" | OK | OK | OK | OK | Sem ajuste |

Fonte: elaborado pelos autores, a partir dos prints da coleta. A coluna "Instalação retirada" mostra o endereço do VLibras do portal que o console registrou como bloqueado.

## Observações por portal

**Tabela 2.** Ocorrências registradas durante a coleta.

| ID  | Ocorrência | Efeito no resultado |
| --- | ---------- | ------------------- |
| P3  | O avatar soletrou "O-P-A". O console registrou que o termo não existe no dicionário do VLibras (`dicionario2.vlibras.gov.br/.../OPA`, erro 404). | Nenhum. É comportamento do serviço de tradução, não da integração. |
| P6  | O portal carrega o VLibras pela barra do Governo Federal (`barraBrasil.js`), a partir de `vlibras.gov.br/app2`. | Nenhum. |
| P7  | O portal hospeda uma cópia própria e mais antiga do VLibras. O bloqueio só funcionou com o padrão `*://*/*vlibras*`, que alcança o caminho `/assets/vlibras/`. | Nenhum. Depois do bloqueio, o código padrão foi injetado como nos demais portais. |
| P9  | A primeira injeção foi feita com o bloqueio ainda ativo e o console registrou "script bloqueado". A injeção foi repetida depois de desativar o bloqueio. | Nenhum. Falha do procedimento, corrigida na mesma sessão. |
| P10 | O portal carrega o VLibras pela barra do Governo Federal (`barra.js`), a partir de `vlibras.gov.br/app2`. O número "112" não tem sinal no dicionário (erro 404). A primeira injeção também foi feita com o bloqueio ativo e repetida. | Nenhum. |

Em todos os portais, o console mostrou avisos do próprio *player* do avatar, sem efeito no funcionamento: o aviso de *sandbox* do *iframe* criado pelo VLibras e o bloqueio de acesso ao acelerômetro e aos sensores de movimento pela política de permissões dos portais. Os demais erros do console vieram dos próprios portais, antes da injeção (ex.: `owlCarousel` no Ipea e arquivo de imagem ausente na Fiocruz).

## Evidências

**Tabela 3.** Prints de cada portal.

| ID  | Sem o widget do portal | Injeção pelo console | Tradução |
| --- | ---------------------- | -------------------- | -------- |
| P1  | [P1_01](../../dados-brutos/MF2.1/prints/P1_01_sem_widget.png) | [P1_02](../../dados-brutos/MF2.1/prints/P1_02_injecao.png) | [P1_03](../../dados-brutos/MF2.1/prints/P1_03_traducao.png) |
| P2  | [P2_01](../../dados-brutos/MF2.1/prints/P2_01_sem_widget.png) | [P2_02](../../dados-brutos/MF2.1/prints/P2_02_injecao.png) | [P2_03](../../dados-brutos/MF2.1/prints/P2_03_traducao.png) |
| P3  | [P3_01](../../dados-brutos/MF2.1/prints/P3_01_sem_widget.png) | [P3_02](../../dados-brutos/MF2.1/prints/P3_02_injecao.png) | [P3_03](../../dados-brutos/MF2.1/prints/P3_03_traducao.png) |
| P4  | [P4_01](../../dados-brutos/MF2.1/prints/P4_01_sem_widget.png) | [P4_02](../../dados-brutos/MF2.1/prints/P4_02_injecao.webp) | [P4_03](../../dados-brutos/MF2.1/prints/P4_03_traducao.png) |
| P5  | [P5_01](../../dados-brutos/MF2.1/prints/P5_01_sem_widget.png) | [P5_02](../../dados-brutos/MF2.1/prints/P5_02_injecao.png) | [P5_03](../../dados-brutos/MF2.1/prints/P5_03_traducao.png) |
| P6  | [P6_01](../../dados-brutos/MF2.1/prints/P6_01_sem_widget.png) | [P6_02](../../dados-brutos/MF2.1/prints/P6_02_injecao.png) | [P6_03](../../dados-brutos/MF2.1/prints/P6_03_traducao.png) |
| P7  | [P7_01](../../dados-brutos/MF2.1/prints/P7_01_sem_widget.png) | [P7_02](../../dados-brutos/MF2.1/prints/P7_02_injecao.png) | [P7_03](../../dados-brutos/MF2.1/prints/P7_03_traducao.webp) |
| P8  | [P8_01](../../dados-brutos/MF2.1/prints/P8_01_sem_widget.png) | [P8_02](../../dados-brutos/MF2.1/prints/P8_02_injecao.png) | [P8_03](../../dados-brutos/MF2.1/prints/P8_03_traducao.png) |
| P9  | [P9_01](../../dados-brutos/MF2.1/prints/P9_01_sem_widget.png) | [P9_02](../../dados-brutos/MF2.1/prints/P9_02_injecao.png) | [P9_03](../../dados-brutos/MF2.1/prints/P9_03_traducao.png) |
| P10 | [P10_01](../../dados-brutos/MF2.1/prints/P10_01_sem_widget.png) | [P10_02](../../dados-brutos/MF2.1/prints/P10_02_injecao.png) | [P10_03](../../dados-brutos/MF2.1/prints/P10_03_traducao.png) |

Fonte: elaborado pelos autores.
