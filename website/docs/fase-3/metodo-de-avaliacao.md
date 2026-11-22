---
sidebar_position: 1
sidebar_label: Método de avaliação
---

# Método de avaliação

Esta página descreve como cada métrica da [Fase 2](../fase-2/metricas.md) será medida. Cada protocolo traz ferramenta, passos, repetições, registro dos dados, responsável e critério de parada, para que outra pessoa consiga repetir a medição. Versão, máquinas, navegadores e redes estão em [Recursos e ambiente](./recursos-e-ambiente.md), e frases, portais e tarefas estão em [Massa de dados](./massa-de-dados.md).

## Convenções gerais

- **Objeto medido:** widget do VLibras Web Browsers, versão 7.12.2, executado a partir do build local do repositório ou do código padrão de instalação, conforme cada protocolo.
- **Registro:** cada medição é anotada na planilha de coleta da métrica, com data, hora, avaliador, navegador, versão e perfil de rede. As evidências (prints, gravações de tela e logs) ficam na pasta `dados-brutos/<métrica>/`, com nome no padrão `<métrica>_<data>_<descrição>`.
- **Desvios:** qualquer mudança em relação ao protocolo (falha de rede, travamento, medição repetida) é registrada na planilha com o motivo.
- **Repetibilidade:** os passos usam apenas ferramentas gratuitas (DevTools, Lighthouse, axe-core, Git e GitHub), e não exigem conhecimento além do descrito.

**Tabela 1.** Resumo dos protocolos.

| Métrica | Característica           | Ferramenta principal                                | Responsável      |
| ------- | ------------------------ | --------------------------------------------------- | ---------------- |
| MI1.1   | Capacidade de Interação  | Teste de usabilidade e gravação de tela             | Ludmila e Amanda |
| MI2.1   | Capacidade de Interação  | Código-fonte e inspeção da interface                | A definir        |
| MI3.1   | Capacidade de Interação  | axe-core e Lighthouse                               | Ludmila          |
| MI3.2   | Capacidade de Interação  | Teste de usabilidade e gravação de tela             | Ludmila e Amanda |
| ME1.1   | Eficiência de Desempenho | DevTools (Network e Performance) e gravação de tela | Rafael           |
| ME2.1   | Eficiência de Desempenho | Contadores de CPU do sistema operacional (script)   | Amanda           |
| ME3.1   | Eficiência de Desempenho | DevTools (Network)                                  | Geovane          |
| MF1.1   | Flexibilidade            | Checklist por navegador                             | Rodrigo e Rafael |
| MF2.1   | Flexibilidade            | Injeção do widget nos portais                       | A definir        |
| MM1.1   | Manutenibilidade         | Análise estática do código                          | Rafael           |
| MM2.1   | Manutenibilidade         | Histórico do Git                                    | Mariana          |
| MM3.1   | Manutenibilidade         | GitHub (*issues* e *Pull Requests*)                 | Ludmila          |

---

## 1. Capacidade de Interação

### MI1.1: Taxa de Conclusão de Tarefas sem Assistência

- **Ferramentas:** widget em página de teste, gravação de tela, cronômetro, planilha de observação, cartões de cenário com vídeo em Libras.
- **Participantes:** no mínimo 8 pessoas usuárias de Libras, priorizando pessoas surdas. A participação de ouvintes fluentes em Libras é aceita, com resultados reportados separadamente por perfil. Se não houver participantes suficientes, o teste é feito entre os integrantes da equipe e a limitação é declarada.
- **Passos:**
  1. Obter o consentimento e registrar o perfil (condição auditiva, relação com a Libras, fluência em português e experiência com o VLibras).
  2. Fazer um aquecimento de 3 minutos sem medição, para familiarização com o equipamento.
  3. Apresentar cada cenário em Libras (vídeo com legenda) e em cartão visual, sem indicar qual controle usar. Os cenários estão em [Massa de dados](./massa-de-dados.md).
  4. Iniciar a gravação de tela e pedir que o participante cumpra o objetivo sozinho. A equipe não responde dúvidas durante a tarefa.
  5. Cronometrar a tarefa, com limite de 4 minutos.
  6. Registrar o resultado (concluída sem assistência, com assistência ou não concluída), o tempo, o número de tentativas erradas, o primeiro clique e se o participante recorreu à leitura de texto.
  7. Após cada tarefa, aplicar a escala de dificuldade de 1 a 5 com carinhas.
