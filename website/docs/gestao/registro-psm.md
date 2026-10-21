---
sidebar_position: 2
sidebar_label: Registro de medições
---

# Registro de medições

Cada iteração tem uma tabela com o valor de cada indicador, a interpretação pelo critério de decisão e a decisão tomada. A definição de cada indicador está em [Indicadores](./indicadores.md).

O resumo de cada iteração também é publicado como *status update* no GitHub Projects, com link para esta página.

## Iterações

| Iteração | Período | Marco |
| -------- | ------- | ----- |
| Iteração 0 | 12/10/2026 a 18/10/2026 | Cadastrada retroativamente |
| Iteração 1 | 19/10/2026 a 25/10/2026 | Entrega 1 em 26/10/2026 |
| Iteração 2 | 26/10/2026 a 01/11/2026 | — |

## Iteração 0 (12/10 a 18/10/2026)

:::note Iteração cadastrada retroativamente
A Iteração 0 foi cadastrada no GitHub Projects depois de terminada, portanto datas de início e conclusão não devem ser consideradas. As horas reais foram estimadas depois. Essas limitações valem para todos os valores abaixo.
:::

| # | Indicador | Valor | Interpretação (critério de decisão) | Decisão |
| - | --------- | ----- | ----------------------------------- | ------- |
| 1 | Comprometido × concluído | Não se aplica | Não houve compromisso registrado no início da iteração | Registrar o compromisso a partir da Iteração 1 |
| 2 | *Burn-up* E1 | | | |
| 3 | Precisão da estimativa | Não se aplica | Não houve estimativa feita antes da execução; a razão real ÷ estimado não tem significado | Estimar as horas na criação de cada item a partir da Iteração 1 |
| 4 | Esforço por membro | | | |
| 5 | *Cycle time* médio | | | |
| 6 | Fluxo cumulativo | Não se aplica | A contagem por coluna começa na Iteração 1 | — |

## Iteração 1 (19/10 a 25/10/2026)

| # | Indicador | Valor | Interpretação (critério de decisão) | Decisão |
| - | --------- | ----- | ----------------------------------- | ------- |
| 1 | Comprometido × concluído | C = ; D = ; D ÷ C = % | | |
| 2 | *Burn-up* E1 | Em aberto = | | |
| 3 | Precisão da estimativa | R ÷ E = % | | |
| 4 | Esforço por membro | Ver tabela abaixo | | |
| 5 | *Cycle time* médio | dias | | |
| 6 | Fluxo cumulativo | Ver contagens abaixo | | |

### Esforço por membro (indicador 4)

| Membro | Esforço real acumulado (h) | Participação (%) |
| ------ | -------------------------: | ---------------: |
| Amanda C. Lima | | |
| Geovane S. Freitas | | |
| Ludmila O. Nunes | | |
| Mariana P. Silva | | |
| Rafael W. Schadt | | |
| Rodrigo F. Amaral | | |
| **Total** | | **100%** |

### *Cycle time* (indicador 5)

| Item (*issue*) | Início | Conclusão | *Cycle time* (dias) | Acima de média + 10%? |
| -------------- | ------ | --------- | ------------------: | :-------------------: |
| | | | | |

## Contagens do fluxo cumulativo (indicador 6)

Contagem de itens sem pai por coluna de Status, duas vezes por semana.

| Data | Backlog | Ready | In Progress | In Review | Done | Total |
| ---- | ------: | ---: | ----------: | --------: | ---: | ----: |
| 20/10/2026 | | | | | | |
| 23/10/2026 | | | | | | |
| 26/10/2026 | | | | | | |

{/* Ajustar as colunas aos nomes reais de Status do GitHub Projects. O gráfico de áreas empilhadas é montado em planilha a partir desta tabela e pode ser salvo em static/img/gestao/. */}

## Mudanças nos indicadores

O modelo de registro é mantido entre as iterações. Quando um indicador for incluído, alterado ou retirado, a mudança e o motivo ficam registrados aqui (CID, Parte 1, §2, p. 5).

| Data | Mudança | Motivo |
| ---- | ------- | ------ |
| 18/10/2026 | Definição inicial dos seis indicadores | Planejamento da medição (modelo de processo do PSM) |

## Referências

- Especificação do Projeto Final da disciplina, §1, premissas 3 e 5, e §2.
- PSM CID Measurement Framework, Parte 1, §2 (p. 5); Parte 2, §8.4 (p. 23).

## Histórico de Versões

| Versão | Data | Descrição da alteração | Autor(a) | Revisor(a) |
| ------ | ---- | ---------------------- | -------- | ---------- |
| 0.1 | 20/10/2026 | Modelo de registro por iteração, com a Iteração 0 e a contagem do CFD | Geovane S. Freitas | |
