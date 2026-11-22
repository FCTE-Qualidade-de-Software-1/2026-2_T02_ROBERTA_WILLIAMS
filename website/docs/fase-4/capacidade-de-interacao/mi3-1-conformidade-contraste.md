---
sidebar_position: 3
sidebar_label: MI3.1 - Contraste
---

# MI3.1: Taxa de conformidade de contraste

Esta página registra a execução da métrica MI3.1, definida em [Métricas](../../fase-2/metricas.md), seguindo o protocolo de [Método de avaliação](../../fase-3/metodo-de-avaliacao.md). Ela segue as três atividades da Fase 4: obter a medida, comparar com o critério e julgar o resultado (Aula A07, slide 20).

> Resultado: **100%** de conformidade de contraste nos registros reportados pelo Lighthouse (**8 de 8** ocorrências aprovadas na regra `color-contrast`, sem elementos reprovados listados), em página de teste simples sem estilos próprios (`pagina-teste-crua.html`). Nível **Satisfatório/Ideal** na verificação automatizada de contraste textual (WCAG 1.4.3). Como o Lighthouse consolida a aprovação por execução e avalia apenas nós textuais visíveis, o resultado não substitui a verificação manual de elementos gráficos, ícones sem texto e fundos reais de portais.

**Tabela 1.** Identificação da métrica.

| Item           | Registro                                                                                                                                                                                             |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Característica | Capacidade de Interação                                                                                                                                                                              |
| Questão        | Q3-I: Qual é a eficácia da seleção de textos e a conformidade de contraste visual dos elementos do widget quando sobrepostos aos diferentes layouts das páginas do Governo Federal? Esta métrica responde à parte do contraste visual. A seleção de textos é tratada na MI3.2. |
| Hipótese       | H3-I: O widget mantém conformidade de contraste visual (nível AA da WCAG) em pelo menos 90% dos elementos de sua interface própria, avaliados nos portais governamentais da amostra. ([Hipóteses](../../fase-2/hipoteses.md))           |
| Cálculo        | $X = (A / B) \times 100$, com $A$ = elementos aprovados na regra de contraste reportados pelo Lighthouse e $B$ = total de elementos relacionados a contraste reportados pelo Lighthouse            |
| Data da coleta | 22/11/2026 (14:38 a 17:43 UTC-3)                                                                                                                                                                     |
| Responsáveis   | Ludmila O. Nunes                                                                                                                                                                                     |

## 1. Obter a medida

### Ambiente e execução

A coleta automatizada da MI3.1 foi realizada em 22/11/2026 com a ferramenta **Lighthouse 13.5.0** (com motor **axe-core 4.13.0** embutido), executada em modo *snapshot* na categoria Acessibilidade no navegador Chrome 157.0.0.0 (Windows NT 10.0, 64 bits), formato *desktop* sem emulação móvel (`screenEmulation.disabled: true`), no dispositivo DI6.

O widget VLibras (versão **7.12.2**) foi carregado na página de teste `http://localhost:8000/pagina-teste-crua.html`, construída sem estilos próprios para isolar o comportamento visual padrão do componente. Foram realizadas **8 execuções** (L1 a L8), cobrindo as seis telas previstas no protocolo (Tradutor, Guia Rápido, Configurações, Dicionário, Sobre e Feedback), com divisão do Guia Rápido em dois passos (L2 e L3) e inclusão da Página inicial com os controles do player visíveis (L8).

### Extração dos dados de contraste

No registro completo dos dados brutos (Tabela 4 de `dados-brutos`), foram identificados **53 registros** (`A-001` a `A-053`) distribuídos entre as regras avaliadas pelo Lighthouse. Filtrando estritamente os itens marcados com **`Entra MI3.1? = Sim`**, isto é, os elementos reportados pelo Lighthouse na categoria **Contraste** (`color-contrast`), obtêm-se **8 registros** (`A-002`, `A-010`, `A-017`, `A-025`, `A-028`, `A-038`, `A-041` e `A-050`), correspondentes a uma ocorrência consolidada ("Página inteira") por execução.

**Tabela 2.** Elementos reportados pelo Lighthouse na categoria Contraste (`Entra MI3.1? = Sim`).