- **Repetições:** uma execução por tarefa por participante.
- **Registro:** planilha de observação (participante, perfil, tarefa, resultado, tempo, tentativas erradas, primeiro clique, uso de texto, dificuldade percebida) e gravações de tela.
- **Critério de parada:** todas as tarefas tentadas por todos os participantes, ou 4 minutos por tarefa.

### MI2.1: Proporção de Mensagens Apenas em Texto

- **Ferramentas:** código-fonte (`src/widget/providers/toaster` e `src/widget/dialogs`), navegador, DevTools.
- **Passos:**
  1. Listar todas as mensagens de erro e status do código-fonte, com o arquivo de origem.
  2. Para cada mensagem, identificar a ação que a provoca (ex.: desligar a rede para simular falha de carregamento, clicar fora de um texto para gerar falha de seleção).
  3. Provocar a mensagem na interface e registrar um print.
  4. Classificar como **somente texto** (texto em português, sem ícone explicativo nem sinalização do avatar) ou **com recurso visual** (ícone explicativo ou sinalização do avatar).
  5. Contar as mensagens classificadas como somente texto e o total.
- **Repetições:** uma vez por mensagem. Se alguma não puder ser provocada na interface, é registrada como "não reproduzível" e fica fora do total, com justificativa.
- **Registro:** planilha com ID, arquivo, texto, gatilho, tipo de recurso e classificação.
- **Critério de parada:** todas as mensagens do código inventariadas e classificadas.

### MI3.1: Taxa de Conformidade de Contraste

- **Ferramentas:** axe-core (extensão do navegador), Lighthouse (DevTools), medidor de contraste.
- **Passos:**
  1. Abrir o widget em uma página de teste simples, sem estilos próprios.
  2. Para cada tela do widget (Tradutor, Dicionário, Configurações, Feedback, Guia Rápido e Sobre) e para os controles do player, executar o axe-core e o Lighthouse.
  3. Registrar, na regra de contraste, os elementos aprovados e os reprovados.
  4. Conferir manualmente, com o medidor de contraste, os casos que as ferramentas marcarem como "incompletos".
  5. Calcular o percentual de elementos que atendem ao nível AA (4.5:1 para texto comum, 3:1 para texto grande e componentes de interface). O avatar 3D fica fora.
- **Repetições:** uma execução por tela e por ferramenta.
- **Registro:** relatórios exportados do axe-core e do Lighthouse e planilha com a verificação manual e prints.
- **Critério de parada:** todas as telas do widget e os controles do player inspecionados.

### MI3.2: Taxa de Eficácia na Seleção de Texto

- **Ferramentas:** widget na página de teste e em portais da amostra, gravação de tela, cartões visuais das tarefas e planilha de observação. A coleta pode ocorrer na mesma sessão da MI1.1.
- **Passos:**
  1. No início da sessão, capturar a página de cada portal e registrar a versão do widget carregado. Nos portais que já tenham o VLibras instalado, usar o widget existente e registrar isso.
  2. Apresentar cada tarefa (S1 a S7) por cartão visual, na ordem fixa definida em [Massa de dados](./massa-de-dados.md), sem indicar como selecionar o texto.
  3. Pedir que o participante selecione e traduza o trecho indicado, sozinho, com no máximo 2 minutos por tarefa. A equipe não ajuda durante a tarefa.
  4. Registrar sucesso, que exige três condições: tradução corretamente iniciada, área selecionada correta e feedback visual claro do modo de seleção. Se faltar qualquer uma, é falha.
  5. Nas falhas, registrar o motivo (widget não capturou o texto, capturou área errada, carrossel trocou de slide durante a seleção, sem feedback visual ou outro) e o tipo (limitação técnica do widget ou problema de usabilidade e feedback).
  6. Nas tarefas com conteúdo que muda com o tempo (S4, carrossel, e S5, card de rede social), descrever na planilha o trecho efetivamente usado.
