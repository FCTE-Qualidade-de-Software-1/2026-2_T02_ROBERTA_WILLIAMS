---
sidebar_position: 1
---

# Indicadores

Cada indicador foi descrito com os elementos do modelo de informação do PSM (Aula 09; McGarry, cap. 2, Fig. 2-3, p. 19). As medidas foram escolhidas na tabela ICM do CID (Parte 1, Tabela 5, pp. 19–26) e especificadas conforme a Parte 2 do guia.

## Resumo

| # | Categoria (especificação §2) | Necessidade de informação | Indicador | ICM (CID P1, Tab. 5) |
| - | ---------------------------- | ------------------------- | --------- | :------------------: |
| 1 | Calendário e Progresso | Os itens comprometidos na iteração são entregues? | Comprometido × concluído por iteração | 1 |
| 2 | Calendário e Progresso | A Entrega 1 vai ser concluída no prazo? | *Burn-up* do *milestone* E1 | 1 |
| 3 | Recursos e Custos | As estimativas de esforço são precisas? | Esforço real ÷ esforço estimado | 8 |
| 4 | Recursos e Custos | Quanto esforço cada membro investe? | Esforço real por membro | 7 |
| 5 | Desempenho dos Processos | Quanto tempo um item leva para ser concluído? | *Cycle time* por item | 32 |
| 6 | Desempenho dos Processos | O trabalho flui ou se acumula em alguma etapa? | Fluxo cumulativo (CFD) | 30, 37 |

## Indicador 1 – Comprometido × concluído por iteração

| Elemento do modelo de informação | Definição |
| -------------------------------- | --------- |
| Necessidade de informação | Os itens comprometidos na iteração são entregues como planejado? |
| Entidade | Itens do GitHub Projects (*issues* sem pai) de uma iteração |
| Atributos | Itens comprometidos no início da iteração; itens com Status *Done* no fim |
| Medidas básicas | C = itens comprometidos; D = itens concluídos |
| Método de medição | Contagem na visão "Iteração atual", com filtro `-parent-issue:*`, no primeiro e no último dia da iteração |
| Medida derivada | Percentual concluído = D ÷ C × 100 (CID P2, §8.3, p. 15) |
| Indicador | Gráfico de barras por iteração (comprometido e concluído) no Insights do GitHub Projects |
| Modelo de análise | Desvio = 100% − percentual concluído |
| Critério de decisão | Desvio acima de 5%: investigar a causa; acima de 10%: ação corretiva (CID P2, §8.3, p. 17) |

## Indicador 2 – *Burn-up* do *milestone* E1

| Elemento do modelo de informação | Definição |
| -------------------------------- | --------- |
| Necessidade de informação | A Entrega 1 (26/10/2026) vai ser concluída no prazo? |
| Entidade | Itens do *milestone* E1 (sem pai) |
| Atributos | Itens planejados; itens concluídos, por dia |
| Medidas básicas | P = itens planejados; D = itens concluídos |
| Método de medição | Gráfico histórico do Insights filtrado pelo *milestone* E1 |
| Medida derivada | Trabalho em aberto = P − D (CID P2, §8.2, p. 12). No gráfico, corresponde à altura da faixa *Open* |
| Indicador | Gráfico *burn-up* do *milestone* E1 |
| Modelo de análise | Comparação do trabalho em aberto com os dias restantes até a entrega |
| Critério de decisão | Desvio acima de 5% do planejado: revisão; acima de 10%: replanejar o escopo ou a distribuição (CID P2, §8.2, p. 13) |

## Indicador 3 – Precisão da estimativa de esforço

| Elemento do modelo de informação | Definição |
| -------------------------------- | --------- |
| Necessidade de informação | As estimativas de esforço da equipe são precisas? |
| Entidade | Itens concluídos com horas registradas (*sub-issues* e *issues* individuais) |
| Atributos | Esforço estimado (h); esforço real (h) |
| Medidas básicas | E = soma do esforço estimado; R = soma do esforço real, por iteração |
| Método de medição | Soma dos campos na visão "Recursos e Custos" |
| Medida derivada | Razão = R ÷ E × 100 (CID P1, Tabela 5, linha 8, p. 20) |
| Indicador | Razão por iteração, em tabela |
| Modelo de análise | Acima de 100%: a equipe subestimou; abaixo: superestimou |
| Critério de decisão | Faixa aceitável de 80% a 120% (adaptado de CID P2, §9.2, Fig. 26, p. 68). Fora da faixa: rever a forma de estimar na iteração seguinte |

## Indicador 4 – Esforço por membro

