---
sidebar_position: 0
sidebar_label: Visão geral
---

# Gestão do projeto com PSM/CID

A premissa 3 da especificação do trabalho exige o uso de métricas do PSM/CID para acompanhar a execução do projeto, registrando "as medições, sua interpretação e as decisões de gestão decorrentes dos resultados". A §2 da especificação define três categorias obrigatórias: **Calendário e Progresso**, **Recursos e Custos** e **Desempenho dos Processos**, com evidências no repositório Git da equipe (*commits*, *issues*, *milestones* e *dashboards*).

## PSM e CID

O PSM (*Practical Software and Systems Measurement*) é uma abordagem "dirigida pelas informações", com "forte ligação com a gestão de projetos", cujo princípio é "prover informações aos profissionais que tomam decisões nos projetos" (Aula 09, slide "Princípios do PSM").

O **CID** (*PSM Continuous Iterative Development Measurement Framework*) é o guia do PSM para desenvolvimento contínuo e iterativo. A equipe usa as Partes 1 e 2 do guia:

| Parte do guia | Pergunta que responde (Aula 09, slide "Como utilizar os guias do PSM") | Uso pela equipe |
| ------------- | ---------------------------------------------------------------------- | --------------- |
| Parte 1 – *Measurement Framework* | O que medir? | Necessidades de informação, categorias e conceitos mensuráveis (tabela ICM, Parte 1, Tabela 5, pp. 19–26) |
| Parte 2 – *Measurement Specifications* | Como medir? | Especificação das medidas e critérios de decisão (Parte 2, §8.2 a §8.5) |
| Parte 3 – *Software Assurance and Technical Debt* | Como avaliar segurança e dívida técnica? | Não usada. A Aula 09 (slide "Como usar os guias?") registra que a Parte 3 "é um complemento, não uma etapa obrigatória" |

## Modelos do PSM aplicados

O PSM se estrutura em dois modelos complementares (Aula 09, slide "Modelos estruturais do PSM").

### Modelo de informação

O modelo de informação "provê a estrutura de organização das medidas a serem executadas, os resultados de operações sobre estas medidas, até o atendimento das necessidades de informação" (Aula 09). Cada indicador da equipe foi descrito com os elementos desse modelo: necessidade de informação, entidade, atributo, medida básica, método de medição, medida derivada, função de medição, indicador, modelo de análise e critério de decisão (McGarry, cap. 2, Fig. 2-3, p. 19). Ver [Indicadores](./indicadores.md).

### Modelo de processo

O modelo de processo "descreve as atividades e tarefas relacionadas às medições" (Aula 09). Ele tem quatro atividades (McGarry, cap. 1, §1.6, pp. 10–11), aplicadas assim:

| Atividade do PSM | Como a equipe a executa |
| ---------------- | ----------------------- |
| Estabelecer e manter o compromisso (*Establish and sustain commitment*) | Responsável fixo pela coleta e regras de registro definidas nesta página |
| Planejar a medição (*Plan measurement*) | Seleção dos seis indicadores e dos critérios de decisão ([Indicadores](./indicadores.md)) |
| Executar a medição (*Perform measurement*) | Coleta semanal no GitHub Projects e registro em [Registro de medições](./registro-psm.md) |
| Avaliar a medição (*Evaluate measurement*) | Revisão, ao fim de cada iteração, de quais indicadores ajudaram nas decisões; mudanças registradas com motivo |

## Ferramenta: GitHub Projects

O acompanhamento é feito no GitHub Projects do repositório da equipe.

### Campos

| Campo | Tipo | Uso |
| ----- | ---- | --- |
| Status | Seleção (colunas do quadro, de Backlog a Done) | Fluxo do trabalho; base do fluxo cumulativo |
| Iteração | Iteração semanal (Iteração 0 de 12/10 a 18/10/2026, cadastrada retroativamente) | Agrupa o trabalho comprometido por semana |
| Fase | Seleção (Fase 1 a Fase 4, Gestão do projeto, Artigo e GitPage) | Liga cada item à fase do processo de avaliação (Aula A07, slide 4) |
| Esforço estimado (h) | Número | Indicador de precisão da estimativa |
| Esforço real (h) | Número | Indicadores de esforço |
| Início / Conclusão | Data | *Cycle time* e linha do tempo |
| Priority | Seleção | Ordenação do *backlog* |
| Milestone | Marco do repositório | E1 (26/10/2026) e E2 |

{/* Conferir os nomes exatos das colunas de Status, dos campos e das visões com o GitHub Projects configurado. */}

### Visões

| Visão | Layout | Para que serve |
| ----- | ------ | -------------- |
| Kanban | Quadro por Status | Acompanhamento diário |
| Iteração atual | Quadro filtrado por `iteration:@current` | Trabalho comprometido na semana |
| Recursos e Custos | Tabela agrupada por responsável, com soma das horas | Indicadores 3 e 4 |
| Calendário e Progresso | *Roadmap* por Início e Conclusão, com *milestones*, agrupado por Fase | Indicadores 1 e 2 |
| Desempenho do Processo | Tabela filtrada por `status:Done` | Indicador 5 (*cycle time*) |

### Regras de registro

- **Um responsável por *issue*.** Trabalho em conjunto vira uma *issue*-mãe sem horas e uma *sub-issue* por pessoa, com as horas dela. Isso evita contar o mesmo esforço duas vezes no indicador 4 e na [Tabela de contribuição](../sobre/tabela-de-contribuicao.md).
- **Contagem de itens.** Os indicadores 1, 2, 5 e 6 contam só itens sem pai (filtro `-parent-issue:*`, para não contar a *issue*-mãe e as *sub-issues* juntas). Os indicadores 3 e 4 usam só itens com horas registradas.
- **Status do projeto.** O resumo semanal do GitHub Projects usa o critério do indicador 1: *On track* até 5% de desvio, *At risk* entre 5% e 10%, *Off track* acima de 10% (CID, Parte 2, §8.3, p. 17).
- **Modelo fixo.** O modelo de registro não muda entre iterações; quando um indicador muda, o motivo é registrado (CID, Parte 1, §2, p. 5).

## Páginas desta seção

- [Indicadores](./indicadores.md): os seis indicadores descritos pelo modelo de informação.
- [Registro de medições](./registro-psm.md): valores por iteração, interpretação e decisões.
- [Atas de reunião](./atas/index.md): registro das reuniões da equipe.

## Referências

- Aula 09 – PSM (resumo), slides "Princípios do PSM", "Modelos estruturais do PSM", "Como utilizar os guias do PSM" e "Como usar os guias?".
- McGarry et al., *Practical Software Measurement*, cap. 1, §1.6 (pp. 10–11), e cap. 2, Fig. 2-3 (p. 19).
- PSM CID Measurement Framework, Parte 1 (§2, p. 5; Tabela 5, pp. 19–26) e Parte 2 (§8.2 a §8.5).
- Especificação do Projeto Final da disciplina, §1 (premissas 3 a 5) e §2.

## Histórico de Versões

| Versão | Data | Descrição da alteração | Autor(a) | Revisor(a) |
| ------ | ---- | ---------------------- | -------- | ---------- |
| 0.1 | 20/10/2026 | Visão geral da gestão com PSM/CID e estrutura do GitHub Projects | Geovane S. Freitas | |