- **Repetições:** uma tentativa por tarefa por participante. Com 8 participantes, são 56 tentativas previstas (7 tarefas x 8 participantes).
- **Registro:** planilha de observação (participante, grupo de análise, tarefa, página, elemento, resultado, as três verificações do critério de sucesso, motivo e tipo da falha, estratégia alternativa, timestamp na gravação e desvio do protocolo), capturas das páginas e gravações de tela.
- **Critério de parada:** as 7 tarefas (S1 a S7) tentadas por todos os participantes, ou 2 minutos por tarefa.

---

## 2. Eficiência de Desempenho

### ME1.1: Tempo Médio de Resposta da Tradução

- **Ferramentas:** DevTools (abas Network e Performance, com *throttling* de rede), gravação de tela.
- **Passos:**
  1. Abrir a página de teste com o widget, esperar o avatar carregar por completo e limpar o cache do navegador.
  2. Aplicar o perfil de rede (banda larga ou 3G, conforme [Recursos e ambiente](./recursos-e-ambiente.md)) e iniciar a gravação de tela.
  3. Selecionar uma das 10 frases padronizadas e acionar a tradução.
  4. Registrar o instante da seleção (A) e o instante em que o avatar exibe o primeiro sinal (B). Como medida auxiliar, anotar o tempo da requisição de tradução na aba Network.
  5. Calcular `B − A` para cada frase e, ao final, a média, o tempo máximo e o desvio padrão por perfil de rede.
- **Repetições:** 10 frases em cada um dos 2 perfis (20 medições). Uma medição com falha de rede é repetida e o desvio é registrado.
- **Registro:** planilha (frase, perfil, A, B, tempo) e gravações com marcação de tempo.
- **Critério de parada:** as 20 medições válidas concluídas.

### ME2.1: Utilização Média de CPU

- **Ferramentas:** script PowerShell que lê os contadores de tempo de CPU por processo do Windows (os mesmos do Gerenciador de Tarefas), somando todos os processos do navegador.
- **Passos:**
  1. Preparar o ambiente de hardware modesto definido em [Recursos e ambiente](./recursos-e-ambiente.md), fechando as demais aplicações.
  2. Abrir a página de teste e carregar o avatar.
  3. Acionar a tradução contínua (sequência de frases) e, com o avatar sinalizando, iniciar o script por 2 minutos.
  4. Registrar o uso médio e o pico de CPU da sessão, calculados por `X = B / (A × N) × 100`, com N igual ao número de *threads* disponíveis ao navegador.
- **Repetições:** 5 sessões de 2 minutos.
- **Registro:** planilha (sessão, A, B, N, média, pico), CSV por sessão e capturas de tela da saída do script.
- **Critério de parada:** as 5 sessões concluídas.

### ME3.1: Volume de Dados Consumidos e Taxa de Reuso do Cache

