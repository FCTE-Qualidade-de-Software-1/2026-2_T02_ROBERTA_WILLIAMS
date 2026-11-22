---
sidebar_position: 1
sidebar_label: MM3.1 – Tempo de correção
---

# MM3.1: Tempo médio de correção de incompatibilidades

Esta página registra a execução da métrica MM3.1, definida em [Métricas](../../../fase-2/metricas.md), seguindo o protocolo de [Método de avaliação](../../../fase-3/metodo-de-avaliacao.md). Ela segue as três atividades da Fase 4: obter a medida, comparar com o critério e julgar o resultado (Aula A07, slide 20).

> Resultado: tempo médio de **83,0 dias** (mediana de **65 dias**) em 7 *issues* de incompatibilidade, sendo 5 abertas e 2 fechadas. Nível **Ruim** (> 15 dias). A hipótese H3-M **não foi confirmada**. As 2 *issues* fechadas levaram em média 12,5 dias, enquanto as 5 abertas já passam de 100 dias sem resolução.

**Tabela 1.** Identificação da métrica.

| Item           | Registro                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------- |
| Característica | Manutenibilidade (subcaracterística: Modificabilidade)                                      |
| Questão        | Q3-M: Qual é o esforço médio (ou tempo de ciclo no repositório oficial) para atualizar o código e corrigir incompatibilidades geradas por mudanças nas plataformas do Governo Federal ou atualizações de navegadores? |
| Hipótese       | H3-M: Problemas críticos de quebra de funcionamento em navegadores levam em média menos de 7 dias para serem corrigidos e mesclados (*merged*) no repositório oficial do projeto ([Hipóteses](../../../fase-2/hipoteses.md)) |
| Cálculo        | X = Σ(D_fim − D_abertura) / N, com D_fim = data de fechamento ou, se aberta, data da coleta |
| Data da coleta | 21/11/2026                                                                                  |
| Responsável    | Ludmila O. Nunes                                                                            |

## 1. Obter a medida

