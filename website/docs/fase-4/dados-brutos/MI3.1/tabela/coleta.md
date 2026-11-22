---
unlisted: true
---

# MI3.1: Dados brutos (Lighthouse)

## Identificação da coleta

**Tabela 1.** Identificação da coleta de contraste e acessibilidade com o Lighthouse.

| Campo                 | Valor                                                                          |
| --------------------- | ------------------------------------------------------------------------------ |
| Data                  | 22/11/2026                                                                     |
| Horário das execuções | 14:38 a 17:43 (UTC-3)                                                          |
| Ferramenta            | Lighthouse 13.5.0, com axe-core 4.13.0 embutido                                |
| Modo de coleta        | *Snapshot* (um por tela)                                                       |
| Categoria executada   | Acessibilidade                                                                 |
| Formato               | Desktop, sem emulação de tela móvel (`screenEmulation.disabled: true`)         |
| Navegador e versão    | Chrome 157.0.0.0, Windows NT 10.0 (64 bits)                                    |
| Página de teste       | `http://localhost:8000/pagina-teste-crua.html` (simples, sem estilos próprios) |
| Widget                | VLibras, versão 7.12.2                                                         |
| Dispositivo           | DI6                                                                            |
| Responsável           | Ludmila O. Nunes                                                               |
| Relatórios            | JSON exportado do Lighthouse, um por execução (Tabela 2)                       |

## Execuções

Cada execução foi um *snapshot* do widget com uma tela aberta. As execuções estão numeradas pela ordem de `fetchTime`.

**Tabela 2.** Execuções do Lighthouse.

| Execução | Horário (UTC) | Tela                  | Arquivo                           | Pontuação de acessibilidade |
| -------- | ------------- | --------------------- | --------------------------------- | --------------------------: |
| L1       | 17:38:26      | Tradutor              | `lighthouse-20261122T143826.json` |                        0,96 |
| L2       | 17:42:52      | Guia Rápido (passo 1) | `lighthouse-20261122T144252.json` |                        0,89 |
| L3       | 17:43:14      | Guia Rápido (passo 2) | `lighthouse-20261122T144314.json` |                        0,89 |
| L4       | 17:43:38      | Configurações         | `lighthouse-20261122T144338.json` |                        0,82 |
| L5       | 17:43:51      | Dicionário            | `lighthouse-20261122T144351.json` |                        0,98 |
| L6       | 17:44:11      | Sobre                 | `lighthouse-20261122T144411.json` |                        0,93 |
| L7       | 18:55:07      | Feedback              | `lighthouse-20261122T155507.json` |                        0,96 |
| L8       | 20:43:41      | Página inicial        | `lighthouse-20261122T174341.json` |                        0,83 |

Fonte: elaborado pelos autores, a partir dos relatórios do Lighthouse.

## Regras principais por execução

**Tabela 3.** Resultado das regras mais relevantes em cada execução. "N/A" indica que a regra não se aplicou à tela.

| Execução | Contraste (`color-contrast`) | `landmark-one-main` | `tabindex` | `button-name` | `label`   | `link-name` | `aria-dialog-name` | `aria-tooltip-name` | `aria-progressbar-name` |
| -------- | ---------------------------- | ------------------- | ---------- | ------------- | --------- | ----------- | ------------------ | ------------------- | ----------------------- |
| L1       | Aprovado                     | Aprovado            | Aprovado   | Aprovado      | Aprovado  | N/A         | Reprovado          | N/A                 | N/A                     |
| L2       | Aprovado                     | Reprovado           | Reprovado  | Aprovado      | N/A       | N/A         | N/A                | Aprovado            | Reprovado               |
| L3       | Aprovado                     | Reprovado           | Reprovado  | Aprovado      | N/A       | N/A         | N/A                | Aprovado            | Reprovado               |
| L4       | Aprovado                     | Aprovado            | Aprovado   | Reprovado     | Reprovado | N/A         | Reprovado          | Reprovado           | N/A                     |
| L5       | Aprovado                     | Reprovado           | Aprovado   | Aprovado      | Aprovado  | N/A         | N/A                | N/A                 | N/A                     |
| L6       | Aprovado                     | Reprovado           | Aprovado   | Aprovado      | N/A       | Reprovado   | N/A                | N/A                 | N/A                     |
| L7       | Aprovado                     | Aprovado            | Aprovado   | Aprovado      | N/A       | N/A         | Reprovado          | N/A                 | N/A                     |
| L8       | Aprovado                     | Reprovado           | Aprovado   | Reprovado     | N/A       | N/A         | N/A                | Reprovado           | Reprovado               |

