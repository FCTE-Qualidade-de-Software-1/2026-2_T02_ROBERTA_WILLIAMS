---
sidebar_position: 6
sidebar_label: Características
---

# Seleção e priorização de características

## Seleção das características

A avaliação da qualidade do VLibras foi delimitada a quatro características de qualidade: **Flexibilidade, Eficiência de Desempenho, Manutenibilidade e Capacidade de Interação**. A seleção foi realizada com o objetivo de direcionar a avaliação para aspectos relevantes do produto, considerando sua utilização como ferramenta de tradução de conteúdos para a Língua Brasileira de Sinais (Libras).

As demais características consideradas na análise inicial foram Adequação Funcional, Compatibilidade, Confiabilidade e Segurança. Embora não tenham sido selecionadas para compor o escopo principal da avaliação, elas foram consideradas durante a atividade de priorização.

## Priorização das características e atribuição das notas

As características foram avaliadas considerando quatro critérios: benefício relativo, penalidade relativa, custo relativo e risco relativo. O benefício representa a contribuição esperada da característica para os objetivos do produto, enquanto a penalidade representa as consequências de sua ausência ou de seu atendimento inadequado. O custo e o risco representam, respectivamente, o esforço estimado para implementar melhorias e as incertezas ou dificuldades técnicas associadas (WIEGERS, 2013).

Para cada critério, foram atribuídas notas de 1 a 9. As notas foram utilizadas para comparar as características entre si, considerando os objetivos do projeto e as estimativas do grupo. Os pesos apresentados a seguir foram definidos para expressar a importância relativa dos critérios no cálculo da prioridade:

| Critério            | Peso |
| ------------------- | ---: |
| Benefício relativo  |    2 |
| Penalidade relativa |    1 |
| Custo relativo      |    1 |
| Risco relativo      |  0,5 |

As notas e os pesos foram utilizados no cálculo do valor total, dos percentuais relativos e da prioridade final. Dessa forma, a classificação considera tanto o valor atribuído a cada característica quanto os custos e riscos estimados para sua melhoria.

O benefício e a penalidade contribuem para o cálculo do valor total, enquanto o custo e o risco são considerados na estimativa de prioridade. O peso atribuído ao benefício é duas vezes maior que o da penalidade, e o peso do risco corresponde à metade do peso do custo.

### Método de cálculo

A priorização foi calculada em cinco etapas, considerando os pesos definidos para os critérios e apresentados anteriormente (WIEGERS, 2013). O cálculo realizado pode ser observado a seguir:

**1. Valor total**

O valor total de cada característica é obtido multiplicando o benefício relativo por 2 e somando a penalidade relativa.

`Valor total = (Benefício relativo x 2) + Penalidade relativa`

**2. Percentual de valor**

O percentual de valor corresponde à participação do valor total da característica na soma dos valores totais de todas as características avaliadas.

`% Valor = (Valor total / Soma dos valores totais) x 100`

**3. Percentual de custo**

O percentual de custo corresponde à participação do custo relativo da característica na soma dos custos relativos.

`% Custo = (Custo relativo / Soma dos custos relativos) x 100`

**4. Percentual de risco**

O percentual de risco corresponde à participação do risco relativo da característica na soma dos riscos relativos.

`% Risco = (Risco relativo / Soma dos riscos relativos) x 100`

**5. Prioridade**

A prioridade é calculada dividindo o percentual de valor pela soma do percentual de custo com o percentual de risco multiplicado pelo peso 0,5.

`Prioridade = % Valor / (% Custo + (% Risco x 0,5))`

Quanto maior o resultado, maior a prioridade relativa da característica segundo os critérios e pesos definidos pelo grupo. Os percentuais não arredondados são utilizados nos cálculos, enquanto os valores exibidos na tabela são arredondados para facilitar a leitura.

### Matriz de priorização baseada em valor, custo e risco