| Id        | Execução    | Tela                  | Elemento reportado                | Regra            | Resultado  |
| --------- | ----------- | --------------------- | --------------------------------- | ---------------- | ---------- |
| A-002     | L1 (17:38Z) | Tradutor              | Página inteira (`color-contrast`) | `color-contrast` | Aprovado   |
| A-010     | L2 (17:42Z) | Guia Rápido (passo 1) | Página inteira (`color-contrast`) | `color-contrast` | Aprovado   |
| A-017     | L3 (17:43Z) | Guia Rápido (passo 2) | Página inteira (`color-contrast`) | `color-contrast` | Aprovado   |
| A-025     | L4 (17:43Z) | Configurações         | Página inteira (`color-contrast`) | `color-contrast` | Aprovado   |
| A-028     | L5 (17:43Z) | Dicionário            | Página inteira (`color-contrast`) | `color-contrast` | Aprovado   |
| A-038     | L6 (17:44Z) | Sobre                 | Página inteira (`color-contrast`) | `color-contrast` | Aprovado   |
| A-041     | L7 (18:55Z) | Feedback              | Página inteira (`color-contrast`) | `color-contrast` | Aprovado   |
| A-050     | L8 (20:43Z) | Página inicial        | Página inteira (`color-contrast`) | `color-contrast` | Aprovado   |
| **Total** |             |                       | **8 registros**                   |                  | **8 de 8** |

Fonte: elaborado pelos autores, a partir dos relatórios JSON do Lighthouse.

**Tabela 3.** Consolidado por tela/estado avaliado.

| Tela / Estado avaliado | Execução | Pontuação geral de acessibilidade | Total reportado em contraste ($B$) | Aprovados ($A$) | Reprovados | Taxa de conformidade |
| ---------------------- | -------- | --------------------------------: | ---------------------------------: | --------------: | ---------: | -------------------: |
| Tradutor               | L1       |                              0,96 |                                  1 |               1 |          0 |                 100% |
| Guia Rápido (passo 1)  | L2       |                              0,89 |                                  1 |               1 |          0 |                 100% |
| Guia Rápido (passo 2)  | L3       |                              0,89 |                                  1 |               1 |          0 |                 100% |
| Configurações          | L4       |                              0,82 |                                  1 |               1 |          0 |                 100% |
| Dicionário             | L5       |                              0,98 |                                  1 |               1 |          0 |                 100% |
| Sobre                  | L6       |                              0,93 |                                  1 |               1 |          0 |                 100% |
| Feedback               | L7       |                              0,96 |                                  1 |               1 |          0 |                 100% |
| Página inicial         | L8       |                              0,83 |                                  1 |               1 |          0 |                 100% |
| **Total**              | **8**    |                         **0,91*** |                              **8** |           **8** |      **0** |             **100%** |

\*Média aritmética da pontuação geral de acessibilidade do Lighthouse nas 8 execuções (inclui regras de nome acessível, teclado e semântica, além de contraste). Fonte: elaborado pelos autores.

**Medida obtida:** $X = (A / B) \times 100 = (8 / 8) \times 100 =$ **100%**.

## 2. Comparar com o critério

**Tabela 4.** Comparação com os níveis de pontuação da MI3.1.

| Nível                      | Faixa ([Pontuação e critérios](../../fase-2/pontuacao-e-criterios.md)) | Resultado |
| -------------------------- | ---------------------------------------------------------------------- | --------- |
| Ruim (1 a 2)               | < 70%                                                                  |           |
| Aceitável/Regular (3)      | 70% a 89%                                                              |           |
| Satisfatório/Ideal (4 a 5) | ≥ 90%                                                                  | **100%**  |

Fonte: elaborado pelos autores.

## 3. Julgar o resultado

