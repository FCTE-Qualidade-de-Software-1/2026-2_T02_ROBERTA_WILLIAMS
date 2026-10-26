---
sidebar_position: 1
sidebar_label: Propósito
---

# Propósito da avaliação e uso pretendido

Esta página explica por que avaliar o widget e a extensão do VLibras, para quem e como os resultados serão usados.

**Tabela 1.** Resumo da avaliação.

| Item | Definição |
| ---- | --------- |
| Produto avaliado | Widget e extensão para navegadores web do repositório [vlibras-web-browsers](https://github.com/spbgovbr-vlibras/vlibras-web-browsers) |
| Requisitante e avaliadores | Equipe Roberta Williams |
| Destinatários dos resultados | Equipe de desenvolvimento e manutenção do VLibras, desenvolvedores integradores do widget e usuários com deficiência auditiva |
| Objetivo | Diagnosticar a qualidade do widget e da extensão e indicar pontos de melhoria para priorizar correções e evoluções |
| Características | Capacidade de interação, eficiência de desempenho, manutenibilidade e flexibilidade |
| Processo | ISO/IEC 25040:2024 (ISO/IEC, 2024) |

## Contexto e problema

O VLibras é um conjunto gratuito e de código aberto que traduz texto, áudio e vídeo em português para a Língua Brasileira de Sinais (Libras) e mostra o resultado em um avatar. Foi desenvolvido pelo Ministério da Gestão e da Inovação em Serviços Públicos, pelo Ministério dos Direitos Humanos e da Cidadania e pelo Laboratório de Aplicações de Vídeo Digital (LAVID) da Universidade Federal da Paraíba. Os componentes avaliados aqui, do repositório vlibras-web-browsers, são o widget integrado e a extensão, que permite ao usuário com deficiência auditiva ativar a tradução em qualquer página.

A Lei Brasileira de Inclusão exige que os sites de órgãos de governo sejam acessíveis (BRASIL, 2015, art. 63). Para parte das pessoas com deficiência auditiva, o texto em português não basta: pelo Censo 2010, cerca de 24,5% das pessoas de 5 anos ou mais com deficiência auditiva não eram alfabetizadas (cálculo a partir de BRASIL, 2012). Por isso, o objetivo estratégico da equipe é garantir o acesso de pessoas com deficiência auditiva a serviços digitais.

No brainstorming da equipe, os problemas que podem comprometer esse acesso foram:

- ausência de tradução ou sinalização para palavras específicas e para textos em português sem correspondência direta em Libras;
- falta de transparência e de comunicação visual em mensagens de erro ou falhas de carregamento;
- inconstância na taxa de quadros do avatar 3D durante a interpretação;
- atraso na tradução e piora do tempo de resposta com internet de baixa velocidade;
- ausência de diferenciação visual clara entre textos já traduzidos e elementos selecionáveis ao passar o cursor (hover).

***Miro da equipe***
<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVEZJnItA=/?embedMode=view_only_without_ui&moveToViewport=-7569,-4842,22668,10888&embedId=678904142013" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

## Objetivo da avaliação

O primeiro requisito do processo da ISO/IEC 25040 é o propósito da avaliação (ISO/IEC, 2024). Para este trabalho, ele é:

> Diagnosticar barreiras de interação, gargalos de desempenho, dificuldades de funcionamento em diferentes plataformas e o nível de padronização estrutural do código-fonte do widget e da extensão do VLibras para navegadores web, indicando pontos de melhoria que apoiem a priorização de correções e evoluções. A análise cobre quatro características de qualidade: capacidade de interação, eficiência de desempenho, manutenibilidade e flexibilidade.

**Tabela 2.** Objetivo de melhoria por característica.

| Característica | Objetivo de melhoria |
| -------------- | -------------------- |
| Capacidade de interação | Permitir o uso autônomo da ferramenta por usuários com deficiência auditiva, inclusive os não alfabetizados em português, com proteção contra erros, contraste adequado e diferenciação visual do que pode ser traduzido |
| Eficiência de desempenho | Otimizar o tempo de resposta e o consumo de recursos (processamento e rede) com conectividade e hardware limitados |
| Manutenibilidade | Fazer com que novas funcionalidades e alterações de interface reutilizem os componentes padronizados do Design System e mantenham baixo acoplamento arquitetural |
| Flexibilidade | Tornar o widget e a extensão compatíveis com os principais navegadores (desktop e mobile) e integráveis aos portais web com poucas adaptações |

## Para quem

O requisitante é a própria equipe de avaliação, na matéria Qualidade de Software 1 (FGA0315), e conduz a avaliação de forma independente, em contexto acadêmico. Os principais destinatários dos resultados são a equipe de desenvolvimento e manutenção do VLibras e os desenvolvedores integradores. O papel e a influência de cada parte estão em [Requisitante e partes interessadas](./requisitante-e-partes-interessadas.md).

**Tabela 3.** Quem usa os resultados.

| Parte | Papel | Uso dos resultados |
| ----- | ----- | ------------------ |
| Equipe de avaliação | Requisitante e avaliadora | Diagnosticar o nível atual de qualidade do VLibras e propor melhorias práticas |
| Equipe de desenvolvimento e manutenção | Responsável pela evolução e pela correção de falhas no repositório oficial | Decidir o que corrigir e evoluir primeiro |
| Desenvolvedores integradores | Responsáveis por integrar o widget a portais e sites web | Antecipar problemas de funcionamento em diferentes navegadores e portais e decidir se e como adotar o widget |
| Usuários com deficiência auditiva | Dependem da ferramenta para ter autonomia digital | Beneficiam-se das melhorias que vierem dos resultados |

## Como os resultados serão usados

Os resultados serão reunidos em um artigo e nesta documentação, publicados no repositório da equipe. Como o VLibras é de código aberto e a avaliação é acadêmica, os dados e as conclusões são públicos. Eles valem para a versão registrada em [Tipo de produto e descrição estruturada do software](./tipo-produto-descricao.md) e para o escopo definido em [Escopo, profundidade e objetos de avaliação](./escopo-e-profundidade.md).

As decisões da Tabela 4 derivam dos objetivos da Tabela 2.

**Tabela 4.** Decisões apoiadas pela avaliação.

| ID  | Decisão                                                                                                               | Quem decide                                  | Característica           | Componente         |
| --- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------ | ------------------ |
| D1  | Priorizar ajustes na indicação do que pode ser traduzido (hover, diferenciação visual) e no aviso de erros ao usuário | Equipe de desenvolvimento e manutenção       | Capacidade de interação  | Widget e extensões |
| D2  | Definir ajustes de contraste e de interface para que o usuário use a ferramenta sozinho                               | Equipe de desenvolvimento e manutenção       | Capacidade de interação  | Widget e extensões |
| D3  | Definir ações para reduzir o tempo de resposta e o uso de processamento e de rede, em especial com internet lenta     | Equipe de desenvolvimento e manutenção       | Eficiência de desempenho | Widget e extensões |
| D4  | Definir onde as novas funcionalidades devem passar a usar os componentes do Design System                             | Equipe de desenvolvimento e manutenção       | Manutenibilidade         | Widget e extensões |
| D5  | Definir quais navegadores, sistemas e dispositivos terão suporte prioritário                                          | Equipe de desenvolvimento e manutenção       | Flexibilidade            | Widget e extensões |
| D6  | Decidir se e com quais ajustes integrar o widget a um portal                                                          | Desenvolvedores responsáveis pela integração | Flexibilidade            | Widget             |

## Referências

> BRASIL. **Lei nº 13.146, de 6 de julho de 2015**. Institui a Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência). Diário Oficial da União: seção 1, Brasília, DF, 7 jul. 2015. Disponível em: [https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm). Acesso em: 20 out. 2026.

> BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. **VLibras**. Brasília, DF: Secretaria de Governo Digital, [s.d.]. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras). Acesso em: 20 out. 2026.

> BRASIL. Secretaria de Direitos Humanos da Presidência da República. Secretaria Nacional de Promoção dos Direitos da Pessoa com Deficiência. **Cartilha do Censo 2010**: pessoas com deficiência. Brasília, DF: SDH/PR, 2012. Disponível em: [https://siac.fpabramo.org.br/uploads/acaoinstitucional/SNPDPCD_censo_2012.pdf](https://siac.fpabramo.org.br/uploads/acaoinstitucional/SNPDPCD_censo_2012.pdf). Acesso em: 20 out. 2026.

> ISO/IEC. **ISO/IEC 25040:2024**: systems and software engineering: systems and software quality requirements and evaluation (SQuaRE): quality evaluation framework. 2. ed. Geneva: ISO/IEC, 2024.

> SPBGOVBR-VLIBRAS. **vlibras-web-browsers**: acessibilidade digital através da tradução para Língua Brasileira de Sinais (Libras). [S. l.]: GitHub, [s.d.]. Disponível em: [https://github.com/spbgovbr-vlibras/vlibras-web-browsers](https://github.com/spbgovbr-vlibras/vlibras-web-browsers). Acesso em: 20 out. 2026.

## Histórico de Versões

| Versão | Data       | Descrição da alteração                                                | Autor(a)       | Revisor(a) |
| ------ | ---------- | --------------------------------------------------------------------- | -------------- | ---------- |
| 0.1    | 20/10/2026 | Inserção do contexto, do problema e do objetivo da avaliação          | Amanda C. Lima |            |
| 1.0    | 24/10/2026 | Inserção do resumo, de quem usa os resultados e das decisões apoiadas | Amanda C. Lima |            |