- **Ferramentas:** DevTools (aba Network), página de teste (`instrumentos/pagina-teste.html`).
- **Passos:**
  1. Limpar os dados do site e abrir a página de teste com o widget.
  2. Abrir a página de teste, que carrega o widget pelo código padrão de instalação, com a aba Network aberta (*Keep log* ligado, *Disable cache* desligado, sem limitação de rede), e ativar o widget.
  3. **1ª execução:** traduzir cada uma das 10 frases padronizadas (F1 a F10) e consultar os 5 termos do dicionário definidos em [Massa de dados](./massa-de-dados.md).
  4. **Reexecução:** reproduzir de novo cada frase já traduzida nas velocidades 0.5x, 1x e 2x, usando "Repetir", sem limpar o cache.
  5. Registrar prints da aba Network a cada frase e a cada velocidade e, ao final, com o filtro `dicionario2` e o total de requisições da barra inferior. Exportar o HAR.
  6. Contar as requisições da reexecução atendidas pelo cache (status 304 ou *from cache*) e calcular `(A / B) × 100`. Registrar também o volume transferido (MB) na 1ª execução e na reexecução.
- **Repetições:** uma 1ª execução e duas reexecuções por frase (uma por velocidade).
- **Registro:** arquivo HAR, prints da aba Network e planilha (CSV) com cada requisição classificada como cache ou rede, na pasta `dados/ME3.1/`.
- **Critério de parada:** as 10 frases reproduzidas nas 3 velocidades e os 5 termos consultados.

---

## 3. Flexibilidade

### MF1.1: Adaptabilidade a Navegadores

- **Ferramentas:** navegadores e dispositivos definidos em [Recursos e ambiente](./recursos-e-ambiente.md), checklist de funcionalidades.
- **Página padronizada:** todos os testes são realizados na página https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas.
- **Passos:**
  1. Abrir a página de teste com o widget em um navegador e dispositivo.
  2. Abrir o widget e aguardar o carregamento completo do avatar 3D antes de iniciar cada caso.
  3. Executar sequencialmente os quatro casos de teste funcionais abaixo em cada ambiente previsto (ENV-01 a ENV-04).
  4. Marcar cada caso como **funciona** ou **falha**. Qualquer desvio do comportamento esperado soma uma falha à variável `A`.
  5. Registrar a evidência da execução (print, gravação de tela ou log de erro).
  6. Calcular `(1 − A / B) × 100` por ambiente e o resultado geral, considerando `B` igual ao total de casos executados.
- **Casos de teste funcionais:**
  - **CT-01 - Tradutor (texto da página → Libras):**
    1. Clicar no ícone azul de acessibilidade do VLibras para abrir o widget.
    2. Aguardar o carregamento completo do avatar 3D (Ícaro, Hosana ou Guga).
    3. Selecionar um parágrafo visível com, no mínimo, duas frases pontuadas.
    4. Considerar o caso aprovado quando o widget capturar o trecho, exibir a legenda sincronizada e o avatar executar os sinais até o fim sem travamentos de renderização WebGL.
    5. Considerar falha se o widget não abrir, o avatar não renderizar, o texto não for capturado (inclusive em eventos de toque no mobile) ou a animação congelar antes do término.
  - **CT-02 - Dicionário:**
    1. Com o widget aberto, acessar a aba ou o ícone **Dicionário**.
    2. Digitar `computador` no campo de busca e selecionar o resultado.
    3. Repetir a busca com o termo inexistente `xyzteste`.
    4. Considerar o caso aprovado quando a lista filtrar corretamente, o avatar reproduzir o sinal do termo selecionado e houver feedback adequado para o termo não encontrado.
    5. Considerar falha se o campo não receber foco ou teclado no mobile, a lista não carregar, o sinal não for executado ou ocorrer exceção no console.
  - **CT-03 - Velocidade de sinalização:**
    1. Acionar a tradução de uma frase média, com 10 a 15 palavras.
    2. Durante ou antes da reprodução, alterar a velocidade para 1.5x ou 2.0x.
    3. Alterar a velocidade para 0.5x.
    4. Considerar o caso aprovado quando o seletor responder ao clique ou toque, o indicador visual for atualizado e a cadência do avatar e das legendas mudar proporcionalmente.
    5. Considerar falha se o seletor estiver inacessível ou sobreposto, o valor visual mudar sem alterar a velocidade real ou a animação dessincronizar ou quebrar.
  - **CT-04 - Repetição:**
    1. Aguardar a conclusão completa da tradução executada no caso anterior.
    2. Clicar no botão **Repetir** (replay) na barra de controles do player.
    3. Considerar o caso aprovado quando o avatar reiniciar imediatamente a última frase desde o primeiro sinal, mantendo as configurações de velocidade e regionalismo, sem nova seleção de texto.
    4. Considerar falha se o botão permanecer desabilitado, não responder ou iniciar uma tradução vazia ou incorreta.
