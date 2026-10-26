---
sidebar_position: 7
sidebar_label: Escopo
---

# Escopo, profundidade e objetos de avaliação

## Objetivo e delimitação

A avaliação tem como objeto o **widget do VLibras Web Browsers, versão 7.12.2, de 04/09/2026**, utilizado para traduzir textos de páginas web para Libras por meio de um avatar 3D. O escopo contempla exclusivamente o widget incorporado a páginas web, sem abranger a extensão para navegadores ou os aplicativos nativos do VLibras.

A avaliação concentra-se em quatro características selecionadas na etapa de [priorização](./caracteristicas-e-priorizacao.md): **Capacidade de Interação, Eficiência de Desempenho, Flexibilidade e Manutenibilidade**. Serão examinados os módulos e as funcionalidades relacionados ao tradutor, ao dicionário, aos controles do vídeo do avatar, à seleção do regionalismo no Padrão Nacional e ao funcionamento do widget em diferentes dispositivos e navegadores.

A profundidade da avaliação varia conforme o objeto e a disponibilidade de acesso. Serão considerados o comportamento observável do widget e os artefatos de implementação disponíveis no repositório. Os serviços remotos de tradução e dicionário serão examinados apenas por meio das interações realizadas pelo widget, sem análise de sua implementação interna.

## Objetos e profundidade da avaliação

A Tabela 1 a seguir apresenta o escopo da avaliação por cada característica selecionada pelo grupo. A seguir, pode ser observada uma descrição mais detalhada sobre cada uma. 

**Tabela 1.** Escopo da avaliação por característica.

| Característica | Objetos de avaliação | Aspectos investigados | Profundidade |
| --- | --- | --- | --- |
| Capacidade de Interação | Tradutor, dicionário e controles do vídeo do avatar | Execução das tarefas de tradução, consulta ao dicionário, repetição e controle da reprodução, alteração da velocidade e seleção do regionalismo no Padrão Nacional | Inspeção das interfaces e execução de tarefas previamente definidas |
| Eficiência de Desempenho | Widget, vídeo do avatar e comunicação com os serviços remotos | Tempo de resposta das operações selecionadas e comportamento do widget durante a execução | Medições nas condições de teste estabelecidas, registrando os ambientes e as operações utilizadas |
| Flexibilidade | Widget em diferentes dispositivos e navegadores, além das configurações contempladas | Funcionamento e adaptação da interface e das funcionalidades selecionadas em diferentes ambientes | Verificação nos dispositivos e navegadores efetivamente testados |
| Manutenibilidade | Código-fonte e artefatos dos módulos do widget efetivamente analisados | Organização e compreensão do código, estrutura dos módulos e facilidade de análise e modificação | Inspeção dos arquivos e componentes selecionados pela equipe, delimitada aos artefatos efetivamente examinados |

### Capacidade de Interação

Na **Capacidade de Interação**, serão examinados os fluxos de tradução, consulta ao dicionário e utilização dos controles do vídeo, incluindo a repetição da tradução, o ajuste da velocidade e a seleção do regionalismo no Padrão Nacional. O grupo buscará, sempre que possível, envolver pessoas da comunidade surda e/ou pessoas com conhecimento de Libras na avaliação, a fim de incorporar diferentes perspectivas sobre a interação com o produto. Caso não seja possível contar com essa participação, a avaliação será realizada exclusivamente pelos integrantes do grupo, considerando as tarefas definidas e reconhecendo que os resultados não representam, necessariamente, a experiência de todos os perfis de usuários.

### Eficiência de Desempenho

Na **Eficiência de Desempenho**, serão observadas as operações selecionadas do widget, incluindo a comunicação com os serviços de tradução e a reprodução do avatar. O tempo de resposta será medido no cliente, e o consumo de recursos poderá ser avaliado caso seja definido um procedimento de medição adequado. A execução local do projeto será considerada quando viável, levando em conta que alguns componentes podem depender de serviços remotos. As medições realizadas no navegador não serão utilizadas, isoladamente, para inferir o desempenho interno dos servidores.

### Flexibilidade