| Elemento do modelo de informação | Definição |
| -------------------------------- | --------- |
| Necessidade de informação | Quanto esforço cada membro investe no projeto? |
| Entidade | Itens concluídos com horas registradas |
| Atributo | Esforço real (h) e responsável |
| Medida básica | R = esforço real de cada item |
| Método de medição | Soma por responsável na visão "Recursos e Custos" |
| Medida derivada | Esforço total e percentual por membro (CID P1, Tabela 5, linha 7, p. 20) |
| Indicador | Gráfico de barras por membro no Insights |
| Modelo de análise | Comparação da participação de cada membro com a divisão esperada (1/6 ≈ 16,7%) |
| Critério de decisão | Definido pela equipe, como permite a Aula 09 (slide "Critérios de decisão": "acordos" e "valores máximos e mínimos aceitáveis"). Proposta: participação abaixo de 10% ou acima de 25% gera conversa na reunião semanal |

O resultado acumulado deste indicador alimenta a [Tabela de contribuição](../sobre/tabela-de-contribuicao.md).

## Indicador 5 – *Cycle time*

| Elemento do modelo de informação | Definição |
| -------------------------------- | --------- |
| Necessidade de informação | Quanto tempo um item leva do início à conclusão? |
| Entidade | Itens concluídos (sem pai) |
| Atributos | Data de início; data de conclusão |
| Medidas básicas | I = data de início; F = data de conclusão |
| Método de medição | Campos Início e Conclusão na visão "Desempenho do Processo" |
| Medida derivada | *Cycle time* = (F − I) + 1 dias (CID P2, §8.5, p. 24) |
| Indicador | Tabela de itens concluídos com o *cycle time* e a média da iteração |
| Modelo de análise | Identificação de itens muito acima da média |
| Critério de decisão | Item com *cycle time* mais de 10% acima da média é investigado (CID P2, §8.5, p. 26) |

O GitHub Projects não calcula o *cycle time*. Ele é calculado a partir das datas exportadas da visão e registrado em [Registro de medições](./registro-psm.md).

## Indicador 6 – Fluxo cumulativo (CFD)

| Elemento do modelo de informação | Definição |
| -------------------------------- | --------- |
| Necessidade de informação | O trabalho flui pelas etapas ou se acumula em alguma delas? |
| Entidade | Itens do GitHub Projects (sem pai) |
| Atributo | Status de cada item na data da contagem |
| Medida básica | Número de itens em cada coluna de Status, por data |
| Método de medição | Contagem manual no quadro Kanban, duas vezes por semana (segunda e quinta), por responsável fixo |
| Medidas derivadas | Trabalho em andamento (WIP) e vazão (CID P2, §8.4, pp. 19–20) |
| Indicador | Gráfico de áreas empilhadas montado em planilha a partir da tabela de contagens (CID P2, §8.4, p. 23) |
| Modelo de análise | Faixa que se alarga indica acúmulo naquela etapa |
| Critério de decisão | Variação acima de 10% na largura de uma faixa entre duas contagens é investigada (CID P2, §8.4, p. 23) |

O Insights do GitHub Projects não gera este gráfico: os gráficos históricos agrupam só pelo estado da *issue* (aberta, concluída, não planejada), e não pelas colunas de Status. Por isso a contagem é manual. A série começa na Iteração 1, o que é registrado como limitação.

## Medidas não adotadas

| Medida | Motivo |
| ------ | ------ |
| Velocidade (*velocity*) | Exige pontos de história e histórico de iterações anteriores (CID P2, §8.10), que a equipe não tem |
| Retrabalho | Pertence à categoria Qualidade do Produto, que não está entre as exigidas pela especificação (§2) |

A seleção seguiu os critérios da Aula 09 (slide "Critérios para selecionar medidas"): relevância para as necessidades de informação, viabilidade da coleta, grau de intrusão nas tarefas e custo de coleta e análise.

## Referências

- Aula 09 – PSM (resumo), slides "Critérios de decisão", "Indicador", "Categorias de Informação" e "Critérios para selecionar medidas".
- McGarry et al., *Practical Software Measurement*, cap. 2, Fig. 2-3 (p. 19).
- PSM CID Measurement Framework, Parte 1, Tabela 5 (pp. 19–26); Parte 2, §8.2 (pp. 12–13), §8.3 (pp. 15–17), §8.4 (pp. 19–23), §8.5 (pp. 24–26), §8.10 e §9.2 (Fig. 26, p. 68).
- Especificação do Projeto Final da disciplina, §2.

## Histórico de Versões

| Versão | Data | Descrição da alteração | Autor(a) | Revisor(a) |
| ------ | ---- | ---------------------- | -------- | ---------- |
| 0.1 | 20/10/2026 | Seis indicadores descritos pelo modelo de informação do PSM | Geovane S. Freitas | |