Fonte: elaborado pelos autores, a partir dos relatórios do Lighthouse.

## Registro por elemento

Legenda das categorias: Semântica/landmarks, Nome acessível, Contraste, Teclado e Rótulo de formulário. A coluna "Entra MI3.1?" indica se o item diz respeito a contraste de cores.

**Tabela 4.** Registro completo da coleta.

| Id    | Execução    | Tela                  | Elemento                                               | Categoria                                    | Resultado     | Entra MI3.1? |
| ----- | ----------- | --------------------- | ------------------------------------------------------ | -------------------------------------------- | ------------- | ------------ |
| A-001 | L1 (17:38Z) | Tradutor              | div[role=dialog] "Tradutor" (aria-dialog-name)         | Nome acessível                               | Reprovado     | Não          |
| A-002 | L1 (17:38Z) | Tradutor              | Página inteira (color-contrast)                        | Contraste                                    | Aprovado      | Sim          |
| A-003 | L1 (17:38Z) | Tradutor              | textarea#translator-text + label (label)               | Rótulo de formulário                         | Aprovado      | Não          |
| A-004 | L1 (17:38Z) | Tradutor              | html (landmark-one-main)                               | Semântica/landmarks                          | Aprovado      | Não          |
| A-005 | L1 (17:38Z) | Tradutor              | Botões (button-name) e tabindex                        | Nome acessível / Teclado                     | Aprovado      | Não          |
| A-006 | L2 (17:42Z) | Guia Rápido (passo 1) | div[role=progressbar], 22% (aria-progressbar-name)     | Nome acessível                               | Reprovado     | Não          |
| A-007 | L2 (17:42Z) | Guia Rápido (passo 1) | button "Fechar guia", tabindex="1"                     | Teclado                                      | Reprovado     | Não          |
| A-008 | L2 (17:42Z) | Guia Rápido (passo 1) | button "Avançar", tabindex="2"                         | Teclado                                      | Reprovado     | Não          |
| A-009 | L2 (17:42Z) | Guia Rápido (passo 1) | html (landmark-one-main)                               | Semântica/landmarks                          | Reprovado     | Não          |
| A-010 | L2 (17:42Z) | Guia Rápido (passo 1) | Página inteira (color-contrast)                        | Contraste                                    | Aprovado      | Sim          |
| A-011 | L2 (17:42Z) | Guia Rápido (passo 1) | button-name                                            | Nome acessível                               | Aprovado      | Não          |
| A-012 | L2 (17:42Z) | Guia Rápido (passo 1) | label, link-name, image-alt, aria-dialog-name          | Rótulo / Nome acessível                      | Não se aplica | Não          |
| A-013 | L3 (17:43Z) | Guia Rápido (passo 2) | div[role=progressbar], 60% (aria-progressbar-name)     | Nome acessível                               | Reprovado     | Não          |
| A-014 | L3 (17:43Z) | Guia Rápido (passo 2) | button "Fechar guia", tabindex="1"                     | Teclado                                      | Reprovado     | Não          |
| A-015 | L3 (17:43Z) | Guia Rápido (passo 2) | button "Avançar", tabindex="2"                         | Teclado                                      | Reprovado     | Não          |
| A-016 | L3 (17:43Z) | Guia Rápido (passo 2) | html (landmark-one-main)                               | Semântica/landmarks                          | Reprovado     | Não          |
| A-017 | L3 (17:43Z) | Guia Rápido (passo 2) | Página inteira (color-contrast)                        | Contraste                                    | Aprovado      | Sim          |
| A-018 | L3 (17:43Z) | Guia Rápido (passo 2) | button-name                                            | Nome acessível                               | Aprovado      | Não          |
| A-019 | L3 (17:43Z) | Guia Rápido (passo 2) | label, link-name, image-alt, aria-dialog-name          | Rótulo / Nome acessível                      | Não se aplica | Não          |
| A-020 | L4 (17:43Z) | Configurações         | div[role=dialog] "Configurações" (aria-dialog-name)    | Nome acessível                               | Reprovado     | Não          |
| A-021 | L4 (17:43Z) | Configurações         | div[role=tooltip] 32×32 (aria-tooltip-name)            | Nome acessível                               | Reprovado     | Não          |
| A-022 | L4 (17:43Z) | Configurações         | button 32×32 sem nome, dentro do tooltip (button-name) | Nome acessível                               | Reprovado     | Não          |
| A-023 | L4 (17:43Z) | Configurações         | input.toggle (checkbox "Tema escuro") (label)          | Rótulo de formulário                         | Reprovado     | Não          |
| A-024 | L4 (17:43Z) | Configurações         | input.range-slider ("Opacidade") (label)               | Rótulo de formulário                         | Reprovado     | Não          |
| A-025 | L4 (17:43Z) | Configurações         | Página inteira (color-contrast)                        | Contraste                                    | Aprovado      | Sim          |
| A-026 | L4 (17:43Z) | Configurações         | landmark-one-main, heading-order, tabindex, image-alt  | Semântica / Teclado / Nome acessível         | Aprovado      | Não          |
| A-027 | L5 (17:43Z) | Dicionário            | html (landmark-one-main)                               | Semântica/landmarks                          | Reprovado     | Não          |
| A-028 | L5 (17:43Z) | Dicionário            | Página inteira (color-contrast)                        | Contraste                                    | Aprovado      | Sim          |
| A-029 | L5 (17:43Z) | Dicionário            | input de busca (label)                                 | Rótulo de formulário                         | Aprovado      | Não          |
| A-030 | L5 (17:43Z) | Dicionário            | h3 (heading-order), list, listitem                     | Semântica/landmarks                          | Aprovado      | Não          |
| A-031 | L5 (17:43Z) | Dicionário            | button-name, tabindex                                  | Nome acessível / Teclado                     | Aprovado      | Não          |
| A-032 | L6 (17:44Z) | Sobre                 | a "Site VLibras" (link-name)                           | Nome acessível                               | Reprovado     | Não          |
| A-033 | L6 (17:44Z) | Sobre                 | a "Facebook" (link-name)                               | Nome acessível                               | Reprovado     | Não          |
| A-034 | L6 (17:44Z) | Sobre                 | a "Instagram" (link-name)                              | Nome acessível                               | Reprovado     | Não          |
| A-035 | L6 (17:44Z) | Sobre                 | a "Twitter/X" (link-name)                              | Nome acessível                               | Reprovado     | Não          |
| A-036 | L6 (17:44Z) | Sobre                 | a "YouTube" (link-name)                                | Nome acessível                               | Reprovado     | Não          |
| A-037 | L6 (17:44Z) | Sobre                 | html (landmark-one-main)                               | Semântica/landmarks                          | Reprovado     | Não          |
| A-038 | L6 (17:44Z) | Sobre                 | Página inteira (color-contrast)                        | Contraste                                    | Aprovado      | Sim          |
| A-039 | L6 (17:44Z) | Sobre                 | image-alt, button-name, heading-order, tabindex        | Nome acessível / Semântica / Teclado         | Aprovado      | Não          |
| A-040 | L7 (18:55Z) | Feedback              | div[role=dialog] "Feedback" (aria-dialog-name)         | Nome acessível                               | Reprovado     | Não          |
| A-041 | L7 (18:55Z) | Feedback              | Página inteira (color-contrast)                        | Contraste                                    | Aprovado      | Sim          |
| A-042 | L7 (18:55Z) | Feedback              | landmark-one-main, button-name, tabindex               | Semântica / Nome acessível / Teclado         | Aprovado      | Não          |
| A-043 | L8 (20:43Z) | Página inicial        | div[role=progressbar], 47% (aria-progressbar-name)     | Nome acessível                               | Reprovado     | Não          |
| A-044 | L8 (20:43Z) | Página inicial        | div[role=tooltip] 36×36, emoções (aria-tooltip-name)   | Nome acessível                               | Reprovado     | Não          |
| A-045 | L8 (20:43Z) | Página inicial        | div[role=tooltip] 36×36, config. (aria-tooltip-name)   | Nome acessível                               | Reprovado     | Não          |
| A-046 | L8 (20:43Z) | Página inicial        | button 36×36 sem nome, emoções (button-name)           | Nome acessível                               | Reprovado     | Não          |
| A-047 | L8 (20:43Z) | Página inicial        | button 36×36 sem nome, config. (button-name)           | Nome acessível                               | Reprovado     | Não          |
| A-048 | L8 (20:43Z) | Página inicial        | button "2.5 x" / "Alterar velocidade" (label-mismatch) | Nome acessível                               | Reprovado     | Não          |
| A-049 | L8 (20:43Z) | Página inicial        | html (landmark-one-main)                               | Semântica/landmarks                          | Reprovado     | Não          |
| A-050 | L8 (20:43Z) | Página inicial        | Página inteira (color-contrast)                        | Contraste                                    | Aprovado      | Sim          |
| A-051 | L8 (20:43Z) | Página inicial        | Regras ARIA (10 auditorias)                            | ARIA                                         | Aprovado      | Não          |
| A-052 | L8 (20:43Z) | Página inicial        | document-title, html-lang, viewport, tabindex, target  | Semântica / Idioma / Teclado / Boas práticas | Aprovado      | Não          |
| A-053 | L8 (20:43Z) | Página inicial        | Demais regras (42 auditorias)                          | Rótulo / Nome acessível / Semântica          | Não se aplica | Não          |

