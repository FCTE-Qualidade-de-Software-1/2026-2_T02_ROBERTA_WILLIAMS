---
sidebar_position: 4
sidebar_label: Cronograma
---

# Cronograma

Esta página organiza as atividades da avaliação das métricas definidas. As atividades seguem os [protocolos por métrica](./metodo-de-avaliacao.md), e os resultados alimentam a Fase 4.

## Marcos

**Tabela 1.** Marcos da avaliação.

| Data        | Marco                       | Entregável |
| ----------- | --------------------------- | ---------- |
| 16/11 (seg) | Ponto de controle           | Fase 3 completa, medições de código e histórico (Fase 4 parcial) e preparação do teste com usuários |
| 19/11 (qui) | Fim da coleta técnica       | Dados brutos de todas as métricas, exceto o teste de usabilidade |
| 20/11 (sex) | Fim do teste de usabilidade | Dados brutos da MI1.1 e da MI3.2 |
| 21/11 (sáb) | Análise concluída           | Métricas calculadas, pontuação, gráficos e julgamento por característica |
| 22/11 (dom) | Entrega final               | Artigo, GitPages (Fases 3 e 4) e tabela de contribuição |

## Atividades

**Tabela 2.** Atividades, responsáveis, prazos e entregáveis.

| Fase   | Atividade | Métrica | Responsável | Prazo | Entregável |
| ------ | --------- | ------- | ----------- | ----- | ---------- |
| Plano  | Redigir as páginas da Fase 3 e os protocolos de medição | Todas | Ludmila | 16/11 | Páginas publicadas no GitPages |
| Plano  | Corrigir as inconsistências entre as Fases 1 e 2 | Todas | Ludmila | 16/11 | Páginas atualizadas |
| Plano  | Escrever a seção da Fase 3 no artigo | Todas | Mariana | 16/11 | Seção 3.3 do artigo |
| Coleta | Medir o tempo médio de correção e merge | MM3.1 | Ludmila | 16/11 | Planilha e comandos usados |
| Coleta | Medir os módulos impactados por alteração | MM2.1 | Mariana | 16/11 | Planilha e comandos usados |
| Coleta | Classificar o reuso do Design System | MM1.1 | Rafael e um segundo avaliador | 17/11 | Planilha com as duas classificações |
| Coleta | Inventariar as mensagens de erro e status | MI2.1 | A definir | 17/11 | Planilha e prints |
| Coleta | Inspecionar o contraste do widget | MI3.1 | Ludmila | 17/11 | Relatórios do axe e do Lighthouse |
| Coleta | Medir o tempo de resposta da tradução | ME1.1 | Rafael | 18/11 | 20 medições e gravações |
| Coleta | Medir o consumo de dados e o reuso do cache | ME3.1 | Geovane | 18/11 | 3 pares de rodadas e arquivos HAR |
| Coleta | Medir o uso de CPU | ME2.1 | Amanda | 18/11 | 5 sessões por condição |
| Coleta | Testar a adaptabilidade nos navegadores | MF1.1 | Rodrigo e Rafael | 18/11 | Checklist dos 4 ambientes, com evidências |
| Coleta | Testar a integração em 10 portais | MF2.1 | A definir | 19/11 | Ficha por portal, com prints |
| Usuários | Escrever o roteiro do teste | MI1.1 e MI3.2 | A definir | 16/11 | Roteiro |
| Usuários | Gravar as instruções das tarefas em Libras | MI1.1 | Ludmila e contato do grupo usuário de Libras | 17/11 | Vídeos T1 a T4 |
| Usuários | Recrutar os 8 participantes | MI1.1 e MI3.2 | Ludmila | 17/11 a 18/11 | Lista de participantes confirmados |
| Usuários | Executar o teste de usabilidade | MI1.1 e MI3.2 | A definir | 19/11 a 20/11 | Planilhas e gravações de tela |
| Análise  | Calcular as métricas e atribuir a pontuação | Todas | Mariana e Geovane | 20/11 | Tabelas de resultados |
| Análise  | Responder as questões do GQM e emitir o julgamento | Todas | Toda a equipe | 21/11 | Julgamento por característica e geral |
| Análise  | Produzir gráficos e tabelas | Todas | Amanda | 21/11 | Figuras para o artigo e o GitPages |
| Entrega  | Escrever Resultados e Conclusão do artigo | Todas | Ludmila e Rodrigo | 21/11 | Seções 4 e 5 |
| Entrega  | Publicar a Fase 4 no GitPages | Todas | Amanda | 21/11 | Páginas da Fase 4 |
| Entrega  | Revisão final, referências, tabela de contribuição e uso de IA | Todas | Toda a equipe | 22/11 | Artigo e GitPages finais |

## Riscos e contingência

**Tabela 3.** Riscos que podem atrasar a execução.

| Risco | Efeito | Contingência |
| ----- | ------ | ------------ |
| Não conseguir 8 participantes até 19/11 | MI1.1 e MI3.2 sem amostra mínima | Aplicar o plano B (teste entre integrantes) e declarar a limitação nos resultados |
| Feriado de 20/11 (Dia da Consciência Negra) | Menos disponibilidade de participantes e de integrantes | Concentrar os testes em 19/11 e 21/11, ou fazê-los remotamente |
| Widget publicado em versão diferente da 7.12.2 | Resultados de outra versão | Registrar a versão em cada execução e declarar a diferença nas limitações |
| Portal bloqueia a injeção do widget | Menos portais válidos na MF2.1 | Registrar como conflito e substituir o portal quando o objetivo for a seleção de texto |
| Falha de rede durante as medições | Dados inválidos | Repetir a medição e registrar o desvio |
| Poucas *issues* de incompatibilidade no repositório | N pequeno na MM3.1 | Declarar o N e usar a mediana |
| Máquina mais fraca indisponível | ME2.1 sem hardware modesto real | Usar só o *throttling* de CPU e declarar a limitação |

## Alinhamento com a Fase 4

A Fase 4 usa este cronograma da seguinte forma: os dados brutos de cada métrica ficam em uma planilha compartilhada até as datas da Tabela 2, a análise (cálculo, pontuação e julgamento) ocorre entre 20/11 e 21/11, e a entrega final reúne os resultados no artigo e no GitPages em 22/11.

## Histórico de Versões

| Versão | Data       | Descrição da alteração                   | Autor(a)         | Revisor(a) |
| ------ | ---------- | ---------------------------------------- | ---------------- | ---------- |
| 0.1    | 16/11/2026 | Inserção dos marcos, atividades e riscos | Ludmila O. Nunes |            |