A coleta foi feita no repositório [`spbgovbr-vlibras/vlibras-web-browsers`](https://github.com/spbgovbr-vlibras/vlibras-web-browsers), na seção de *issues*, que apresentou 12 *issues* (abertas e fechadas). Cada uma foi classificada pelo critério do método: relata falha de funcionamento do widget em navegador, dispositivo, portal ou ambiente específico. Ficaram de fora pedidos de funcionalidade, perguntas, spam, temas de segurança e propostas de melhoria. Para *issues* abertas, o fim é a data da coleta (tempo em aberto). A #11 é um *Pull Request* e não entrou na análise.

**Tabela 2.** Classificação das *issues*.

| Classificação | Quantidade | *Issues*                                                                                    |
| ------------- | ---------: | ------------------------------------------------------------------------------------------- |
| Incluídas (N) |          7 | #1, #5, #6, #8, #9, #10, #13                                                                |
| Excluídas     |          5 | #2 e #12 (funcionalidade ou pergunta), #3 (segurança), #4 (proposta de melhoria), #7 (spam) |

**Tabela 3.** Tempo de cada *issue* incluída.

| Nº  | Título                                                          | Estado  | Abertura   | Fim usado  | Dias | Ambiente afetado                              |
| --- | --------------------------------------------------------------- | ------- | ---------- | ---------- | ---: | --------------------------------------------- |
| #1  | Botão de fechar widget não funciona após abrir pela segunda vez | Fechada | 18/04/2024 | 09/05/2024 |   21 | Chrome e Firefox                              |
| #5  | Ícones de mão, antes de iniciar o sistema, não funcionam        | Aberta  | 08/05/2026 | 21/11/2026 |  197 | Chromium 148 e Firefox 150                    |
| #6  | Erro intermitente ao carregar assets (ERR_TOO_MANY_REDIRECTS)   | Aberta  | 09/05/2026 | 21/11/2026 |  196 | Chrome 146 (Linux), vários sites              |
| #8  | Widget parou de funcionar após a última atualização             | Aberta  | 24/08/2026 | 21/11/2026 |   89 | Sites que usam o plugin (erro de CORS)        |
| #9  | VLibras soletrando todas as palavras                            | Fechada | 03/09/2026 | 07/09/2026 |    4 | Sites da UFG (desktop, smartphone e extensão) |
| #10 | Painel não exibe controles nem opção de fechar no iPhone        | Aberta  | 17/09/2026 | 21/11/2026 |   65 | iPhone, iOS, Safari; vários portais           |
| #13 | VLibras não funciona em conteúdos dentro de *iframes*           | Aberta  | 12/11/2026 | 21/11/2026 |    9 | Páginas com *iframe*                          |

Fonte: elaborado pelos autores, a partir do [GitHub](https://github.com/spbgovbr-vlibras/vlibras-web-browsers/issues).

**Tabela 4.** Estatísticas.

| Indicador             |      Valor |
| --------------------- | ---------: |
| N                     |          7 |
| Abertas / fechadas    |      5 / 2 |
| Média (X)             |  83,0 dias |
| Mediana               |    65 dias |
| Maior tempo           |   197 dias |
| Média só das abertas  | 111,2 dias |
| Média só das fechadas |  12,5 dias |

Fonte: elaborado pelos autores.

**Medida obtida:** X = Σ(D_fim − D_abertura) / N = 581 / 7 = **83,0 dias**.

## 2. Comparar com o critério

**Tabela 5.** Comparação com os níveis de pontuação da MM3.1.

| Nível              | Faixa ([Pontuação e critérios](../../../fase-2/pontuacao-e-criterios.md)) | Resultado     |
| ------------------ | ------------------------------------------------------------------- | ------------- |
| Satisfatório/Ideal | ≤ 7 dias                                                            |               |
| Aceitável/Regular  | 8 a 15 dias                                                         |               |
| Ruim               | > 15 dias                                                           | **83,0 dias** |

Fonte: elaborado pelos autores.

**Tabela 6.** Sensibilidade do resultado.

| Cenário                                                   |   N | X (dias) | Mediana (dias) | Nível             |
| --------------------------------------------------------- | --: | -------: | -------------: | ----------------- |
| Resultado oficial                                         |   7 |     83,0 |             65 | Ruim              |
| Só *issues* fechadas                                      |   2 |     12,5 |           12,5 | Aceitável/Regular |
| Só *issues* abertas                                       |   5 |    111,2 |             89 | Ruim              |
| Incluindo a #4 (proposta de melhoria)                     |   8 |    108,8 |             77 | Ruim              |
| #10 contada até a correção no código (23/09/2026, 6 dias) |   7 |     74,6 |             21 | Ruim              |

Fonte: elaborado pelos autores.

O nível só muda se forem consideradas as *issues* fechadas isoladamente, o que descarta justamente os problemas sem resolução.

## 3. Julgar o resultado

1. **Tempo em aberto.** Cinco das sete *issues* seguem abertas. A #5 e a #6 estão abertas há cerca de 197 e 196 dias, e a #8 há 89 dias.
2. **Tempo das fechadas.** As duas fechadas levaram 4 dias (#9) e 21 dias (#1), com média de 12,5 dias. Isoladas, ficariam no nível Aceitável/Regular. O que puxa a métrica para Ruim são as *issues* que não chegam a ser resolvidas.
3. **Tipo de problema.** Os relatos cobrem carregamento de recursos e CORS (#6 e #8), navegador e dispositivo específicos (#5 e #10, no Safari do iOS), conteúdo dentro de *iframes* (#13) e comportamento em portais (#9). Alguns se relacionam com tarefas e ambientes desta avaliação: a #13 com a tarefa S5 da MI3.2 (card de rede social) e a #10 com o ambiente ENV-04 da MF1.1 (Safari no iOS). Através da S5 da MI3.2 foi identificado o mesmo comportamento reportado na *issue* #13, em que o widget não lê conteúdo incorporado (*iframes*)
4. **Resposta da equipe do projeto.** A #10 recebeu resposta de um contribuidor em 23/09/2026, seis dias após a abertura, com a correção feita no código (troca do `mask-image` nos ícones). O lançamento está previsto para a v7.13.0, e a *issue* segue aberta. O mesmo contribuidor afirma que o projeto está em *stand-by*.
5. **Hipótese H3-M: não confirmada.** Só a #9 (4 dias) cumpriu o limite de 7 dias, a #1 levou 21 dias, e as demais seguem abertas. Mesmo contando a #10 até a correção no código (6 dias), a média fica em 74,6 dias.

**Julgamento:** pela fórmula definida na Fase 2, a MM3.1 fica no nível **Ruim** (X = 83,0 dias, mediana de 65 dias). Quando a equipe responde, o tempo é razoável (4 a 21 dias), mas a maioria das incompatibilidades relatadas fica meses sem fechamento, e correções feitas no código demoram a ser publicadas. Uma melhoria viável é triar as *issues* de incompatibilidade com um rótulo e um prazo de resposta, e publicar as correções já prontas em versões menores.

## Evidências

![Lista de issues do repositório](../../dados-brutos/MM3.1/prints/issues.png)

**Figura 1.** Lista de *issues* do repositório na data da coleta. Fonte: elaborado pelos autores.

Os dados completos estão em [Dados brutos da MM3.1](../../dados-brutos/MM3.1/README.md):

- `issues.json`: exportação do repositório;
- [Tabela de medições](./medicoes.md): planilha de classificação e cálculo;
- `prints/`: capturas das *issues*.

## Limitações

- **Amostra pequena.** N = 7, com apenas 2 *issues* fechadas. O resultado é descritivo e não permite generalizar.
- **Issues abertas.** O tempo em aberto subestima o tempo real de resolução, e a média mistura tempo de espera com tempo de correção. Por isso, são reportadas também a mediana e as médias separadas.
- **Classificação manual.** A exclusão da #4 (proposta de melhoria) e a inclusão da #13 são discutíveis, e a Tabela 6 mostra o efeito da #4.
- **Correção no código x publicação.** A #10 tem correção anunciada no código, mas a *issue* segue aberta, por isso ela foi mantida como aberta.
- **Espelho do GitLab.** A #12 sugere que o desenvolvimento principal ocorre no GitLab do LAViD, e o GitHub funciona como espelho. O tempo de correção real pode estar registrado lá.

## Referências

> RAMOS, Cristiane Soares. **Aula A07: Processo de Avaliação de Produto**. Slides da disciplina Qualidade de Software 1. Brasília: Universidade de Brasília, 2026.

> ISO/IEC. **ISO/IEC 25010:2023**: systems and software engineering: systems and software quality requirements and evaluation (SQuaRE): product quality model. 2. ed. Geneva: ISO/IEC, 2023.

## Histórico de Versões

| Versão | Data       | Descrição da alteração                        | Autor(a)         | Revisor(a) |
| ------ | ---------- | --------------------------------------------- | ---------------- | ---------- |
| 0.1    | 21/11/2026 | Registro da execução e do julgamento da MM3.1 | Ludmila O. Nunes |            |