Fonte: elaborado pelos autores, a partir dos relatórios do Lighthouse.

## Cálculo

O Lighthouse trata a auditoria `color-contrast` de forma binária por execução (`score: 1` quando não há falhas) e detalha individualmente no JSON apenas os elementos reprovados. Quando todos os nós textuais avaliados passam na verificação, o relatório registra a aprovação da página inteira sem enumerar cada elemento aprovado.

A regra é executada pelo motor *axe-core* e avalia exclusivamente **elementos que contêm texto visível**, conforme o critério de sucesso 1.4.3 das WCAG 2.1 (razão de contraste mínima de 4,5:1 para texto normal e 3:1 para texto grande). Elementos não textuais, como ícones sem texto, barras de progresso (`progressbar`), *tooltips* vazios ou componentes gráficos, não são avaliados por essa regra. Consequentemente, os elementos reprovados em outras auditorias na Tabela 4 que possuíam texto visível (como os botões `"Fechar guia"` e `"Avançar"` em L2/L3, os links em L6 e o botão `"2.5 x"` em L8) foram aprovados no contraste, enquanto os elementos puramente gráficos ou sem texto ficaram fora do escopo da `color-contrast`.

Como a ferramenta consolida a aprovação por execução (tela/estado avaliado) quando não há falhas listadas, a taxa de conformidade é calculada diretamente sobre o total de execuções avaliadas na auditoria `color-contrast` (Tabela 5).

