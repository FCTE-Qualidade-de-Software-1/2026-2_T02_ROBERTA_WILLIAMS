---
sidebar_position: 6
sidebar_label: MF1.1 — Adaptabilidade a navegadores
---

# MF1.1: Adaptabilidade a Navegadores

Esta página apresenta o resultado da métrica **MF1.1**, definida na [Fase 2](../../fase-2/metricas.md#mf11-adaptabilidade-a-navegadores), conforme o [método de avaliação](../../fase-3/metodo-de-avaliacao.md#mf11-adaptabilidade-a-navegadores). A medição verifica a compatibilidade funcional do widget em navegadores e plataformas diferentes.

## Identificação da medição

| Item | Descrição |
| ---- | --------- |
| **Métrica** | MF1.1 — Adaptabilidade a Navegadores |
| **Característica** | Flexibilidade |
| **Questão relacionada** | Q1-F — Adaptabilidade entre Multiplataformas |
| **Hipótese relacionada** | H1-F — O widget apresenta 95% de compatibilidade funcional nos navegadores em ambiente desktop, mas exibe falhas em dispositivos móveis ([Hipóteses](../../fase-2/hipoteses.md)) |
| **Responsável pela coleta** | Rodrigo F. Amaral e Rafael W. Schadt |
| **Data da coleta** | 14/11/2026 |
| **Objeto avaliado** | Widget VLibras Web Browsers, versão 7.12.2, carregado na página padronizada |
| **Amostra** | Quatro casos funcionais executados uma vez em cada um dos cinco ambientes |
| **Fonte dos dados** | Matriz de execução, planilha de cálculo e vídeos em [Dados brutos da MF1.1](../dados-brutos/MF1.1/README.md) |
| **Ambientes avaliados** | Chrome, Firefox e Edge em desktop; Safari e Chrome em dispositivos móveis |

## Método e cálculo

A métrica definida para a MF1.1 é:

**MF1.1 = (1 − A / B) × 100**

| Termo | Significado |
| ----- | ----------- |
| `A` | Quantidade de funções que apresentaram falha |
| `B` | Quantidade total de funções testadas |
| `X` | Percentual de compatibilidade funcional |

A coleta utilizou os cinco ambientes previstos no plano. Em cada ambiente, foram executados os quatro casos funcionais definidos na Fase 3. Foram consideradas 20 verificações no total: 12 em desktop e 8 em dispositivos móveis.

## Método da coleta

1. Abrir a página padronizada `https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas` com o widget incorporado.
2. Abrir o widget e aguardar o carregamento completo do avatar 3D.
3. Executar sequencialmente os casos de teste em cada ambiente.
4. Marcar cada caso como `funciona` ou `falha`.
5. Registrar a evidência de cada execução.
6. Calcular o resultado por ambiente e o resultado geral.

**Tabela 1.** Ambientes planejados para a coleta.

| ID | Navegador | Plataforma | Dispositivo | Resultado | Evidência |
| -- | --------- | ---------- | ----------- | --------- | --------- |
| ENV-01 | Google Chrome | Desktop, Windows 10 | DI3 | 100% | [Vídeo](https://youtu.be/dLRtH3zFhe8) |
| ENV-02 | Mozilla Firefox | Desktop, Windows 10 | DI3 | 100% | [Vídeo](https://youtu.be/hAP1oGLoR0Y) |
| ENV-03 | Microsoft Edge | Desktop, Windows 10 | DI3 | 100% | [Vídeo](https://youtu.be/jO7wARRjKbs) |
| ENV-04 | Safari | Mobile, iOS | DI4 | 75% | [Vídeo](https://youtu.be/YugaIa0N_aA) |
| ENV-05 | Google Chrome | Mobile, Android | DI7 | 75% | [Vídeo](https://youtu.be/JHrUeRzwAJw) |

Fonte: elaborado pelos autores a partir dos [Ambientes da Fase 3](../../fase-3/recursos-e-ambiente.md) e das [evidências da coleta](../dados-brutos/MF1.1/README.md).

## Roteiro funcional

**Tabela 2.** Casos a serem registrados.

| ID | Função | Comportamento esperado | Resultado | Evidência |
| -- | ------ | ---------------------- | --------- | --------- |
| CT-01 | Tradutor | Selecionar texto, exibir legenda sincronizada e executar os sinais até o fim sem travamentos. | Safari mobile apresentou falha em elementos da interface; Chrome mobile apresentou falha na captura por múltiplos toques. | Vídeos dos ambientes. |
| CT-02 | Dicionário | Buscar `computador` e `xyzteste`; reproduzir o sinal existente e apresentar feedback adequado para o termo inexistente. | Concluído sem falhas nos cinco ambientes. | Vídeos dos ambientes. |
| CT-03 | Velocidade | Alterar a reprodução para 1.5x/2.0x e 0.5x, mantendo sincronização da animação e das legendas. | Concluído sem falhas nos cinco ambientes. | Vídeos dos ambientes. |
| CT-04 | Repetição | Reiniciar imediatamente a última tradução com as configurações anteriores, sem nova seleção. | Concluído sem falhas nos cinco ambientes. | Vídeos dos ambientes. |

O método detalhado está em [MF1.1 — Método de avaliação](../../fase-3/metodo-de-avaliacao.md#mf11-adaptabilidade-a-navegadores).

> **Escopo observado:** esta coleta registrou os quatro casos de teste previstos no protocolo da Fase 3. O caso de regionalismo não foi separado em uma quinta função; por isso, não integra o denominador `B` desta medição.

## Resultado

**Tabela 3.** Resultado por ambiente.

| Ambiente | Funções testadas (`B`) | Falhas (`A`) | Compatibilidade (`X`) | Nível |
| -------- | ---------------------: | -----------: | ---------------------: | ----- |
| ENV-01 | 4 | 0 | 100% | Satisfatório/Ideal |
| ENV-02 | 4 | 0 | 100% | Satisfatório/Ideal |
| ENV-03 | 4 | 0 | 100% | Satisfatório/Ideal |
| ENV-04 | 4 | 1 | 75% | Ruim |
| ENV-05 | 4 | 1 | 75% | Ruim |
| **Geral** | **20** | **2** | **90%** | **Aceitável/Regular** |

Fonte: cálculos a partir da [matriz de execução em CSV](../dados-brutos/MF1.1/planilha/matriz_execucao_mf1_1_vlibras.csv) e dos cinco vídeos de evidência.

O cálculo geral foi `X = (1 − 2 / 20) × 100 = 90%`.

## Comparação com os critérios

**Tabela 4.** Comparação com a matriz da Fase 2.

| Nível | Faixa ([Pontuação e critérios](../../fase-2/pontuacao-e-criterios.md)) | Resultado |
| ----- | -------------------------------------------------------------------- | -------- |
| Aceitável/Regular (3) | 80% a 94% | Resultado geral (90%) |
| Satisfatório/Ideal (4 a 5) | ≥ 95% | ENV-01, ENV-02 e ENV-03 (100%) |
| Ruim (1 a 2) | &lt; 80% | ENV-04 e ENV-05 (75%) |

O resultado geral observado foi de **90%** e fica na faixa **Aceitável/Regular**. Os três ambientes desktop atingiram **100%** e ficaram na faixa Satisfatório/Ideal. Os ambientes mobile registraram **75%** em cada navegador e ficam na faixa Ruim, pois apenas uma das quatro funções apresentou falha em cada um.

## Julgamento e hipótese

A hipótese H1-F previa 95% de compatibilidade em ambiente desktop e falhas em 40% dos navegadores móveis, especialmente em redimensionamento e captura de texto por toque.

- Os três ambientes desktop atingiram 100%, 5 pontos percentuais acima da compatibilidade prevista pela hipótese.
- A compatibilidade mobile foi 75% em cada ambiente.
- A falha no Safari foi a ausência de elementos da interface no CT-01; não foi registrada uma falha de redimensionamento separada.
- A falha no Chrome mobile ocorreu no CT-01: foram necessários múltiplos toques para realizar a tradução, indicando dificuldade na captura por toque.
- Nos dois navegadores móveis avaliados foram observadas falhas no tradutor, uma proporção maior que os 40% previstos pela hipótese.

**Julgamento:** o resultado geral fica na faixa Aceitável/Regular, mas não alcança os 95% necessários para a faixa Satisfatório/Ideal. Os ambientes desktop apresentaram compatibilidade funcional plena, enquanto os dois ambientes mobile tiveram falha no caso do tradutor. Assim, a adaptabilidade observada é aceitável de forma geral, porém não plenamente adequada nos dispositivos testados.

## Evidências

Os registros originais devem ser armazenados em [Dados brutos da MF1.1](../dados-brutos/MF1.1/README.md):

- matriz detalhada da execução;
- vídeos das gravações;
- versões dos navegadores e plataformas;
- planilha consolidada com os cálculos.

### Vídeos por ambiente

Cada ambiente possui uma gravação própria no YouTube. Os vídeos são a única evidência visual coletada para os cinco ambientes.

#### ENV-01 — Google Chrome, desktop

<iframe
  width="768"
  height="432"
  src="https://www.youtube.com/embed/dLRtH3zFhe8"
  title="MF1.1 — ENV-01, Google Chrome desktop"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  loading="lazy">
</iframe>

**Registro:** CT-01, CT-02, CT-03 e CT-04 concluídos sem falhas. Compatibilidade do ambiente: 100%.

#### ENV-02 — Mozilla Firefox, desktop

<iframe
  width="768"
  height="432"
  src="https://www.youtube.com/embed/hAP1oGLoR0Y"
  title="MF1.1 — ENV-02, Mozilla Firefox desktop"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  loading="lazy">
</iframe>

**Registro:** CT-01, CT-02, CT-03 e CT-04 concluídos sem falhas. Compatibilidade do ambiente: 100%.

#### ENV-03 — Microsoft Edge, desktop

<iframe
  width="768"
  height="432"
  src="https://www.youtube.com/embed/jO7wARRjKbs"
  title="MF1.1 — ENV-03, Microsoft Edge desktop"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  loading="lazy">
</iframe>

**Registro:** CT-01, CT-02, CT-03 e CT-04 concluídos sem falhas. Compatibilidade do ambiente: 100%.

#### ENV-04 — Safari, mobile

<iframe
  width="768"
  height="432"
  src="https://www.youtube.com/embed/YugaIa0N_aA"
  title="MF1.1 — ENV-04, Safari mobile"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  loading="lazy">
</iframe>

**Registro:** CT-01 apresentou falha: elementos da interface, como ícones, não aparecem na tela. CT-02, CT-03 e CT-04 concluídos sem falhas. Compatibilidade do ambiente: 75%.

#### ENV-05 — Google Chrome, mobile Android

<iframe
  width="768"
  height="432"
  src="https://www.youtube.com/embed/JHrUeRzwAJw"
  title="MF1.1 — ENV-05, Google Chrome mobile"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  loading="lazy">
</iframe>

**Registro:** CT-01 apresentou falha: foram necessários múltiplos toques para realizar a tradução. CT-02, CT-03 e CT-04 concluídos sem falhas. Compatibilidade do ambiente: 75%.

Os vídeos também estão disponíveis diretamente no YouTube:

- ENV-01: `https://youtu.be/dLRtH3zFhe8`
- ENV-02: `https://youtu.be/hAP1oGLoR0Y`
- ENV-03: `https://youtu.be/jO7wARRjKbs`
- ENV-04: `https://youtu.be/YugaIa0N_aA`
- ENV-05: `https://youtu.be/JHrUeRzwAJw`

### Planilha de cálculos

Os dados consolidados usados na análise são apresentados nas tabelas desta página. Os registros detalhados por ambiente e caso estão disponíveis no [CSV da matriz de execução](../dados-brutos/MF1.1/planilha/matriz_execucao_mf1_1_vlibras.csv), e a planilha publicada pode ser consultada diretamente no Google Sheets.

<iframe
  width="768"
  height="500"
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSNuh878WD1MabKZI3YpaJd00_LBHbCnYZjOsX5RvUl4SuqWAmrklECfwEFF_QPQNY5lwdhXj0LAGXZ/pubhtml?gid=569079131&amp;single=true&amp;widget=true&amp;headers=false"
  title="Planilha de cálculos da MF1.1"
  frameborder="0"
  loading="lazy">
</iframe>

A planilha usada no cálculo também deve ser mencionada por meio do link oficial:

[Abrir a planilha publicada da MF1.1](https://docs.google.com/spreadsheets/d/e/2PACX-1vSNuh878WD1MabKZI3YpaJd00_LBHbCnYZjOsX5RvUl4SuqWAmrklECfwEFF_QPQNY5lwdhXj0LAGXZ/pubhtml?gid=569079131&single=true&widget=true&headers=false)

As fórmulas e o cálculo consolidado permanecem visíveis na planilha. O CSV reproduz os registros detalhados usados para o cálculo no GitPages.

## Limitações

- Foram testados exatamente cinco ambientes: Chrome, Firefox e Edge em desktop; Safari e Chrome em mobile.
- Os resultados não podem ser generalizados para outras versões dos navegadores, sistemas operacionais ou dispositivos não testados.
- Não há capturas separadas por CT nem logs de console associados; as conclusões dependem dos cinco vídeos e da matriz consolidada.
- Não foi possível confirmar uma segunda classificação independente dos casos pela equipe.
- As causas de falha devem ser atribuídas ao widget somente; não há evidência suficiente para avaliar problemas exclusivos da página gov.br, rede ou restrições externas.

## Participação na coleta

| Integrante | Contribuição |
| ---------- | ------------ |
| Rodrigo F. Amaral | Responsável pela coleta nos ambientes de desktop e mobile, conforme dispositivos e navegadores definidos no plano. |
| Rafael W. Schadt | Responsável pela coleta descrita no plano da métrica MF1.1. |

## Histórico de Versões

| Versão | Data | Descrição da alteração | Autor(a) | Revisor(a) |
| ------ | ---- | ---------------------- | -------- | ---------- |
| 0.1 | 21/11/2026 | Registro da execução e do julgamento da MF1.1 | Rodrigo F. Amaral | |
