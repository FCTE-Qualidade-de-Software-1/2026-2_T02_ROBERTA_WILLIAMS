---
sidebar_position: 3
sidebar_label: Massa de dados
---

# Massa de dados

Esta página reúne os dados de teste usados nos [protocolos de medição](./metodo-de-avaliacao.md): as frases padronizadas, os portais da amostra, as páginas de teste, os roteiros, as tarefas do teste de usabilidade e os participantes. Os mesmos dados são usados por todos os avaliadores, para que as medições sejam comparáveis.

**Tabela 1.** Onde cada conjunto de dados é usado.

| Conjunto de dados       | Métricas que o utilizam                  |
| ----------------------- | ---------------------------------------- |
| Frases padronizadas     | ME1.1, ME2.1, ME3.1, MF1.1               |
| Portais da amostra      | MF2.1 e páginas de seleção da MI3.2      |
| Página de teste         | MI1.1, MI3.1, ME1.1, ME2.1, ME3.1, MF1.1 |
| Tarefas e participantes | MI1.1 e MI3.2                            |
| Termos do dicionário    | ME3.1, MF1.1 e MI1.1                     |

## Frases padronizadas

As 10 frases simulam textos de serviços públicos digitais e variam em tamanho e em tipo de linguagem. Elas são usadas na ME1.1 (uma medição por frase) e fazem parte da página de teste.

**Tabela 2.** Frases padronizadas.

| ID  | Tamanho | Frase | Característica |
| --- | ------- | ----- | -------------- |
| F1  | Curta   | Bom dia, como posso ajudar?                                                                                                                          | Linguagem do dia a dia            |
| F2  | Curta   | O atendimento começa às oito horas.                                                                                                                  | Horário                           |
| F3  | Curta   | Faça o login com sua conta gov.br.                                                                                                                   | Termo de serviço digital          |
| F4  | Média   | Para agendar a consulta, informe o número do seu cartão do SUS.                                                                                      | Sigla e número                    |
| F5  | Média   | O prazo para entregar a declaração termina no final do mês de maio.                                                                                  | Prazo e data                      |
| F6  | Média   | Se você perdeu o documento, solicite a segunda via no site do órgão.                                                                                 | Instrução                         |
| F7  | Média   | O CPF e o RG são obrigatórios para solicitar o benefício do INSS.                                                                                    | Siglas                            |
| F8  | Longa   | Antes de enviar o formulário, confira se todos os dados estão corretos, anexe os documentos pedidos e guarde o número do protocolo.                  | Várias instruções                 |
| F9  | Longa   | O serviço ficará indisponível neste sábado, das oito às doze horas, para manutenção do sistema, e voltará a funcionar normalmente à tarde.           | Aviso com horários                |
| F10 | Longa   | O requerente deve comprovar a residência mediante apresentação de comprovante emitido nos últimos noventa dias, sob pena de indeferimento do pedido. | Linguagem formal e administrativa |

Curtas têm até 8 palavras, médias de 12 a 14 e longas mais de 20. A F10 reproduz o tipo de texto sem correspondência direta em Libras, citado no *brainstorming* da Fase 1.

## Termos do dicionário

Os 5 termos usados na consulta ao dicionário (ME3.1, MF1.1 e MI1.1) vêm das frases acima: **protocolo**, **benefício**, **prazo**, **comprovante** e **requerente**. Antes da execução, a equipe confirma que cada termo existe no dicionário do widget. Se algum não existir, é substituído por outro das frases e a troca é registrada.

## Página de teste

Para as medições que não dependem de um portal específico, usa-se uma **página de teste simples** (`instrumentos/pagina-teste.html`), com fundo neutro, sem estilos próprios que interfiram no widget e com as 10 frases em parágrafos separados. Ela é aberta localmente, com o widget carregado pelo código padrão de instalação.

## Portais da amostra

A amostra tem 10 portais públicos federais, com layouts variados. Ela é usada na MF2.1 e as páginas escolhidas para a seleção de texto da MI3.2 saem dela.

**Tabela 3.** Portais da amostra.