| Característica           | Benefício relativo | Penalidade relativa | Valor total |      % Valor | Custo relativo |     % Custo | Risco relativo |     % Risco | Prioridade |
| ------------------------ | -----------------: | ------------------: | ----------: | -----------: | -------------: | ----------: | -------------: | ----------: | ---------: |
| Capacidade de Interação  |                  9 |                   9 |          27 |      15,254% |              4 |      10,53% |              3 |       8,82% |      1,021 |
| Eficiência de Desempenho |                  8 |                   8 |          24 |      13,559% |              5 |      13,16% |              4 |      11,76% |      0,712 |
| Manutenibilidade         |                  8 |                   7 |          23 |      12,994% |              5 |      13,16% |              4 |      11,76% |      0,682 |
| Flexibilidade            |                  8 |                   7 |          23 |      12,994% |              5 |      13,16% |              4 |      11,76% |      0,682 |
| Segurança                |                  7 |                   8 |          22 |      12,429% |              5 |      13,16% |              5 |      14,71% |      0,606 |
| Confiabilidade           |                  7 |                   8 |          22 |      12,429% |              5 |      13,16% |              5 |      14,71% |      0,606 |
| Adequação Funcional      |                  6 |                   8 |          20 |      11,299% |              5 |      13,16% |              4 |      11,76% |      0,593 |
| Compatibilidade          |                  5 |                   6 |          16 |       9,040% |              4 |      10,53% |              5 |      14,71% |      0,506 |
| **Total**                |             **58** |              **61** |     **177** | **100,000%** |         **38** | **100,00%** |         **34** | **100,00%** |          - |

*Fonte: Elaborado pelos autores.*

### Análise dos resultados e trade-offs

A priorização classificou Capacidade de Interação (1,021) como a característica de maior prioridade, seguida por Eficiência de Desempenho (0,712), Flexibilidade e Manutenibilidade (ambas com 0,682), Segurança e Confiabilidade (0,606), Adequação Funcional (0,593) e Compatibilidade (0,506).

A Capacidade de Interação destacou-se pelo maior valor total (27) e pelas menores estimativas de custo (4) e risco (3), favorecendo sua prioridade. A pontuação se deveu, principalmente, à familiaridade do grupo com avaliação de qualidade das subcaracterísticas da Capacidade de Interação e à percepção de valor agregado da avaliação dessa característica. 

A Eficiência de Desempenho também apresentou valor elevado (24), enquanto Flexibilidade e Manutenibilidade obtiveram resultados iguais, indicando prioridades equivalentes segundo os critérios adotados.

Entre as demais características, Segurança e Confiabilidade empataram, enquanto Compatibilidade apresentou a menor prioridade, com o menor valor total (16). Esses resultados evidenciam o trade-off entre o valor atribuído a cada característica e os custos e riscos estimados, visto que um valor elevado não garante maior prioridade quando os recursos necessários também são maiores.

Com base na classificação, o grupo selecionou Capacidade de Interação, Eficiência de Desempenho, Flexibilidade e Manutenibilidade para avaliar a qualidade do VLibras. Ressalta-se que a classificação constitui um instrumento de apoio à decisão, e as notas refletem estimativas do grupo.

## Referências

> Galin, D. (2018). **Software Quality Factors**.

> ISO/IEC. **ISO/IEC 25010:2023**: systems and software engineering: systems and software quality requirements and evaluation (SQuaRE): product quality model. 2. ed. Geneva: ISO/IEC, 2023.

> WIEGERS, Karl; BEATTY, Joy. **Software requirements**. 3. ed. Redmond: Microsoft Press, 2013. 672 p.

## Histórico de Versões

| Versão | Data       | Descrição da alteração                   | Autor(a)         | Revisor(a) |
| ------ | ---------- | ---------------------------------------- | ---------------- | ---------- |
| 1.0    | 26/10/2026 | Adição das características e priorização | Ludmila O. Nunes |            |
