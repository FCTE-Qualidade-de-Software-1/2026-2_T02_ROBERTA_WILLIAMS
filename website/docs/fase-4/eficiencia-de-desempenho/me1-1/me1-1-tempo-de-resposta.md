---
sidebar_position: 2
sidebar_label: ME1.1 — Tempo de resposta
---

# ME1.1: Tempo Médio de Resposta da Tradução

Esta página apresenta o resultado da métrica **ME1.1**, definida na [Fase 2](../../../fase-2/metricas.md#me11-tempo-médio-de-resposta-da-tradução), conforme o [método de avaliação](../../../fase-3/metodo-de-avaliacao.md#me11-tempo-médio-de-resposta-da-tradução). A medição considera o intervalo entre a seleção do texto e o início do primeiro sinal do avatar, com o motor 3D já carregado.

## Identificação da medição

| Item | Descrição |
| ---- | --------- |
| **Métrica** | ME1.1 — Tempo Médio de Resposta da Tradução |
| **Característica** | Eficiência de Desempenho |
| **Questão relacionada** | Q1-E — Comportamento Temporal |
| **Responsável pela coleta** | Rafael W. Schadt |
| **Amostra** | 10 frases padronizadas, uma medição por frase em cada perfil de rede |
| **Fonte dos dados** | Instantes informados pelo responsável pela coleta e gravações de tela, organizados em [Dados brutos da ME1.1](../../dados-brutos/ME1.1/README.md) |
| **Ambiente planejado** | Página de teste com o widget publicado e dispositivo DI5, descritos em [Recursos e ambiente](../../../fase-3/recursos-e-ambiente.md) |

## Método e cálculo

Para cada frase, `A` é o instante da seleção do texto e `B` é o instante do início do primeiro sinal, ambos em segundos na gravação. O tempo de resposta é `B − A`. Os pares de instantes foram fornecidos pelo responsável pela coleta e usados para calcular os tempos e as estatísticas separadamente para cada perfil.

O [protocolo da Fase 3](../../../fase-3/metodo-de-avaliacao.md#me11-tempo-médio-de-resposta-da-tradução) prevê 10 frases em banda larga e as mesmas 10 em 3G, além do registro do tempo da requisição de tradução como medida auxiliar. A [tabela de medições](./medicoes.md) apresenta cada frase, os instantes, as diferenças e as estatísticas. O desvio padrão adotado é o **amostral**, com divisor `n − 1`.

## Resultado

**Tabela 1.** Tempos de resposta por perfil de rede.

| Perfil      | Medições | Média (s) | Mediana (s) | Mínimo (s) | Máximo (s) | Desvio padrão amostral (s) |
| ----------- | -------: | --------: | ----------: | ---------: | ---------: | -------------------------: |
| Banda larga |       10 |      3,66 |        3,97 |  1,40 (F1) |  7,64 (F6) |                       2,02 |
| 3G          |       10 |      3,48 |        3,45 |  2,97 (F7) |  4,81 (F3) |                       0,51 |

Fonte: cálculos a partir dos instantes fornecidos pelo responsável pela coleta. Os resultados são arredondados a duas casas decimais.

Em banda larga, a soma dos tempos foi **36,56 s**, resultando em `36,56 / 10 = 3,656 s`. Em 3G, a soma foi **34,79 s**, resultando em `34,79 / 10 = 3,479 s`.

### Comparação com os critérios

A [matriz de pontuação](../../../fase-2/pontuacao-e-criterios.md) define o critério para a ME1.1 em **3G**: até 3 s é satisfatório/ideal, de 3,1 s a 6 s é aceitável/regular e acima de 6 s é ruim. A média de **3,48 s** fica na faixa **aceitável/regular**, correspondente à pontuação **3**. A matriz não estabelece um critério separado de pontuação para banda larga.

### Julgamento e hipótese

A hipótese [H1-E](../../../fase-2/hipoteses.md) prevê início da tradução em menos de 3 s na banda larga e atrasos superiores a 6 s para a geração de frases em 3G. A média em banda larga foi **3,66 s**: 4 das 10 frases ficaram abaixo de 3 s e 6 ficaram acima. Em 3G, a média foi **3,48 s** e nenhuma das 10 medições ultrapassou 6 s; o máximo foi 4,81 s.

Assim, os tempos registrados **não sustentam as previsões de resposta da hipótese para esta amostra**. O carregamento inicial do motor 3D, também mencionado na hipótese, não é medido pela ME1.1 e não pode ser avaliado com esses dados.

A média observada em 3G foi 0,18 s menor que em banda larga, mas a amostra tem apenas uma medição por frase e perfil; o resultado não demonstra que o 3G seja mais rápido. A dispersão também foi maior em banda larga, com desvio padrão amostral de 2,02 s contra 0,51 s em 3G.

## Evidências

As 20 gravações, organizadas por perfil e frase, e a [tabela com os dados e cálculos](./medicoes.md) estão em [Dados brutos da ME1.1](../../dados-brutos/ME1.1/README.md).

## Histórico de Versões

| Versão | Data       | Descrição da alteração                                     | Autor(a)         | Revisor(a) |
| ------ | ---------- | ---------------------------------------------------------- | ---------------- | ---------- |
| 1.0    | 20/11/2026 | Registro dos dados fornecidos, cálculos e análise da ME1.1 | Rafael W. Schadt |            |
