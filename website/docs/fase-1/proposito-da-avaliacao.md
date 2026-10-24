---
sidebar_position: 1
sidebar_label: Propósito
---

# Propósito da avaliação e uso pretendido

## 1. Por que avaliar

Esta seção apresenta o contexto em que o VLibras é usado, os problemas que motivam a avaliação e o propósito que a orienta.

### 1.1. Contexto e problema

O VLibras é um conjunto gratuito e de código aberto de ferramentas que traduz texto, áudio e vídeo em português para a Língua Brasileira de Sinais (Libras) e apresenta o resultado em um avatar. Foi desenvolvido em parceria entre o Ministério da Gestão e da Inovação em Serviços Públicos, o Ministério dos Direitos Humanos e da Cidadania e o Laboratório de Aplicações de Vídeo Digital (LAVID) da Universidade Federal da Paraíba.

Esta avaliação trata dos componentes para navegadores web reunidos no repositório vlibras-web-browsers. O VLibras Widget é integrado diretamente por desenvolvedores em portais e sites web. Os VLibras Plugins (extensões) são a versão adaptada para Chrome e Firefox e permitem que o usuário surdo ative a acessibilidade em qualquer página da internet. Ambos traduzem o conteúdo de páginas como as dos serviços digitais do Governo Federal.

A Lei Brasileira de Inclusão exige que os sites mantidos por órgãos de governo sejam acessíveis à pessoa com deficiência (BRASIL, 2015, art. 63). Para parte das pessoas com deficiência auditiva, porém, o texto em português não basta como forma de acesso: segundo o Censo 2010, cerca de 24,5% das pessoas de 5 anos ou mais com deficiência auditiva não eram alfabetizadas (cálculo a partir de BRASIL, 2012). Por isso, o objetivo estratégico da equipe é garantir o acesso de pessoas surdas a serviços digitais.

Com o brainstorming realizado foi possível elencar alguns problemas que podem comprometer esse acesso:

- textos que não estão originalmente em português não são traduzidos para um sinal correspondente em Libras;
- o cursor não indica de forma clara o que pode ser traduzido, e não há diferenciação visual entre o trecho em tradução e o que pode ser traduzido ao passar o mouse;
- dúvida sobre a suficiência da variedade de palavras específicas disponíveis;
- a fluidez do avatar nem sempre ajuda na interpretação do texto;
- os erros de interação com o software não são transparentes para o usuário;
- a tradução demora ou atrasa em cenários de internet lenta.

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVEZJnItA=/?embedMode=view_only_without_ui&moveToViewport=-7569,-4842,22668,10888&embedId=678904142013" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

### 1.2. Objetivo da avaliação

O processo de avaliação da ISO/IEC 25040 começa pelo estabelecimento dos requisitos da avaliação, e o primeiro deles é o propósito (ISO/IEC, 2011). Para este trabalho, o propósito é:

> Indicar pontos de melhoria do widget e da extensão do VLibras para navegadores web em quatro características de qualidade (capacidade de interação, eficiência de desempenho, manutenibilidade e flexibilidade) e fornecer à equipe responsável um diagnóstico técnico que apoie a priorização de correções e evoluções.

Definimos um objetivo de melhoria para cada característica:

- **Capacidade de interação:** os usuários utilizam a ferramenta sozinhos, são avisados sobre erros e recebem informações com contraste adequado.
- **Eficiência de desempenho:** o consumo de processamento e de rede é otimizado.
- **Manutenibilidade:** as novas funcionalidades aplicam componentes já definidos no Design System.
- **Flexibilidade:** o widget e a extensão são compatíveis com os principais navegadores, sistemas operacionais e dispositivos, com menos adaptações específicas para cada ambiente.

## 2. Para quem

Para os fins desta avaliação, o requisitante é a equipe responsável pelo desenvolvimento e pela manutenção do VLibras, que tem os meios para corrigir e evoluir o widget e a extensão. O trabalho é conduzido pela equipe de avaliação por iniciativa acadêmica, no âmbito da disciplina Qualidade de Software 1 (FGA0315), sem solicitação formal.

Os resultados também interessam a dois outros grupos: os desenvolvedores que integram o widget aos portais governamentais, que podem usá-los para antecipar problemas de compatibilidade e desempenho, e os usuários surdos, beneficiários indiretos das melhorias. O papel, as necessidades e a influência de cada parte interessada estão em [Requisitante e partes interessadas](./requisitante-e-partes-interessadas.md).

