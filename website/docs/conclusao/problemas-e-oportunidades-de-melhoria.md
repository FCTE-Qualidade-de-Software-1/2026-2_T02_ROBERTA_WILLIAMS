---
sidebar_position: 3
sidebar_label: Problemas e Oportunidades
---

# Problemas e Oportunidades de Melhoria

As oportunidades abaixo foram identificadas a partir dos resultados da Fase 4. A matriz ao final aplica os atributos e a fórmula de priorização definidos, e as notas são justificadas após a tabela.

## Otimização do motor gráfico e do consumo de recursos

A [ME2.1](../fase-4/eficiencia-de-desempenho/me2-1/me2-1-utilizacao-de-cpu.md) registrou uso médio de CPU de **55,7%**, pico de **89,5%** e **81,8%** das 600 amostras acima de 50%, na faixa **Ruim**. Esses dados indicam que a sinalização contínua pode deixar pouca capacidade do processador disponível para outras tarefas. A coleta, porém, foi uma simulação de hardware limitado no D1; a confirmação do impacto em dispositivos de menor capacidade requer novos testes. A ME2.1 mediu CPU, não RAM, então não há resultado de memória para pontuar ou afirmar como evidência.

## Otimização da arquitetura de requisições e do reuso de dados

Na [ME3.1](../fase-4/eficiencia-de-desempenho/me3-1/me3-1-volume-de-dados-e-cache.md), o reuso de requisições na reexecução foi de **76,2%**, na faixa **Ruim**. Das 202 requisições observadas durante as repetições, 48 foram à rede: 21 reenvios do texto para tradução, 21 verificações CORS e seis pedidos de sinais inexistentes. A oportunidade é reduzir solicitações repetidas, sobretudo ao reproduzir uma tradução já solicitada. A ressalva é que os dados transferidos nas repetições somaram aproximadamente **28,1 kB**; portanto, o resultado evidencia principalmente a quantidade de requisições, não um grande volume de bytes.

## Normalização e compatibilidade nos principais navegadores

A [MF1.1](../fase-4/flexibilidade/mf1-1-adaptabilidade-a-navegadores.md) obteve **90%** de compatibilidade geral. Chrome, Firefox e Edge em desktop alcançaram 100%, mas Safari para iOS e Chrome para Android ficaram em **75%** cada: no Safari, elementos da interface não apareceram; no Chrome móvel, foram necessários múltiplos toques para traduzir. As falhas observadas justificam corrigir e retestar os fluxos nos navegadores afetados. A evidência cobre apenas os cinco ambientes testados, não todas as versões ou dispositivos.

## Gestão e automação do ciclo de incompatibilidades

A [MM3.1](../fase-4/manutenibilidade/mm3-1/mm3-1-tempo-medio-de-correcao-de-incompatibilidades.md) encontrou tempo médio de **83 dias** em sete *issues* de incompatibilidade; cinco estavam abertas na data da coleta e tinham média de **111,2 dias** em aberto. Isso expõe oportunidade para dar mais visibilidade ao registro, triagem e acompanhamento das incompatibilidades até a publicação das correções. O indicador não mede somente tempo de programação: para *issues* abertas, conta-se até a data da coleta, e o GitHub pode ser um espelho do repositório de desenvolvimento.

## Cursor dedicado à seleção e tradução

Na [MI3.2](../fase-4/capacidade-de-interacao/mi3-2-eficancia-selecao-texto.md), **4 de 7 tentativas falharam** (taxa de sucesso de **42,9%**, faixa **Ruim**), e nenhuma das quatro tarefas nos portais foi concluída por seleção. Os registros apontaram conflito do gesto com carrossel, *hover* de card que exibe uma descrição em vez do título, dificuldade em botões e conteúdo dentro de *iframes*. A [MI2.1](../fase-4/capacidade-de-interacao/mi2-1-proporcao-mensagens-apenas-texto.md) classificou **6 de 10 mensagens observadas** como somente texto segundo o critério adotado e também registrou quatro tipos de falha sem mensagem clara; essa medição é provisória, pois cinco apresentações candidatas não foram classificáveis pelas capturas. Esses achados sustentam a oportunidade de acionar por botão um modo/cursor dedicado à leitura e tradução, sem disparar os *hovers* da página, considerando também como tornar mensagens de erro/status acessíveis. Conteúdos em *iframes* podem continuar limitados pelas regras do navegador.

## Matriz de priorização

Cada atributo recebe uma nota de **1 a 5**. Para Impacto, Complexidade e Confiabilidade, 1 representa nível baixo e 5 nível alto. Em **Qualidade Prévia**, 1 representa uma condição atual muito ruim e 5 uma condição atual muito boa; como esse valor é subtraído, uma qualidade prévia melhor reduz a prioridade da proposta. Nesta matriz, Confiabilidade considera a cobertura do conjunto de casos planejado. Essa nota não mede representatividade estatística nem autoriza generalizar resultados de uma amostra pequena.