**Tabela 5.** Contraste por execução.

| Indicador                                   |    Valor |
| ------------------------------------------- | -------: |
| Execuções com a regra de contraste avaliada |        8 |
| Execuções aprovadas                         |        8 |
| Execuções reprovadas                        |        0 |
| Elementos reprovados listados               |        0 |
| Taxa de execuções aprovadas                 | **100%** |

Fonte: elaborado pelos autores, a partir dos relatórios do Lighthouse.

## Desvios do protocolo

Durante a coleta dos dados desta etapa, ocorreram os seguintes desvios em relação ao protocolo previsto para a MI3.1:

- **Granularidade do registro de elementos aprovados no Lighthouse:** o protocolo previa registrar individualmente os elementos aprovados e reprovados na regra de contraste. Como o Lighthouse não enumera os elementos aprovados (detalhando apenas os reprovados em `details.items` e retornando lista vazia quando há aprovação) e não foi realizada contagem complementar externa nesta coleta, adotou-se estritamente o resultado consolidado reportado pela ferramenta por execução (aprovação da página inteira, sem elementos reprovados listados) para o cômputo da métrica.
- **Escopo restrito a texto na verificação automatizada:** o *axe-core* embutido no Lighthouse verifica apenas contraste de texto (WCAG 1.4.3), não cobrindo contraste de ícones, botões sem rótulo textual e componentes gráficos (WCAG 1.4.11), que dependem da inspeção manual complementar prevista no protocolo.
- **Execuções adicionais por estados de tela e controles:** além das seis telas principais listadas no protocolo (Tradutor, Dicionário, Configurações, Feedback, Guia Rápido e Sobre), foram gerados dois registros distintos para o Guia Rápido (passos 1 e 2, em L2 e L3) e uma captura específica para a página inicial com os controles do player visíveis (L8), totalizando 8 execuções.