## 3. Como os resultados serão usados

Esta seção descreve em que situação os resultados serão usados e quais decisões eles apoiam, com os respectivos responsáveis.

### 3.1. Cenário de uso

Os resultados serão reunidos em um artigo e nesta documentação, publicados no repositório da equipe. A equipe de desenvolvimento e manutenção do VLibras pode usá-los para decidir o que corrigir primeiro, e os desenvolvedores integradores, para decidir se e como adotar o widget em um portal. Como o VLibras é de código aberto e a avaliação é acadêmica, os dados e as conclusões são públicos.

A avaliação cobre uma versão específica do widget e da extensão, registrada em [Produto e componentes avaliados](./produto-e-componentes-avaliados.md), e seus resultados valem para o escopo definido em [Escopo, profundidade e objetos de avaliação](./escopo-e-profundidade.md).

### 3.2. Decisões apoiadas e responsáveis

As decisões da Tabela 1 derivam dos objetivos de melhoria da Seção 1.2. Para cada uma, a tabela indica quem decide, qual característica de qualidade fornece a evidência e qual componente está envolvido.

**Tabela 1.** Decisões apoiadas pela avaliação.

| ID | Decisão | Quem decide | Característica relacionada | Componente |
| -- | ------- | ----------- | -------------------------- | ---------- |
| D1 | Priorizar ajustes na indicação do que pode ser traduzido (hover, diferenciação visual) e no aviso de erros ao usuário | Equipe de desenvolvimento e manutenção | Capacidade de interação | Widget e extensões |
| D2 | Definir ajustes de contraste e de interface para que o usuário use a ferramenta sozinho | Equipe de desenvolvimento e manutenção | Capacidade de interação | Widget e extensões |
| D3 | Definir ações para reduzir o uso de processamento e de rede, em especial com internet lenta | Equipe de desenvolvimento e manutenção | Eficiência de desempenho | Widget e extensões |
| D4 | Definir onde as novas funcionalidades devem passar a usar os componentes do Design System | Equipe de desenvolvimento e manutenção | Manutenibilidade | Widget e extensões |
| D5 | Definir quais navegadores, sistemas e dispositivos terão suporte prioritário | Equipe de desenvolvimento e manutenção | Flexibilidade | Widget e extensões |
| D6 | Decidir se e com quais ajustes integrar o widget a um portal | Desenvolvedores responsáveis pela integração | Flexibilidade e eficiência de desempenho | Widget |

## Referências

> BRASIL. **Lei nº 13.146, de 6 de julho de 2015**. Institui a Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência). Diário Oficial da União: seção 1, Brasília, DF, 7 jul. 2015. Disponível em: [https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm). Acesso em: 20 out. 2026.

> BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. **VLibras**. Brasília, DF: Secretaria de Governo Digital, [s.d.]. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras). Acesso em: 20 out. 2026.

> BRASIL. Secretaria de Direitos Humanos da Presidência da República. Secretaria Nacional de Promoção dos Direitos da Pessoa com Deficiência. **Cartilha do Censo 2010**: pessoas com deficiência. Brasília, DF: SDH/PR, 2012. Disponível em: [https://siac.fpabramo.org.br/uploads/acaoinstitucional/SNPDPCD_censo_2012.pdf](https://siac.fpabramo.org.br/uploads/acaoinstitucional/SNPDPCD_censo_2012.pdf). Acesso em: 20 out. 2026.

> ISO/IEC. **ISO/IEC 25040:2011**: systems and software engineering: systems and software quality requirements and evaluation (SQuaRE): evaluation process. Geneva: ISO/IEC, 2011.

> SPBGOVBR-VLIBRAS. **vlibras-web-browsers**: acessibilidade digital através da tradução para Língua Brasileira de Sinais (Libras). [S. l.]: GitHub, [s.d.]. Disponível em: [https://github.com/spbgovbr-vlibras/vlibras-web-browsers](https://github.com/spbgovbr-vlibras/vlibras-web-browsers). Acesso em: 20 out. 2026.

## Histórico de Versões

| Versão | Data       | Descrição da alteração                    | Autor(a) | Revisor(a) |
| ------ | ---------- | ----------------------------------------- | -------- | ---------- |
| 0.1    | 20/10/2026 | Primeira versão do propósito da avaliação | Amanda C. Lima |            |