- **Repetições:** uma execução completa dos quatro casos por ambiente.
- **Registro:** checklist por ambiente, com resultado de cada caso, navegador, dispositivo, data, hora, evidência e log de erro, quando houver.
- **Critério de parada:** todos os quatro casos executados em todos os ambientes previstos, ou a execução interrompida por indisponibilidade do ambiente, registrada com justificativa.

### MF2.1: Taxa de Integração sem Ajuste Manual

- **Ferramentas:** navegador em janela anônima e sem extensões, console do DevTools, painel "Condições de solicitação" do DevTools, código padrão de instalação do widget.
- **Retirada da instalação do portal:** os portais da amostra já trazem o VLibras instalado pelos próprios órgãos, que podem ter feito ajustes nessa instalação. Para testar só o código padrão, a instalação do portal é bloqueada antes da injeção. Sem isso, a página ficaria com duas instâncias do widget.
- **Passos:**
  1. Abrir cada portal da amostra de [Massa de dados](./massa-de-dados.md) com o DevTools aberto.
  2. No painel "Condições de solicitação", ativar o bloqueio dos padrões `*://vlibras*`, `*://vlibras.gov.br/*` e `*://*/*vlibras*` e recarregar a página. Conferir que o botão do VLibras não aparece e que o console registra a solicitação bloqueada.
  3. Desativar o bloqueio, sem recarregar a página.
  4. Injetar o código padrão de instalação do widget (script `vlibras-plugin.js` e chamada de `window.VLibras.Widget`) pelo console e aguardar a mensagem de carregamento.
  5. Verificar se o botão de acesso aparece, se o painel abre, se a seleção de texto aciona a tradução e se o avatar é exibido. O texto selecionado é o primeiro texto comum do conteúdo principal (título ou parágrafo que não seja menu, botão, imagem, carrossel nem card com *hover*).
  6. Registrar conflitos (ex.: sobreposição de *z-index*, bloqueio de scripts por política de segurança, estilos que quebram o painel).
  7. Considerar o portal como "sem ajuste manual" quando nenhuma correção de CSS ou de script for necessária.
- **Repetições:** uma vez por portal, em um mesmo navegador.
- **Registro:** ficha de integração por portal e prints de cada etapa: página sem o widget do portal, injeção pelo console e tradução em andamento.
- **Critério de parada:** os 10 portais testados.

---

## 4. Manutenibilidade

### MM1.1: Taxa de Reuso de Componentes do Design System

- **Ferramentas:** código-fonte do widget (`src/widget/components/`), editor de código.
- **Passos:**
  1. Identificar no repositório as definições padronizadas do *Design System* (componentes e *tokens*) e registrar a origem.
  2. Listar todos os componentes de interface do widget (botões, *sliders*, modais, entre outros).
  3. Classificar cada componente como **reutiliza o Design System** ou **customizado/duplicado**, justificando com o trecho de código.
  4. Dois avaliadores classificam de forma independente. As divergências são resolvidas em conjunto.
  5. Calcular `(A / B) × 100`.
- **Repetições:** uma classificação por avaliador.
- **Registro:** planilha (componente, arquivo, classificação, justificativa).
- **Critério de parada:** todos os componentes do diretório classificados.

### MM2.1: Média de Módulos Impactados por Alteração