| ID  | Portal                  | Endereço                             |
| --- | ----------------------- | ------------------------------------ |
| P1  | Portal gov.br           | https://www.gov.br                   |
| P2  | Receita Federal         | https://www.gov.br/receitafederal    |
| P3  | Ministério da Saúde     | https://www.gov.br/saude             |
| P4  | Portal da Transparência | https://portaldatransparencia.gov.br |
| P5  | IBGE                    | https://www.ibge.gov.br              |
| P6  | Banco Central           | https://www.bcb.gov.br               |
| P7  | Ipea                    | https://www.ipea.gov.br              |
| P8  | Caixa                   | https://www.caixa.gov.br             |
| P9  | Agência Brasil          | https://agenciabrasil.ebc.com.br     |
| P10 | Fiocruz                 | https://portal.fiocruz.br            |

**Critérios de escolha:** portais públicos federais, de acesso aberto (sem login) e com layouts diferentes. Os portais P1 a P3 seguem o mesmo padrão visual do gov.br, e os demais têm layouts próprios, o que aumenta a variedade da amostra. A lista pode ser ajustada na execução se um portal estiver fora do ar, exigir login ou já trouxer o VLibras instalado, que nesse caso não permite a injeção do widget e deve ser substituído por outro com layout parecido. Qualquer troca é registrada na ficha de integração.

## Roteiros

**Tabela 4.** Roteiros usados nas medições.

| Roteiro           | Métrica | Passos |
| ----------------- | ------- | -------|
| Rede e cache      | ME3.1   | Traduzir a F6; alterar a velocidade para 0.5x e para 2x; repetir o trecho; consultar os 5 termos do dicionário |
| Tradução contínua | ME2.1   | Traduzir as frases F4 a F8 em sequência e repetir, durante 2 minutos |
| Funções do escopo | MF1.1   | Executar, em cada ambiente: tradução da F6, consulta ao dicionário, alteração da velocidade, repetição do trecho e escolha do regionalismo |

## Tarefas do teste de usabilidade

As tarefas são usadas na MI1.1 e apresentadas ao participante em Libras (vídeo gravado ou intérprete), antes da execução.

**Tabela 5.** Tarefas da MI1.1.

| ID  | Tarefa                                                                                | Função avaliada        |
| --- | ------------------------------------------------------------------------------------- | ---------------------- |
| T1  | Traduzir a F6 e repetir o trecho                                                      | Tradução e repetição   |
| T2  | Alterar a velocidade para mais devagar                                                | Controle de velocidade |
| T3  | Consultar o termo "protocolo" no dicionário                                           | Dicionário             |
| T4  | Localizar a opção de regionalismo e confirmar o regionalismo em uso (Padrão Nacional) | Regionalismo           |

Cada tarefa tem limite de 3 minutos. Como o escopo trata só do Padrão Nacional, a T4 verifica se o participante encontra e entende a opção, e não compara regionalismos.

## Seleção de texto (MI3.2)

Cada participante seleciona e traduz três trechos em quatro páginas com layouts diferentes: a página de teste, o P1 (gov.br), o P4 (Portal da Transparência, com tabelas) e o P5 (IBGE). Os trechos são **uma palavra**, **uma frase** e **um parágrafo**. Com 8 participantes, são 96 tentativas previstas (4 páginas x 3 trechos x 8 participantes).

## Participantes

**Tabela 6.** Participantes do teste de usabilidade.

| Item               | Definição                                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| Quantidade         | No mínimo 8                                                                                                                         |
| Perfil             | Maiores de 18 anos, usuárias e usuários de Libras, com fluência em português variada                                                |
| Recrutamento       | Comunidade surda e pessoas com conhecimento de Libras, como estudantes e professores da UnB                                         |
| Registro do perfil | Código do participante (P01, P02...), fluência em português autodeclarada (baixa, média ou alta) e experiência prévia com o VLibras |
| Consentimento      | Termo de consentimento assinado antes do teste, com autorização para a gravação de tela                                             |
| Privacidade        | Sem nome nos registros e gravação apenas da tela                                                                                    |

**Plano B:** se não for possível reunir participantes da comunidade surda, o teste é feito pelos integrantes da equipe, como prevê o [Escopo](../fase-1/escopo-e-profundidade.md). Os resultados são declarados como limitados, e não representam a experiência de todos os perfis de usuário.

## Histórico de Versões

| Versão | Data       | Descrição da alteração                                                                      | Autor(a)         | Revisor(a) |
| ------ | ---------- | ------------------------------------------------------------------------------------------- | ---------------- | ---------- |
| 0.1    | 15/11/2026 | Inserção das frases, dos termos, dos portais, dos roteiros, das tarefas e dos participantes | Ludmila O. Nunes |            |