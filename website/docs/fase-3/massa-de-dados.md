---
sidebar_position: 3
sidebar_label: Massa de dados
---

# Massa de dados

Esta página reúne os dados de teste usados nos [protocolos de medição](./metodo-de-avaliacao.md): as frases padronizadas, os portais da amostra, as páginas de teste, os roteiros, as tarefas do teste de usabilidade e os participantes. Os mesmos dados são usados por todos os avaliadores, para que as medições sejam comparáveis.

**Tabela 1.** Onde cada conjunto de dados é usado.

| Conjunto de dados    | Métricas que o utilizam                  |
| -------------------- | ---------------------------------------- |
| Frases padronizadas  | ME1.1, ME2.1, ME3.1, MI1.1 e MI3.2       |
| Portais da amostra   | MF2.1 e páginas de seleção da MI3.2      |
| Página de teste      | MI1.1, MI3.1, MI3.2, ME1.1, ME2.1, ME3.1 |
| Cenários e tarefas   | MI1.1 e MI3.2                            |
| Termos do dicionário | ME3.1, MF1.1 e MI1.1                     |
| Participantes        | MI1.1 e MI3.2                            |

## Frases padronizadas

As 10 frases simulam textos de serviços públicos digitais e variam em tamanho e em tipo de linguagem. Elas são usadas na ME1.1 (uma medição por frase) e fazem parte da página de teste.

**Tabela 2.** Frases padronizadas.

| ID  | Tamanho | Frase                                                                                                                                                | Característica                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
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

| ID  | Portal                       | Endereço                             |
| --- | ---------------------------- | ------------------------------------ |
| P1  | Portal gov.br                | https://www.gov.br                   |
| P2  | Receita Federal              | https://www.gov.br/receitafederal    |
| P3  | Ministério da Saúde          | https://www.gov.br/saude             |
| P4  | Casa Civil                   | https://www.gov.br/casacivil/pt-br   |
| P5  | Controladoria-Geral da União | https://www.gov.br/cgu/pt-br         |
| P6  | IBGE                         | https://www.ibge.gov.br              |
| P7  | Banco Central                | https://www.bcb.gov.br               |
| P8  | Ipea                         | https://www.ipea.gov.br              |
| P9  | Agência Brasil               | https://agenciabrasil.ebc.com.br     |
| P10 | Fiocruz                      | https://portal.fiocruz.br            |

**Critérios de escolha:** portais públicos federais, de acesso aberto (sem login) e com layouts diferentes. Os portais P1 a P5 seguem o mesmo padrão visual do gov.br, e os demais têm layouts próprios, o que aumenta a variedade da amostra.

## Roteiros

**Tabela 4.** Roteiros usados nas medições.

| Roteiro           | Métrica | Passos                                                                                                                        |
| ----------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Rede e cache      | ME3.1   | Traduzir todas as frases padronizadas; repetir cada trecho nas velocidades 0.5x, 1x e 2x; consultar os 5 termos do dicionário |
| Tradução contínua | ME2.1   | Traduzir as frases F4 a F8 em sequência e repetir, durante 2 minutos                                                          |
| Funções do escopo | MF1.1   | Executar, em cada ambiente: tradução de um parágrafo, consulta ao dicionário, alteração da velocidade e repetição do trecho   |

## Cenários do teste de usabilidade (MI1.1)

Os cenários são usados na MI1.1. Cada um traz um objetivo e um contexto, sem indicar qual controle usar. São apresentados ao participante em Libras (vídeo curto com legenda) e em um cartão visual, antes da execução.

**Tabela 5.** Cenários da MI1.1.

| ID  | Cenário (objetivo do participante)                                  | Material                                                            | Pré-condição                   | Critério de conclusão                                                                         | Função avaliada                                       |
| --- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| T1  | Entender em Libras o aviso da página                                | F9 (aviso com horários), na página de teste                         | Widget fechado, rede normal    | Avatar sinaliza o parágrafo completo                                                          | Abrir o widget, selecionar texto e iniciar a tradução |
| T2  | Rever o aviso mais devagar, porque o avatar sinalizou rápido demais | F9, já traduzida na T1                                              | Tradução da T1 concluída       | Aviso reproduzido de novo, com velocidade menor que 1x                                        | Repetição e velocidade                                |
| T3  | Ver o sinal de uma palavra que não entendeu                         | Termo "prazo"                                                       | Widget aberto                  | Avatar exibe o sinal de "prazo" pelo dicionário                                               | Dicionário                                            |
| T4  | Verificar se é possível usar sinais de outra região                 | Opção de regionalismo                                               | Widget aberto                  | Participante localiza a opção e identifica o regionalismo em uso (Padrão Nacional)            | Regionalismo                                          |
| T5  | Traduzir apenas uma frase de um parágrafo                           | Parágrafo do P7 (Banco Central), frase de carrossel | Widget aberto                  | Tradução iniciada só de parte da frase indicada                                                        | Seleção parcial de texto                              |