Na **Flexibilidade**, será verificado se o widget funciona em diferentes dispositivos, sistemas operacionais e navegadores. Para isso, o grupo realizará testes em computadores e dispositivos móveis, utilizando o Google Chrome e o Mozilla Firefox, conforme a disponibilidade dos ambientes. Os resultados serão válidos apenas para os ambientes efetivamente testados, sem garantir o mesmo funcionamento em dispositivos, sistemas operacionais e navegadores que não foram avaliados.

### Manutenibilidade

Na **Manutenibilidade**, a análise será concentrada no código-fonte e nos artefatos dos módulos relacionados ao widget que forem selecionados pela equipe. Componentes cuja implementação não seja examinada poderão ser avaliados quanto ao comportamento observável, mas não terão sua estrutura interna analisada. A avaliação será limitada aos aspectos que puderem ser investigados a partir dos artefatos consultados.

## Itens fora do escopo

A Tabela 2 a seguir apresenta itens que foram excluídos do escopo e as justificativas para a exclusão.

**Tabela 2.** Exclusões e justificativas.

| Item fora do escopo                                                                                | Justificativa                                                                     | Consequência para os resultados                                                                            |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Extensão do VLibras para navegadores                                                               | A avaliação foi delimitada ao widget incorporado a páginas web                    | As conclusões não se aplicam diretamente à extensão                                                        |
| Aplicativos nativos do VLibras                                                                     | Não fazem parte do produto delimitado para este projeto                           | Os resultados não caracterizam a qualidade dos aplicativos nativos                                         |
| Regionalismos diferentes do Padrão Nacional                                                        | O grupo delimitou a avaliação do regionalismo a uma única opção                   | Não será possível comparar o comportamento ou a qualidade das demais variantes                             |
| Análise interna dos serviços remotos e de componentes externos ao conjunto de arquivos selecionado | A equipe delimitou a análise interna aos artefatos definidos para o projeto       | As conclusões sobre esses componentes ficarão restritas ao comportamento observado durante o uso do widget |
| Treinamento e implementação interna dos modelos de tradução                                        | Esses elementos não fazem parte dos objetos acessíveis definidos para a avaliação | Não serão tiradas conclusões sobre sua implementação ou treinamento                                        |

## Condições e limites de validade

As conclusões da avaliação serão válidas para a versão do widget, as funcionalidades e os ambientes efetivamente testados. Como não serão avaliadas todas as combinações possíveis de dispositivos, sistemas operacionais e navegadores, os resultados não poderão ser generalizados para ambientes não testados. Para contextualizar as medições, serão registrados os ambientes utilizados e as condições relevantes de cada teste.

Embora existam repositórios públicos separados para o widget, o player e a API de tradução, a análise interna realizada pelo grupo ficará restrita aos arquivos e componentes efetivamente examinados. Os serviços remotos não incluídos nessa análise serão avaliados por meio do comportamento observado nas interações com o widget.

Por fim, a avaliação do regionalismo será restrita ao Padrão Nacional, sem permitir conclusões sobre as demais variantes. Além disso, a inspeção realizada pela equipe não será suficiente, por si só, para representar a experiência de todos os usuários do VLibras. Essas limitações serão consideradas na interpretação dos resultados.

## Referências

> BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. **VLibras**. Brasília, DF: Secretaria de Governo Digital, [s.d.]. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras). Acesso em: 20 out. 2026.

> SPBGOVBR-VLIBRAS. **vlibras-web-browsers**: acessibilidade digital através da tradução para Língua Brasileira de Sinais (Libras). [S. l.]: GitHub, [s.d.]. Disponível em: [https://github.com/spbgovbr-vlibras/vlibras-web-browsers](https://github.com/spbgovbr-vlibras/vlibras-web-browsers). Acesso em: 24 out. 2026.

## Histórico de Versões

| Versão | Data       | Descrição da alteração                                         | Autor(a)         | Revisor(a)       |
| ------ | ---------- | -------------------------------------------------------------- | ---------------- | ---------------- |
| 1.0    | 26/10/2026 | Adição do escopo, profundidade, objetos e limites da avaliação | Ludmila O. Nunes | Rafael W. Schadt |

