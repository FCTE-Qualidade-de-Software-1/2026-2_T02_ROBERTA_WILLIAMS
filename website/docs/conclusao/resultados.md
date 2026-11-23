---
sidebar_position: 1
sidebar_label: Resultados
---

# Resultados

Esta página aplica os limites da [pontuação e dos critérios de aceite da Fase 2](../fase-2/pontuacao-e-criterios.md) aos resultados registrados nas métricas da Fase 4. A pontuação individual é apresentada como faixa quando o critério classifica um resultado em **1–2** ou **4–5**, pois a matriz não define como escolher um valor específico dentro dessas faixas.

## Pontuação por métrica

**Tabela 1.** Resultado e pontuação segundo o critério de cada métrica.

| Característica | Métrica | Resultado usado na pontuação | Faixa do critério | Pontuação |
| -------------- | ------- | ---------------------------- | ----------------- | --------- |
| Capacidade de Interação | [MI1.1 — Conclusão de tarefas](../fase-4/capacidade-de-interacao/mi1-1-conclusao-tarefas-sem-assistencia.md) | 80% | Satisfatório/Ideal | 4–5 |
| Capacidade de Interação | [MI2.1 — Mensagens apenas em texto](../fase-4/capacidade-de-interacao/mi2-1-proporcao-mensagens-apenas-texto.md) | 60% (provisório) | Aceitável/Regular | 3 |
| Capacidade de Interação | [MI3.1 — Contraste](../fase-4/capacidade-de-interacao/mi3-1-conformidade-contraste.md) | 100% | Satisfatório/Ideal | 4–5 |
| Capacidade de Interação | [MI3.2 — Seleção de texto](../fase-4/capacidade-de-interacao/mi3-2-eficancia-selecao-texto.md) | 42,9% | Ruim | 1–2 |
| Eficiência de Desempenho | [ME1.1 — Tempo de resposta](../fase-4/eficiencia-de-desempenho/me1-1/me1-1-tempo-de-resposta.md) | 3,48 s em 3G | Aceitável/Regular | 3 |
| Eficiência de Desempenho | [ME2.1 — Utilização de CPU](../fase-4/eficiencia-de-desempenho/me2-1/me2-1-utilizacao-de-cpu.md) | 55,7% | Ruim | 1–2 |
| Eficiência de Desempenho | [ME3.1 — Reuso de cache](../fase-4/eficiencia-de-desempenho/me3-1/me3-1-volume-de-dados-e-cache.md) | 76,2% | Ruim | 1–2 |
| Flexibilidade | [MF1.1 — Adaptabilidade a navegadores](../fase-4/flexibilidade/mf1-1-adaptabilidade-a-navegadores.md) | 90% | Aceitável/Regular | 3 |
| Flexibilidade | [MF2.1 — Integração sem ajuste manual](../fase-4/flexibilidade/mf2-1/mf2-1-integracao-sem-ajuste-manual.md) | 100% | Ideal | 4–5 |
| Manutenibilidade | [MM1.1 — Reuso do Design System](../fase-4/manutenibilidade/mm1-1/MM1-1.md) | 97,53% | Satisfatório/Ideal | 4–5 |
| Manutenibilidade | [MM2.1 — Módulos impactados por alteração](../fase-4/manutenibilidade/mm2-1-modularidade-e-desacoplamento.md) | 1,58 módulos/alteração | Satisfatório/Ideal | 4–5 |
| Manutenibilidade | [MM3.1 — Tempo de correção](../fase-4/manutenibilidade/mm3-1/mm3-1-tempo-medio-de-correcao-de-incompatibilidades.md) | 83,0 dias | Ruim | 1–2 |

Na MI2.1, o resultado é provisório porque cinco apresentações candidatas não puderam ser classificadas pelas capturas. Na ME1.1, a matriz define o critério apenas para o perfil 3G, por isso somente essa média recebe pontuação. O teste complementar da ME3.1 no gov.br não entra no cálculo, pois foi realizado fora do protocolo padronizado; considera-se o resultado oficial de 76,2%.

## Pontuação por característica de qualidade

A Fase 2 determina a média aritmética simples das pontuações das métricas associadas a cada característica. Como há métricas nas faixas 1–2 e 4–5 sem regra para escolher a nota dentro da faixa, os resultados abaixo são intervalos, não notas exatas.

**Tabela 2.** Intervalo possível da pontuação por característica.

| Característica | Pontuações das métricas | Média da característica | Leitura dos resultados |
| -------------- | ---------------------- | ----------------------: | ---------------------- |
| Capacidade de Interação | MI1.1 (4–5), MI2.1 (3), MI3.1 (4–5), MI3.2 (1–2) | **3,00–3,75** | Resultados desiguais: contraste e conclusão de tarefas ficaram nas faixas superiores, enquanto a seleção de texto ficou na faixa ruim. A interpretação dos testes de interação é limitada pela ausência de participantes surdos. |
| Eficiência de Desempenho | ME1.1 (3), ME2.1 (1–2), ME3.1 (1–2) | **1,67–2,33** | É a menor faixa entre as características: CPU e reuso de cache ficaram na faixa ruim; tempo de resposta em 3G ficou na faixa regular. |
| Flexibilidade | MF1.1 (3), MF2.1 (4–5) | **3,50–4,00** | A integração sem ajuste manual teve resultado ideal, mas a adaptabilidade geral ficou regular e apresentou falhas nos ambientes móveis avaliados. |
| Manutenibilidade | MM1.1 (4–5), MM2.1 (4–5), MM3.1 (1–2) | **3,00–4,00** | Reuso do Design System e módulos impactados ficaram nas faixas superiores; o tempo de correção de incompatibilidades ficou na faixa ruim. |

Essas médias ajudam a comparar os pontos fortes e fracos entre características, mas a Fase 2 não estabelece limites de aceite separados para cada característica. Assim, elas não devem ser interpretadas isoladamente como aprovação ou reprovação.

## Critério global de aceite

O critério da Fase 2 considera o produto aprovado se a média das quatro características for **igual ou superior a 3,5** e nenhuma métrica receber nota **1 (Crítico)**.

Com as faixas de pontuação atualmente definidas, a média global possível varia de **2,79 a 3,52**:

- limite inferior: `(3,00 + 1,67 + 3,50 + 3,00) / 4 ≈ 2,79`;
- limite superior: `(3,75 + 2,33 + 4,00 + 4,00) / 4 ≈ 3,52`.

O intervalo cruza o limite de 3,5, portanto os dados disponíveis não permitem afirmar de forma conclusiva se o critério da média global foi atingido. O limite superior só é alcançado se todas as pontuações ambíguas forem atribuídas ao topo de suas faixas. Também não é possível confirmar o critério de ausência de nota 1, pois quatro métricas estão classificadas em faixas que abrangem tanto 1 quanto 2.

## Histórico de Versões

| Versão | Data | Descrição da alteração | Autor(a) | Revisor(a) |
| ------ | ---- | ---------------------- | -------- | ---------- |
| 0.1 | 22/11/2026 | Organização dos dados fornecidos e pontuação geral | Rafael W. Schadt | |