Limite de 2 minutos por cenário. Como o escopo trata só do Padrão Nacional, a T4 verifica se o participante encontra e entende a opção, e não compara regionalismos.

## Seleção de texto (MI3.2)

Cada participante cumpre 7 tarefas de seleção e tradução de texto, em ordem fixa, começando pela página de teste e seguindo pelos portais da amostra. As tarefas cobrem tipos diferentes de elemento (texto comum, seleção repetida, texto sobre imagem com troca automática, conteúdo incorporado, card e botão), porque é nesses elementos que a seleção tende a falhar.

**Tabela 6.** Tarefas de seleção de texto (MI3.2).

| ID  | Página                   | Tarefa                                            | Elemento                                          | Trecho                                                                                                                                        |
| --- | ------------------------ | ------------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| S1  | Página de teste          | Traduzir uma palavra da F6                        | Texto comum                                       | Palavra "documento"                                                                                                                           |
| S2  | Página de teste          | Traduzir uma frase                                | Texto comum                                       | F8                                                                                                                                       |
| S3  | Página de teste          | Traduzir um parágrafo inteiro                     | Texto comum                                       | Parágrafo F9                                                                                                                                  |
| S4  | CGU (P5)                 | Ler um trecho do carrossel de destaques           | Texto sobre imagem, com troca automática de slide | Primeiro card do carrossel: "Até outubro de 2026, a plataforma registrou o maior número de consultas deste tipo desde o início das medições." |
| S5  | CGU (P5)                 | Ler uma frase do card de rede social              | Conteúdo incorporado (provável *iframe*)          | "A CGU participou da COP31, na Turquia, debatendo o papel dos órgãos de controle no fortalecimento da governança climática."                  |
| S6  | P1 (gov.br)              | Traduzir o texto de um card de categorias         | Card em layout gov.br                             | Item do card "Agricultura e Pecuária"                                                                                                         |
| S7  | P3 (Ministério da Saúde) | Traduzir o texto de um botão de mais informações  | Botão com texto curto                             | "Mais informações na Agência Saúde"                                                                                                           |

O carrossel e o card de rede social mudam com o tempo. Por isso, a equipe captura a página no início de cada sessão, descreve na planilha o trecho efetivamente usado e, se o conteúdo mudar, usa o item equivalente disponível no dia. Com 8 participantes, são 56 tentativas previstas (7 tarefas x 8 participantes).

## Participantes

**Tabela 7.** Participantes do teste de usabilidade.

| Item               | Definição                                                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Quantidade         | No mínimo 8                                                                                                                                                                                              |
| Perfil             | Maiores de 18 anos, usuárias e usuários de Libras, priorizando pessoas surdas. Ouvintes fluentes em Libras são aceitos e reportados separadamente                                                        |
| Recrutamento       | Comunidade surda e pessoas com conhecimento de Libras, como estudantes e professores da UnB                                                                                                              |
| Registro do perfil | Código do participante (P01, P02...), condição auditiva, relação e fluência em Libras, fluência em português autodeclarada (baixa, média ou alta), experiência prévia com o VLibras e dificuldade visual |
| Consentimento      | Termo de consentimento assinado antes do teste, com autorização para a gravação de tela                                                                                                                  |
| Privacidade        | Sem nome nos registros e gravação apenas da tela                                                                                                                                                         |

**Plano B:** se não for possível reunir 8 participantes, o teste é aplicado também a ouvintes fluentes em Libras e, em último caso, aos integrantes da equipe, como prevê o [Escopo](../fase-1/escopo-e-profundidade.md). Os resultados são reportados por perfil, e só os dados de pessoas surdas sustentam conclusões sobre a H1-I e a H2-I.


## Histórico de Versões

| Versão | Data       | Descrição da alteração                                                                              | Autor(a)           | Revisor(a) |
| ------ | ---------- | --------------------------------------------------------------------------------------------------- | ------------------ | ---------- |
| 0.1    | 15/11/2026 | Inserção das frases, dos termos, dos portais, dos roteiros, das tarefas e dos participantes         | Ludmila O. Nunes   |            |
| 0.2    | 15/11/2026 | Roteiro "Rede e cache" (ME3.1) com as 10 frases nas velocidades 0.5x, 1x e 2x                       | Geovane S. Freitas |            |
| 0.3    | 18/11/2026 | Adequação das tarefas de MI1.1 e MI3.2                                                              | Ludmila O. Nunes   |            |
| 0.4    | 18/11/2026 | Correção de inconsistências: cenário T5, trechos S4 e S6, Tabelas 1, 3 e 4, participantes e plano B | Ludmila O. Nunes   |            |