- **Ferramentas:** Git (linha de comando) e histórico do repositório oficial.
- **Passos:**
  1. Identificar os caminhos dos arquivos dos controles do player (velocidade, repetição e regionalismo).
  2. Listar os *commits* que alteraram esses caminhos, com `git log --name-only --pretty=format:"COMMIT %h" -- <caminhos>`.
  3. Para cada *commit* (ou *Pull Request*, se houver vários *commits* por PR), listar os módulos alterados. Módulo é o diretório de primeiro nível do código (ex.: Loader, Widget, Player, Core e Common, Extensão), como descrito em [Tipo de produto](../fase-1/tipo-produto-descricao.md).
  4. Contar os módulos distintos por alteração e calcular a média.
- **Repetições:** uma análise de todo o histórico disponível dos caminhos.
- **Registro:** planilha (*commit* ou PR, arquivos, módulos e quantidade) e o comando usado.
- **Critério de parada:** todas as alterações do histórico nos caminhos selecionados analisadas.

### MM3.1: Tempo Médio de Correção de Incompatibilidades

- **Ferramentas:** GitHub (interface web ou GitHub CLI).
- **Passos:**
  1. Listar todas as *issues*, abertas e fechadas:
     `gh issue list --repo spbgovbr-vlibras/vlibras-web-browsers --state all --limit 500 --json number,title,state,createdAt,closedAt > issues.json`
  2. Selecionar as de **incompatibilidade**: relatam falha de funcionamento do widget em navegador, dispositivo ou portal específico. Ficam de fora pedidos de funcionalidade, perguntas, spam e temas de segurança. O critério é aplicado a todas e registrado.
  3. Para cada *issue*, anotar a data de abertura e a de fechamento. Se estiver aberta, usar a data da coleta, registrada na planilha.
  4. Nas fechadas, ler a conversa e descartar as encerradas como duplicadas ou "não procede", contando-as à parte.
  5. Calcular os dias, a média, a mediana, o número de abertas, o de fechadas e N.
- **Repetições:** uma análise de todo o histórico, com a data da coleta registrada.
- **Registro:** planilha (*issue*, estado, abertura, fim, dias, motivo de inclusão ou exclusão).
- **Critério de parada:** todas as *issues* do repositório verificadas e classificadas.

---

## Referências

> ISO/IEC. **ISO/IEC 25040:2024**: systems and software engineering: systems and software quality requirements and evaluation (SQuaRE): quality evaluation framework. 2. ed. Geneva: ISO/IEC, 2024.

> ISO/IEC. **ISO/IEC 25010:2023**: systems and software engineering: systems and software quality requirements and evaluation (SQuaRE): product quality model. 2. ed. Geneva: ISO/IEC, 2023.

## Histórico de Versões

| Versão | Data       | Descrição da alteração                                                                                       | Autor(a)           | Revisor(a) |
| ------ | ---------- | ------------------------------------------------------------------------------------------------------------ | ------------------ | ---------- |
| 0.1    | 15/11/2026 | Inserção do método de avaliação e dos protocolos por métrica                                                 | Ludmila O. Nunes   |            |
| 0.2    | 15/11/2026 | Protocolo da ME3.1: página de teste, 10 frases nas velocidades 0.5x, 1x e 2x e limpeza do cache do navegador | Geovane S. Freitas |            |
| 0.3    | 16/11/2026 | Protocolo da ME2.1: coleta por script e fórmula normalizada pelo número de *threads*                         | Amanda C. Lima     |            |
| 0.4    | 18/11/2026 | Correções MI1.1                                                                                              | Ludmila O. Nunes   |            |
| 0.5    | 20/11/2026 | Alteração responsáveis MI1.1 e MI3.2                                                                         | Ludmila O. Nunes   |            |
| 0.6    | 22/11/2026 | Protocolo da MF2.1: bloqueio da instalação do portal antes da injeção e critério de escolha do texto | Amanda C. Lima     |            |