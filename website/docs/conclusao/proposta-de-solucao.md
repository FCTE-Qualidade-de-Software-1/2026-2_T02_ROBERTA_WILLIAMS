---
sidebar_position: 4
sidebar_label: Proposta de Solução
---

# Proposta de Solução

As propostas abaixo correspondem às oportunidades identificadas nos resultados. A priorização entre elas será feita posteriormente, em uma matriz própria.

## Revisar o uso de CPU durante a sinalização

Revisar a eficiência da renderização contínua do avatar e o uso de recursos do navegador, com o objetivo de reduzir o consumo observado na [ME2.1](../fase-4/eficiencia-de-desempenho/me2-1/me2-1-utilizacao-de-cpu.md). Na simulação realizada, a média foi de **55,7%**, o pico chegou a **89,5%** e 81,8% das amostras ultrapassaram 50%, resultado classificado como **Ruim**. A melhoria deve ser validada em hardware de menor capacidade, pois o ensaio foi uma simulação no D1.

## Reduzir requisições de rede em ações repetidas

Revisar o cache associado à tradução para evitar reenviar texto já traduzido durante repetições, sempre que a solução for compatível com o funcionamento esperado. Na [ME3.1](../fase-4/eficiencia-de-desempenho/me3-1/me3-1-volume-de-dados-e-cache.md), as repetições geraram 21 novos envios de tradução e 21 verificações CORS; no total, 48 das 202 requisições foram à rede e o reuso medido foi de **76,2%** (**Ruim**). O foco é diminuir requisições desnecessárias: os bytes transferidos nas repetições foram aproximadamente **28,1 kB**, portanto não se deve descrever o achado como alto volume de dados sem outra medição que o sustente.

## Integrar seleção de conteúdo e leitura de mensagens

Avaliar um modo explícito de leitura/seleção acionado por botão, com um cursor de leitura que percorra o texto sem ativar os *hovers* da página. A proposta busca permitir a leitura de trechos e de mensagens de erro/status sem que a interação com o widget acione comportamentos do site que alterem, ocultem ou dificultem alcançar o conteúdo.

A justificativa vem da [MI3.2](../fase-4/capacidade-de-interacao/mi3-2-eficancia-selecao-texto.md): 4 das 7 tentativas falharam e as quatro tarefas em portais não foram concluídas por seleção; um card exibiu uma descrição no *hover* em vez do título, e o gesto de arrastar conflitou com um carrossel. A [MI2.1](../fase-4/capacidade-de-interacao/mi2-1-proporcao-mensagens-apenas-texto.md) também classificou 6 de 10 mensagens observadas como somente texto, sem ícone explicativo ou sinalização do avatar segundo o critério adotado, e registrou falhas sem aviso claro, embora o resultado seja provisório. Conteúdo em *iframes* pode estar sujeito a restrições do navegador, portanto a proposta não presume que o cursor consiga acessar todo conteúdo incorporado.

## Corrigir as funcionalidades nos navegadores móveis afetados

Investigar e corrigir as falhas observadas no Safari para iOS e no Chrome para Android, e repetir os testes nesses ambientes. A [MF1.1](../fase-4/flexibilidade/mf1-1-adaptabilidade-a-navegadores.md) registrou **75%** em cada um: elementos da interface não apareceram no Safari e a tradução exigiu múltiplos toques no Chrome móvel. Como os três ambientes desktop avaliados atingiram 100%, a proposta concentra-se nos comportamentos móveis observados, sem pressupor falhas em navegadores não testados.

## Criar rotina ou ambiente de acompanhamento de issues

Estabelecer um espaço e uma rotina para registrar, triar e acompanhar incompatibilidades até sua resolução e disponibilização da correção. A [MM3.1](../fase-4/manutenibilidade/mm3-1/mm3-1-tempo-medio-de-correcao-de-incompatibilidades.md) observou média de **83 dias** em sete *issues*, cinco ainda abertas; a média de tempo em aberto dessas cinco era de 111,2 dias. Um acompanhamento visível do estado e do tempo de cada caso pode ajudar a equipe a identificar pendências e tornar o fluxo de tratamento mais previsível. Como a métrica também inclui tempo de espera e usa dados do GitHub, que pode ser um espelho do repositório principal, esses fatores devem ser considerados ao avaliar a evolução da medida.
