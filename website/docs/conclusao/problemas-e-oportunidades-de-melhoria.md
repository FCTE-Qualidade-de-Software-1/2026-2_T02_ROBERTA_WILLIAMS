---
sidebar_position: 3
sidebar_label: Problemas e Oportunidades
---

# Problemas e Oportunidades de Melhoria

As oportunidades abaixo partem dos resultados da Fase 4 e explicam por que cada problema merece atenção. Elas não constituem uma matriz de priorização; a comparação e a escolha da ordem de execução serão feitas posteriormente.

Os sinais mais fortes são o uso de CPU na faixa ruim, a baixa taxa de sucesso na seleção de texto, as falhas nos dois ambientes móveis testados e o longo tempo em aberto das *issues*. A métrica de rede também ficou na faixa ruim, mas o volume em bytes das repetições foi baixo; esse achado aponta sobretudo para requisições repetidas, e não para grande transferência de dados.

## Desempenho e uso da rede

### Uso elevado de CPU

Na [ME2.1](../fase-4/eficiencia-de-desempenho/me2-1/me2-1-utilizacao-de-cpu.md), o uso médio foi de **55,7%**, com pico de **89,5%**; **81,8%** das 600 amostras de um segundo ficaram acima de 50%. A métrica recebeu a faixa **Ruim**. Isso expõe o risco de o widget deixar pouca capacidade disponível para outras tarefas enquanto o avatar sinaliza continuamente. O achado é relevante, mas corresponde à simulação de hardware limitado realizada no D1 e deve ser validado em dispositivos reais de menor capacidade antes de generalizar o impacto.

### Requisições repetidas durante a tradução

A [ME3.1](../fase-4/eficiencia-de-desempenho/me3-1/me3-1-volume-de-dados-e-cache.md) ficou na faixa **Ruim**, com **76,2%** de reuso das requisições na reexecução. Foram **48 requisições pela rede em 202**, sendo 21 reenvios do texto para tradução e 21 verificações CORS; seis outras requisições tentaram obter sinais inexistentes. O resultado indica uma oportunidade de reduzir chamadas repetidas, especialmente quando o mesmo trecho é reproduzido. A ressalva é que o volume transferido nessas reexecuções foi de aproximadamente **28,1 kB**, muito menor que os **5,35 MB** da primeira execução: o problema medido é principalmente a repetição de requisições, não um grande volume de bytes nas repetições.

## Seleção de texto e mensagens de erro/status

Na [MI3.2](../fase-4/capacidade-de-interacao/mi3-2-eficancia-selecao-texto.md), apenas **3 de 7 tentativas** tiveram sucesso (**42,9%**, faixa **Ruim**). As três tarefas em texto comum na página de teste funcionaram, mas nenhuma das quatro tarefas nos portais foi concluída por seleção. Os registros apontam conflitos com carrossel e *hover* de card, dificuldade em botões e conteúdo dentro de *iframe*; em **3 de 7 tentativas** também faltou feedback claro sobre o modo de seleção. Isso torna o acesso a trechos de páginas reais o problema de interação mais diretamente exposto nos testes.

A [MI2.1](../fase-4/capacidade-de-interacao/mi2-1-proporcao-mensagens-apenas-texto.md) classificou **6 de 10 mensagens observadas** como somente texto, sem ícone explicativo ou sinalização do avatar segundo o critério adotado (**60%**, faixa **Aceitável/Regular**), e registrou quatro tipos de falha sem mensagem clara. Esse resultado é provisório: cinco das quinze apresentações candidatas não puderam ser classificadas pelas capturas. Em conjunto, as métricas justificam uma oportunidade para tornar mais acessíveis tanto a seleção/leitura de conteúdo quanto a percepção de mensagens de erro e status, mantendo explícitas as limitações dos dados.

## Funcionamento em navegadores móveis

A [MF1.1](../fase-4/flexibilidade/mf1-1-adaptabilidade-a-navegadores.md) obteve **90%** de compatibilidade geral, mas os dois ambientes móveis testados ficaram em **75%**: no Safari para iOS, elementos da interface não apareceram; no Chrome para Android, foram necessários múltiplos toques para traduzir. Os três ambientes desktop testados atingiram 100%. A diferença observada justifica corrigir e voltar a testar as funcionalidades nos navegadores móveis afetados, sem generalizar o resultado para versões ou dispositivos que não participaram da coleta.

## Acompanhamento de incompatibilidades

Na [MM3.1](../fase-4/manutenibilidade/mm3-1/mm3-1-tempo-medio-de-correcao-de-incompatibilidades.md), o tempo médio observado foi de **83 dias** em sete *issues*; cinco permaneciam abertas na data da coleta. As duas fechadas levaram em média 12,5 dias, enquanto as abertas tinham média de 111,2 dias em aberto. O dado aponta uma oportunidade de melhorar o acompanhamento e a visibilidade do ciclo das incompatibilidades. Ele não representa exclusivamente tempo de programação: para *issues* ainda abertas, o cálculo usa o tempo até a coleta, e o GitHub pode ser um espelho do repositório de desenvolvimento.

Esses achados descrevem os problemas mais evidentes nas medições e oferecem justificativas para as oportunidades listadas. A priorização entre elas fica para a matriz a ser elaborada posteriormente.
