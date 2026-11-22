---
sidebar_position: 0
---

# Fase 4

A Fase 4 executa a avaliação de qualidade do widget do VLibras para navegadores web, seguindo o plano da [Fase 3](../fase-3/index.md). Nesta fase, "são obtidos os resultados da execução de ações para medir e verificar o produto de software", e estão previstas três atividades: obter as medidas, comparar com critérios e julgar os resultados (Aula A07, slides 4 e 20).

Cada página desta fase registra uma métrica da [Fase 2](../fase-2/metricas.md): a medida obtida, a comparação com os níveis de [pontuação e critérios](../fase-2/pontuacao-e-criterios.md), o julgamento em relação à hipótese e as evidências da coleta, organizadas por métrica em [Dados brutos](./dados-brutos/README.md).

## Rastreabilidade

**Tabela 1.** Páginas da Fase 4 e conteúdo.

| Característica | Página | Métrica | Situação |
| -------------- | ------ | ------- | -------- |
| Capacidade de Interação | [MI2.1 – Proporção de mensagens apenas em texto](./capacidade-de-interacao/mi2-1-proporcao-mensagens-apenas-texto.md) | MI2.1 | Resultado provisório de 60% em 10 apresentações observadas; tabela e capturas disponíveis nos dados brutos. |
| Eficiência de Desempenho | [ME1.1 – Tempo médio de resposta da tradução](./eficiencia-de-desempenho/me1-1/me1-1-tempo-de-resposta.md) | ME1.1 | Tempos e estatísticas calculados a partir dos instantes informados, com gravações disponíveis para conferência. |
| Eficiência de Desempenho | [ME2.1 – Utilização média de CPU](./eficiencia-de-desempenho/me2-1/me2-1-utilizacao-de-cpu.md) | ME2.1 | Coletada em 16/11/2026, na simulação de *hardware* limitado no D1. |
| Eficiência de Desempenho | [ME3.1 – Volume de dados e reuso do cache](./eficiencia-de-desempenho/me3-1/me3-1-volume-de-dados-e-cache.md) | ME3.1 | Coletada em 15/11/2026 (página de teste). |
| Eficiência de Desempenho | [ME3.1 – Teste complementar no gov.br](./eficiencia-de-desempenho/me3-1/me3-1-govbr.md) | ME3.1 (complementar) | Coleta em portal real, fora do protocolo padronizado; consultar como evidência complementar. |
| Flexibilidade | [MF1.1 – Adaptabilidade a navegadores](./flexibilidade/mf1-1-adaptabilidade-a-navegadores.md) | MF1.1 | Análise concluída com 20 verificações nos cinco ambientes, matriz de resultados e vídeos de evidência. |
| Flexibilidade | [MF2.1 – Taxa de integração sem ajuste manual](./flexibilidade/mf2-1/mf2-1-integracao-sem-ajuste-manual.md) | MF2.1 | Coletada em 22/11/2026 nos 10 portais da amostra, com o código padrão injetado após o bloqueio da instalação de cada portal; ficha e prints na tabela de medições. |
| Manutenibilidade | [MM1.1 – Reuso do Design System](./manutenibilidade/mm1-1/MM1-1.md) | MM1.1 | Análise concluída em 15/11/2026; inventário e evidências disponíveis na página. |
| Manutenibilidade | [MM2.1 – Média de módulos impactados por alteração](./manutenibilidade/mm2-1-modularidade-e-desacoplamento.md) | MM2.1 | Medida em 17/11/2026 a partir do histórico de *commits*; CSV de alterações e resumo da análise disponíveis. |
| Manutenibilidade | [MM3.1 – Tempo médio de correção de incompatibilidades](./manutenibilidade/mm3-1/mm3-1-tempo-medio-de-correcao-de-incompatibilidades.md) | MM3.1 | Coletada em 21/11/2026 nas *issues* do repositório; tabela de classificação disponível como subaba. |
| — | [Dados brutos](./dados-brutos/README.md) | — | HARs, planilhas CSV, scripts, registros de coleta e capturas de tela organizados por métrica. |

{/* Cada membro acrescenta uma linha por métrica coletada. */}

## Referências

> RAMOS, Cristiane Soares. **Aula A07: Processo de Avaliação de Produto**. Slides da disciplina Qualidade de Software 1. Brasília: Universidade de Brasília, 2026.

## Histórico de Versões

| Versão | Data       | Descrição da alteração                                       | Autor(a)           | Revisor(a)       |
| ------ | ---------- | ------------------------------------------------------------ | ------------------ | ---------------- |
| 0.1    | 15/11/2026 | Criação da Fase 4 e da tabela de rastreabilidade (ME3.1)     | Geovane S. Freitas | Ludmila O. Nunes |
| 0.2    | 15/11/2026 | Inclusão da MM1.1 e organização dos dados brutos por métrica | Rafael W. Schadt   | Ludmila O. Nunes |
| 0.3    | 16/11/2026 | Adição da MM3.1                                              | Ludmila O. Nunes   |  Amanda C. Lima  |
| 0.4    | 16/11/2026 | Inclusão da ME2.1                                            | Amanda C. Lima     |                  |
| 0.5    | 20/11/2026 | Inclusão da análise da ME1.1                                 | Rafael W. Schadt   |  Amanda C. Lima  |
| 0.6    | 22/11/2026 | Organização das métricas por característica da ISO/IEC 25010:2023 e inclusão da MM2.1 e da MM3.1 na rastreabilidade | Amanda C. Lima | |
| 0.7    | 22/11/2026 | Inclusão da MF2.1                                            | Amanda C. Lima     |            |
| 0.8    | 22/11/2026 | Inclusão da MI2.1 e de seus dados brutos na rastreabilidade | Rafael W. Schadt | |
