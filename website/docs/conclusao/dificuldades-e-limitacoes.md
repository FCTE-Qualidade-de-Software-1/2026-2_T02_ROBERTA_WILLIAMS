---
sidebar_position: 2
sidebar_label: Dificuldades e Limitações
---

# Dificuldades e Limitações

## Dificuldades durante o trabalho

O contato com a comunidade surda não teve o alcance esperado. Apesar das tentativas de recrutamento, não foi possível incluir participantes surdos nos testes de interação. A avaliação contou com uma única participante ouvinte, fluente em Libras e, conforme a percepção da equipe, familiarizada com tecnologia. Como o estudo buscava observar a autonomia de pessoas surdas, especialmente aquelas com pouca alfabetização em português, esse perfil não substitui a participação do público prioritário. A experiência está detalhada nas páginas da [MI1.1](../fase-4/capacidade-de-interacao/mi1-1-conclusao-tarefas-sem-assistencia.md) e da [MI3.2](../fase-4/capacidade-de-interacao/mi3-2-eficancia-selecao-texto.md).

Algumas métricas também exigiram coletas extensas e trabalhosas, envolvendo a execução de cenários, o registro de evidências e a organização e análise dos dados. Embora o planejamento tenha orientado o trabalho, a equipe avalia que uma distribuição mais contínua do esforço ao longo de algumas semanas poderia ter evitado o acúmulo de demandas. As dificuldades foram contornadas com reuniões on-line, priorização dos artefatos e busca de alternativas para realizar as medições. A colaboração e a disponibilidade do grupo facilitaram esses ajustes.

## Limitações da avaliação

- **Amostra de participantes restrita.** Os testes de interação contaram com uma participante e não incluíram pessoas surdas. Os resultados da [MI1.1](../fase-4/capacidade-de-interacao/mi1-1-conclusao-tarefas-sem-assistencia.md) e da [MI3.2](../fase-4/capacidade-de-interacao/mi3-2-eficancia-selecao-texto.md) são, portanto, exploratórios e não permitem generalizar a autonomia ou a experiência do público-alvo.
- **Coletas pontuais e amostras específicas.** A [ME1.1](../fase-4/eficiencia-de-desempenho/me1-1/me1-1-tempo-de-resposta.md) registrou uma medição por frase em cada perfil de rede; a coleta padronizada da [ME3.1](../fase-4/eficiencia-de-desempenho/me3-1/me3-1-volume-de-dados-e-cache.md) ocorreu em uma sessão; a [MF1.1](../fase-4/flexibilidade/mf1-1-adaptabilidade-a-navegadores.md) cobriu cinco ambientes; e a [MF2.1](../fase-4/flexibilidade/mf2-1/mf2-1-integracao-sem-ajuste-manual.md) foi executada em um navegador desktop. A [MM3.1](../fase-4/manutenibilidade/mm3-1/mm3-1-tempo-medio-de-correcao-de-incompatibilidades.md) analisou sete *issues*, das quais cinco ainda estavam abertas. Esses resultados descrevem as amostras observadas, não todos os usos, ambientes ou problemas possíveis.
- **Condições e evidências específicas de cada medição.** Os resultados se aplicam aos ambientes, versões, tarefas e instrumentos efetivamente usados. Por exemplo, a [MI2.1](../fase-4/capacidade-de-interacao/mi2-1-proporcao-mensagens-apenas-texto.md) é provisória: cinco das quinze apresentações candidatas não puderam ser classificadas pelas capturas; a [ME2.1](../fase-4/eficiencia-de-desempenho/me2-1/me2-1-utilizacao-de-cpu.md) usou uma simulação de hardware limitado; e a [MI3.1](../fase-4/capacidade-de-interacao/mi3-1-conformidade-contraste.md) avaliou contraste textual automatizado em uma página de teste sem estilos próprios.
- **Classificações e análises sujeitas a decisões metodológicas.** A [MM1.1](../fase-4/manutenibilidade/mm1-1/MM1-1.md) não documentou uma segunda classificação independente dos componentes, e a [MM3.1](../fase-4/manutenibilidade/mm3-1/mm3-1-tempo-medio-de-correcao-de-incompatibilidades.md) adotou classificação manual das *issues*. Essas decisões estão registradas nos relatórios, mas devem ser consideradas em novas coletas ou reproduções.
- **Escopo delimitado.** As conclusões dizem respeito ao widget VLibras para navegadores web e às funcionalidades e condições examinadas. Não devem ser estendidas automaticamente à extensão, a aplicativos nativos, a implementações internas de serviços remotos ou a outros ambientes e regionalismos não avaliados, conforme o [escopo e a profundidade definidos](../fase-1/escopo-e-profundidade.md).
- **Referências de análise nem sempre coincidentes com o escopo planejado.** Algumas medições têm ressalvas sobre a versão ou a fonte analisada. Na [MM2.1](../fase-4/manutenibilidade/mm2-1-modularidade-e-desacoplamento.md), por exemplo, a análise foi feita no `HEAD` da branch `dev`, e não na versão 7.12.2 definida no plano. Essas diferenças devem ser consideradas ao interpretar e reproduzir os resultados.

Essas dificuldades e limitações não anulam os resultados obtidos, mas delimitam o alcance das conclusões e reforçam a necessidade de interpretá-las dentro das condições documentadas em cada métrica.

## Histórico de Versões

| Versão | Data | Descrição da alteração | Autor(a) | Revisor(a) |
| ------ | ---- | ---------------------- | -------- | ---------- |
| 0.1 | 22/11/2026 | Escrita das Dificuldades e Limitações | Rafael W. Schadt | |