1. **Conformidade textual integral na auditoria automatizada.** Em todas as 8 execuções (`L1` a `L8`), a regra `color-contrast` retornou `score: 1` e lista vazia de falhas (`details.items: []`), totalizando **8 de 8** ocorrências aprovadas ($X = 100\%$). Todos os elementos textuais visíveis renderizados no widget (incluindo textos que reprovaram em outras categorias, como botões e links sem nome acessível adequado) atenderam aos mínimos do critério WCAG 1.4.3 (4,5:1 para texto normal e 3:1 para texto grande).
2. **Quedas na pontuação geral do Lighthouse não decorrem de contraste.** Embora a pontuação geral de acessibilidade tenha variado entre `0,82` (L4 – Configurações) e `0,98` (L5 – Dicionário), nenhuma penalização veio de contraste. As reprovações concentraram-se em **nome acessível** (`aria-dialog-name`, `aria-progressbar-name`, `aria-tooltip-name`, `button-name`, `link-name` e `label-content-name-mismatch`), **rótulos de formulário** (`label`), **navegação por teclado** (`tabindex > 0`) e **semântica** (`landmark-one-main`).
3. **O denominador reflete a granularidade do relatório do Lighthouse.** Como o Lighthouse só enumera elementos individualmente quando há reprovação e consolida a aprovação como um único registro de página inteira por execução, o denominador $B = 8$ corresponde exatamente ao total de itens de contraste reportados pela ferramenta nos 8 *snapshots*.
4. **Hipótese H3-I: refutada no escopo automatizado em página limpa, mas dependente de validação complementar.** Nos testes automatizados com o Lighthouse sobre a página de teste sem estilos próprios, não foi identificada nenhuma falha de contraste textual (0 reprovações em 8 execuções). Contudo, como o *axe-core* não avalia contraste não textual (ícones e controles sem texto, WCAG 1.4.11) e o widget não foi submetido nesta etapa aos fundos heterogêneos dos portais governamentais, a hipótese não pode ser descartada de forma definitiva sem a inspeção manual complementar.

**Julgamento:** pela fórmula aplicada estritamente sobre os elementos relacionados a contraste reportados pelo Lighthouse, a MI3.1 atinge o nível **Satisfatório/Ideal** ($X = 100\%$). O widget apresenta bom contraste nos rótulos e textos internos em seu tema padrão, mas recomenda-se complementar a avaliação com verificação manual de contraste de ícones/componentes gráficos (WCAG 1.4.11), modo escuro e sobreposição em portais reais.

## Evidências

Os dados brutos completos, a identificação da coleta e os desvios de protocolo estão registrados em [Dados brutos da MI3.1 (Lighthouse)](./../dados-brutos/MI3.1/tabela/coleta.md):

- `lighthouse-20261122T143826.json` a `lighthouse-20261122T174341.json`: relatórios JSON exportados do Lighthouse para as execuções L1 a L8;
- Em `dados-brutos/MI3.1/prints`, são encontradas as capturas de tela de todas as 8 telas analisadas
- [Tabela 4](../dados-brutos/MI3.1/tabela/coleta.md) dos dados brutos: consolidação dos 53 registros de auditoria (`A-001` a `A-053`) e filtragem dos 8 itens pertencentes à MI3.1.

## Limitações

- **Granularidade do denominador ($B = 8$).** O Lighthouse não reporta o número absoluto de nós textuais aprovados quando `score: 1`, registrando apenas a aprovação consolidada por execução. Assim, cada ponto percentual equivale a 12,5% (1 execução) e o denominador representa execuções/telas reportadas na regra `color-contrast`, não nós DOM individuais.
- **Escopo restrito a contraste de texto (WCAG 1.4.3).** O *axe-core* 4.13.0 verifica apenas texto visível, deixando de fora ícones sem texto, botões gráficos (como os controles de 36×36 px na Página inicial e de 32×32 px em Configurações), barras de progresso e bordas de controles (WCAG 1.4.11).
- **Ambiente isolado sem estilos externos.** Todos os *snapshots* foram executados em `pagina-teste-crua.html` (fundo simples, sem CSS de portais), não capturando eventuais interferências de folhas de estilo ou fundos complexos de sites do Governo Federal.
- **Estado visual único.** Não foi avaliado separadamente o contraste após ativação do modo escuro (`Tema escuro`) nem variações de opacidade disponíveis na tela de Configurações.

## Participação na coleta

| Integrante       | Contribuição                                                                  |
| ---------------- | ----------------------------------------------------------------------------- |
| Ludmila O. Nunes | Execução dos 8 *snapshots* no Lighthouse, extração dos JSONs e análise MI3.1. |

## Referências

> RAMOS, Cristiane Soares. **Aula A07: Processo de Avaliação de Produto**. Slides da disciplina Qualidade de Software 1. Brasília: Universidade de Brasília, 2026.

> ISO/IEC. **ISO/IEC 25010:2023**: systems and software engineering: systems and software quality requirements and evaluation (SQuaRE): product quality model. 2. ed. Geneva: ISO/IEC, 2023.

## Histórico de Versões

| Versão | Data       | Descrição da alteração                        | Autor(a)         | Revisor(a) |
| ------ | ---------- | --------------------------------------------- | ---------------- | ---------- |
| 0.1    | 22/11/2026 | Registro da execução e do julgamento da MI3.1 | Ludmila O. Nunes |            |