**Índice de priorização = Impacto + Confiabilidade − (Complexidade + Qualidade Prévia).**

O índice resultante não fica restrito à escala de 1 a 5; a escala se aplica aos quatro atributos. Impacto, Complexidade e Qualidade Prévia são avaliações qualitativas, então as notas abaixo são uma proposta fundamentada nas evidências e devem ser validadas pelo grupo. Confiabilidade considera os dados disponíveis e os limites de cada coleta. A fórmula não foi alterada para garantir que uma solução específica vença.

| Solução candidata | Impacto | Complexidade | Qualidade Prévia | Confiabilidade | Cálculo | Índice | Posição |
| ----------------- | ------: | -----------: | ---------------: | -------------: | ------- | -----: | ------: |
| Otimização do motor gráfico e do consumo de recursos | 4 | 5 | 1 | 4 | 4 + 4 − (5 + 1) | **2** | **3º (empate)** |
| Otimização da arquitetura de requisições e do reuso de dados | 3 | 4 | 1 | 2 | 3 + 2 − (4 + 1) | **0** | **5º** |
| Normalização e compatibilidade nos principais navegadores | 4 | 3 | 2 | 3 | 4 + 3 − (3 + 2) | **2** | **3º (empate)** |
| Gestão e automação do ciclo de incompatibilidades | 4 | 2 | 1 | 2 | 4 + 2 − (2 + 1) | **3** | **2º** |
| Cursor dedicado à seleção e tradução | 5 | 3 | 2 | 5 | 5 + 5 − (3 + 2) | **5** | **1º** |

### Justificativa das notas

- **Otimização do motor gráfico:** impacto 4 pela média de CPU de 55,7% e pico de 89,5%; complexidade 5 por envolver o motor de renderização; qualidade prévia 1 pelo resultado ruim da ME2.1; confiabilidade 4 pelas cinco sessões e 600 amostras, com ressalva de terem sido coletadas na mesma simulação e no D1. A RAM não foi medida.
- **Arquitetura de requisições:** impacto 3 porque o reuso de 76,2% ficou abaixo do critério, mas o tráfego das repetições foi de aproximadamente 28,1 kB; complexidade 4 por envolver requisições externas, cache e verificações CORS; qualidade prévia 1 pelo resultado ruim; confiabilidade 2 por haver uma única sessão, apesar das 21 repetições.
- **Compatibilidade entre navegadores:** impacto 4 pelas falhas observadas nos dois ambientes móveis; complexidade 3 por se tratar de corrigir fluxos em navegadores específicos; qualidade prévia 2 pelo resultado geral regular e pelas falhas móveis; confiabilidade 3 pelas 20 verificações em cinco ambientes, realizadas uma vez por caso.
- **Gestão de incompatibilidades:** impacto 4 pela média de 83 dias e pelas cinco *issues* ainda abertas; complexidade 2 por ser principalmente uma mudança organizacional; qualidade prévia 1 pelo resultado ruim; confiabilidade 2 pela amostra de sete *issues*, classificação manual e possibilidade de o GitHub ser um espelho.
- **Cursor dedicado:** impacto 5 por tratar de uma barreira direta à seleção e tradução de conteúdo em páginas reais, incluindo tarefas em portais com zero sucesso; complexidade 3 pelas interações com elementos variados, *hovers* e *iframes*; qualidade prévia 2 considerando conjuntamente o resultado ruim da MI3.2 e o resultado regular e provisório da MI2.1; confiabilidade 5 pela cobertura do conjunto de mensagens e interações planejado, conforme informado pela equipe. Essa nota representa cobertura dos casos, não generalização: a MI3.2 teve uma participante e cinco apresentações da MI2.1 não puderam ser classificadas pelas capturas.

### Escolha e justificativa

**Solução vencedora:** cursor dedicado à seleção e tradução, com índice **5**.

A solução vence pelo maior Impacto (5) e pela cobertura integral do conjunto de casos planejado (Confiabilidade 5), mesmo com Complexidade 3 e Qualidade Prévia 2. A ressalva sobre mensagens não classificáveis e a amostra de uma participante continua válida para limitar generalizações, mas não altera a avaliação de que os casos definidos para a coleta foram cobertos.

## Histórico de Versões

| Versão | Data | Descrição da alteração | Autor(a) | Revisor(a) |
| ------ | ---- | ---------------------- | -------- | ---------- |
| 0.1 | 22/11/2026 | Organização dos dados fornecidos, cálculo provisório e priorização das soluções | Rafael W. Schadt | |