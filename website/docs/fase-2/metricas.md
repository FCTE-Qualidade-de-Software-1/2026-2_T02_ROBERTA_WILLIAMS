---
sidebar_position: 4
---

# Métricas de Qualidade (GQM)

As métricas representam o nível quantitativo da abordagem *Goal-Question-Metric* (GQM) [FanJiang and Wu 2009]. Elas fornecem os dados necessários para responder às questões de pesquisa e avaliar o cumprimento dos objetivos de qualidade do **VLibras** [FanJiang and Wu 2009], tomando como base o modelo da norma **ISO/IEC 25010:2023** [ISO and IEC 2005] e a literatura de apoio [Galin 2018, Washizaki and Olszewska 2024].

---

## 1. Capacidade de Interação (*Interaction Capability*)

### **MI1.1: Taxa de Conclusão de Tarefas sem Assistência**
* **Característica:** Capacidade de Interação (ISO/IEC 25010:2023) [ISO and IEC 2005]
* **Questão Relacionada:** Q1-I (Operabilidade e Autonomia)
* **Definição Operacional:** Proporção das tarefas de vídeo (repetir trecho, alterar velocidade) e dicionário/regionalismo concluídas pelo usuário sem ajuda externa e sem depender de leitura em português.
* **Unidade:** Percentual (%)
* **Coleta:** Teste de usabilidade com no mínimo 8 participantes surdos. Instrução da tarefa em Libras antes de começar; nenhuma ajuda durante a execução; tempo-limite de 3 minutos por tarefa. Gravação de tela.
* **Cálculo:** `X = (A / B) * 100`  
  * $A$ = tarefas concluídas sem assistência  
  * $B$ = total de tarefas tentadas
* **Fonte de Dados:** Observação direta e gravação de tela do teste com usuários.
* **Interpretação:**  
  * **Alto (≥ 80%):** O usuário opera os controles sozinho através dos ícones visuais.  
  * **Baixo (< 50%):** Os ícones visuais não comunicam a função de forma clara sem apoio textual.

---

### **MI2.1: Proporção de Mensagens Apenas em Texto**
* **Característica:** Capacidade de Interação (ISO/IEC 25010:2023) [ISO and IEC 2005]
* **Questão Relacionada:** Q2-I (Feedback Visual e Proteção contra Erros)
* **Definição Operacional:** Proporção das mensagens de erro e de status do widget exibidas somente em texto em português, sem sinalização do avatar nem ícone explicativo.
* **Unidade:** Percentual (%)
* **Coleta:** Inventariar todas as mensagens no código-fonte e provocar cada uma na interface (ex.: desligar rede para simular erro de carregamento; clicar fora de texto para gerar falha de seleção). Registrar o tipo de recurso de comunicação exibido.
* **Cálculo:** `X = (A / B) * 100` 
  * $A$ = mensagens exibidas exclusivamente em texto  
  * $B$ = total de mensagens de erro/status implementadas
* **Fonte de Dados:** Código-fonte (`src/widget/providers/toaster` e `src/widget/dialogs`) e inspeção manual da interface.
* **Interpretação:**  
  * **Alto (> 70%):** O feedback do sistema exclui usuários não alfabetizados em português.  
  * **Baixo (≤ 30%):** Os erros e status são devidamente comunicados por recursos visuais/sinais.

---

### **MI3.1: Taxa de Conformidade de Contraste**
* **Característica:** Capacidade de Interação (ISO/IEC 25010:2023) [ISO/IEC 2023]
* **Subcaracterística:** Inclusividade (contraste)
* **Questão Relacionada:** Q3-I (Contraste e Seleção de Texto)
* **Definição Operacional:** Proporção de elementos da interface do widget que atendem ao contraste mínimo da WCAG 2.2, nível AA (4.5:1 para texto comum e 3:1 para texto grande e componentes de interface).
* **Unidade:** Percentual (%)
* **Coleta:** Inspecionar cada tela do widget e os controles do player com *axe-core* e Lighthouse, registrando os elementos aprovados e reprovados. Casos "incompletos" são conferidos manualmente. O avatar 3D fica fora.
* **Cálculo:** `X = (A / B) * 100`
  * $A$ = elementos que atendem ao contraste mínimo do nível AA
  * $B$ = total de elementos avaliados
* **Fonte de Dados:** Relatórios do *axe-core*/Lighthouse e planilha de verificação manual com capturas de tela.
* **Interpretação:**
  * **Alto (≥ 90%):** Contraste adequado; a interface é legível para usuários com baixa visão.
  * **Intermediário (70% a 89%):** Parte dos elementos tem contraste insuficiente e merece ajuste.
  * **Baixo (< 70%):** Problemas frequentes de contraste que comprometem o uso autônomo.

---

### **MI3.2: Taxa de Eficácia na Seleção de Texto**
* **Característica:** Capacidade de Interação (ISO/IEC 25010:2023) [ISO/IEC 2023]
* **Subcaracterística:** Operabilidade
* **Questão Relacionada:** Q3-I (Acessibilidade e Seleção de Texto)
* **Definição Operacional:** Proporção de tentativas de seleção de texto na página que resultam em tradução corretamente iniciada, sem erro de área selecionada e com feedback visual claro do modo de seleção.
* **Unidade:** Percentual (%)
* **Coleta:** Teste de uso com no mínimo 8 participantes, em portais com layouts diferentes, registrando o total de seleções tentadas e as falhas. Gravação de tela.
* **Cálculo:** `X = (A / B) * 100`
  * $A$ = seleções de texto efetuadas com sucesso
  * $B$ = total de tentativas de seleção executadas
* **Fonte de Dados:** Observação direta e gravações de tela do teste.
* **Interpretação:**
  * **Alto (≥ 90%):** Seleção precisa, sem interferência do layout hospedeiro.
  * **Baixo (< 70%):** Falhas frequentes, com possível falta de feedback visual.

---

## 2. Eficiência de Desempenho (*Performance Efficiency*)

### **ME1.1: Tempo Médio de Resposta da Tradução**
* **Característica:** Eficiência de Desempenho (ISO/IEC 25010:2023) [ISO and IEC 2005]
* **Questão Relacionada:** Q1-E (Comportamento Temporal)
* **Definição Operacional:** Tempo decorrido entre a seleção do texto pelo usuário e o início da exibição do primeiro sinal do avatar, estando o motor 3D já carregado.
* **Unidade:** Segundos (s)
* **Coleta:** Execução de 10 frases padronizadas em dois perfis de rede simulados (Banda Larga e 3G via *DevTools* do navegador). Registrar a média, o tempo máximo e o desvio padrão.
* **Cálculo:** `X = B - A`  
  * $A$ = instante da seleção do texto  
  * $B$ = instante da exibição do primeiro sinal em Libras
* **Fonte de Dados:** Linha do tempo (*Network/Performance*) do *Developer Tools* do navegador e gravação de tela.
* **Interpretação:**  
  * **Baixo (≤ 3s):** Resposta rápida e fluida.  
  * **Alto (> 6s em 3G):** Resposta lenta com alto risco de o usuário abandonar a ferramenta.

---

### **ME2.1: Utilização Média de CPU**
* **Característica:** Eficiência de Desempenho (ISO/IEC 25010:2023) [ISO and IEC 2005]
* **Questão Relacionada:** Q2-E (Utilização de Recursos de Hardware)
* **Definição Operacional:** Percentual da capacidade de processamento disponível utilizado pelos processos do navegador enquanto o avatar sinaliza continuamente em um dispositivo com recursos de hardware limitados.
* **Unidade:** Percentual (%)
* **Coleta:** Sessões de 2 minutos de tradução contínua, repetidas 5 vezes, em um ambiente de hardware modesto sem outras aplicações abertas. Registrar a média e o pico de consumo.
* **Cálculo:** `X = B / (A × N) * 100`  
  * $A$ = tempo total de operação/tradução, em segundos  
  * $B$ = tempo de CPU efetivamente consumido por todos os processos do navegador, em segundos  
  * $N$ = número de *threads* (núcleos lógicos) disponíveis ao navegador  
  * O navegador roda em vários processos ao mesmo tempo e pode acumular mais de 1 segundo de CPU por segundo. A divisão por N mantém X entre 0% e 100%. Sem restrição de núcleos, N é o total de *threads* do processador, e X fica próximo do uso de CPU mostrado pelo Gerenciador de Tarefas.
* **Fonte de Dados:** Contadores de tempo de CPU por processo do sistema operacional (os mesmos do Gerenciador de Tarefas e do Monitor de Desempenho), lidos por script a cada segundo.
* **Interpretação:**  
  * **Baixo (≤ 30%):** Execução leve e estável em aparelhos simples.  
  * **Alto (> 50%):** Consumo excessivo com risco de travamentos e animação truncada.

---

### **ME3.1: Volume de Dados Consumidos e Taxa de Reuso do Cache**
* **Característica:** Eficiência de Desempenho (ISO/IEC 25010:2023) [ISO and IEC 2005]
* **Questão Relacionada:** Q3-E (Uso de Rede e Cache)
* **Definição Operacional:** Quantidade de dados de rede transferidos durante interações repetidas (alteração de velocidade, repetição e dicionário) e percentual de requisições atendidas via cache local.
* **Unidade:** Megabytes (MB) e Percentual (%)
* **Coleta:** Executar um roteiro padrão na aba *Network* das ferramentas do desenvolvedor (reproduzir tradução, alterar velocidade 0.5x/2x, repetir e consultar 5 termos no dicionário) e reexecutar a mesma sequência.
* **Cálculo:** `X = (A / B) * 100`  
  * $A$ = requisições atendidas pelo cache local (status 304 / *from cache*) na reexecução  
  * $B$ = total de requisições disparadas pelas ações
* **Fonte de Dados:** Aba *Network* (*DevTools*) e relatórios do *Service Worker/Local Storage*.
* **Interpretação:**  
  * **Alto (100% de cache em repetições):** Reuso eficiente sem tráfego adicional na rede.  
  * **Baixo (< 80%):** Download redundante de assets, consumindo dados desnecessariamente.

---

## 3. Flexibilidade (*Flexibility*)

### **MF1.1: Adaptabilidade a Navegadores**
* **Característica:** Flexibilidade (ISO/IEC 25010:2023) [ISO and IEC 2005]
* **Questão Relacionada:** Q1-F (Adaptabilidade entre Multiplataformas)
* **Definição Operacional:** Proporção das funcionalidades do escopo (tradutor, dicionário, velocidade, repetição, regionalismo) que funcionam perfeitamente em cada navegador avaliado.
* **Unidade:** Percentual (%)
* **Coleta:** Roteiro fixo de testes executado nos navegadores Chrome, Firefox, Edge e Safari, em ambientes *desktop* e *mobile*. Uma execução completa por função e ambiente com captura de evidências.
* **Cálculo:** `X = (1 - (A / B)) * 100`  
  * $A$ = quantidade de funções que apresentaram falha  
  * $B$ = total de funções testadas
* **Fonte de Dados:** Checklist de execução por navegador com capturas de tela e logs de erro.
* **Interpretação:**  
  * **Alto (≥ 95%):** O widget opera de forma consistente em diferentes navegadores e dispositivos.  
  * **Baixo (< 80%):** Exige adaptações específicas para operar em determinados navegadores/plataformas.

---

### **MF2.1: Taxa de Integração sem Ajuste Manual**
* **Característica:** Flexibilidade (ISO/IEC 25010:2023) [ISO and IEC 2005]
* **Questão Relacionada:** Q2-F (Instalabilidade e Conflitos de Integração)
* **Definição Operacional:** Proporção de portais web em que a instalação padrão do widget funciona imediatamente, sem a necessidade de correções manuais de CSS ou scripts.
* **Unidade:** Percentual (%)
* **Coleta:** Amostra de no mínimo 10 portais do Governo Federal. Injetar o widget com o código padrão de instalação e registrar os conflitos encontrados (ex.: sobreposição de *z-index*, bloqueio de scripts).
* **Cálculo:** `X = (A / B) * 100`  
  * $A$ = portais que não precisaram de nenhum ajuste manual  
  * $B$ = total de portais testados
* **Fonte de Dados:** Ficha de registro de integração por portal com capturas de tela.
* **Interpretação:**  
  * **Alto (≥ 80%):** Integração *plug-and-play* fluida.  
  * **Baixo (< 60%):** Cada portal exige esforço manual e retrabalho do desenvolvedor.

---

## 4. Manutenibilidade (*Maintainability*)

### **MM1.1: Taxa de Reuso de Componentes do Design System**
* **Característica:** Manutenibilidade (ISO/IEC 25010:2023) [ISO and IEC 2005]
* **Questão Relacionada:** Q1-M (Reuso do Design System)
* **Definição Operacional:** Proporção de componentes da interface gráfica do widget que reutilizam diretamente as definições padronizadas do *Design System* do projeto.
* **Unidade:** Percentual (%)
* **Coleta:** Mapeamento do código-fonte do widget (diretório `src/widget/components/`). Mapear todos os elementos visuais (botões, sliders, modais) e verificar o reuso das definições padronizadas vs. código customizado/duplicado.
* **Cálculo:** `X = (A / B) * 100`  
  * $A$ = componentes de UI que reutilizam o Design System  
  * $B$ = total de componentes de UI mapeados no widget
* **Fonte de Dados:** Análise estática do código-fonte no repositório oficial do projeto.
* **Interpretação:**  
  * **Alto (≥ 70%):** Boa padronização visual e facilitada manutenção da interface.  
  * **Baixo (< 50%):** Código visual duplicado ou fora do padrão, aumentando o débito técnico.

---

### **MM2.1: Média de Módulos Impactados por Alteração**
* **Característica:** Manutenibilidade (ISO/IEC 25010:2023) [ISO and IEC 2005]
* **Questão Relacionada:** Q2-M (Modularidade e Desacoplamento)
* **Definição Operacional:** Número médio de módulos distintos do código-fonte que precisam ser alterados a cada modificação nos controles do player de vídeo.
* **Unidade:** Quantidade de módulos por alteração (módulos/alteração)
* **Coleta:** Filtrar o histórico do Git pelos caminhos dos controles do player e listar os arquivos e módulos modificados em cada *commit* ou *Pull Request*.
* **Cálculo:** `X = (Soma dos módulos distintos alterados) / (Número de alterações analisadas)`
* **Fonte de Dados:** Histórico de *commits* e *Pull Requests* do repositório oficial.
* **Interpretação:**  
  * **Baixo (≤ 2):** Alto desacoplamento; modificações são isoladas e seguras.  
  * **Alto (> 4):** Uma alteração se espalha por vários arquivos, encarecendo a manutenção.

---

### **MM3.1: Tempo Médio de Correção e Merge**
* **Característica:** Manutenibilidade (ISO/IEC 25010:2023) [ISO/IEC 2023]
* **Questão Relacionada:** Q3-M (Modificabilidade e Tempo de Ciclo)
* **Definição Operacional:** Tempo médio decorrido entre a abertura de uma *issue* de incompatibilidade (quebra de funcionamento em navegadores ou portais) e o *merge* do *Pull Request* que a resolve no repositório oficial.
* **Unidade:** Dias
* **Coleta:** No repositório oficial (*vlibras-web-browsers*), selecionar as *issues* fechadas por *merge* de *Pull Request* relacionadas à quebra de funcionamento em navegadores ou portais. Para cada uma, registrar a data de abertura da *issue* e a data de *merge* do PR vinculado. Considerar *issue* de incompatibilidade aquela que descreve falha de funcionamento do widget em determinado navegador, dispositivo ou portal (critério aplicado de forma igual a todas as *issues* e registrado na planilha de coleta). Registrar também o número de *issues* analisadas e, por transparência, a mediana.
* **Cálculo:** `X = (Σ (Dᵢ_merge − Dᵢ_abertura)) / N`
  * D<sub>i_abertura</sub> = data de abertura da *issue* *i*
  * D<sub>i_merge</sub> = data de *merge* do PR que resolveu a *issue* *i*
  * $N$ = número de *issues* analisadas
* **Fonte de Dados:** *Issues* e *Pull Requests* do repositório oficial no GitHub (interface web, GitHub CLI ou API).
* **Interpretação:**  
  * **Baixo (≤ 7 dias):** Correções rápidas; a comunidade passa pouco tempo desassistida.  
  * **Intermediário (8 a 15 dias):** Tempo aceitável, mas com possíveis gargalos no processo de correção.  
  * **Alto (> 15 dias):** Processo de manutenção lento e burocrático.

---

## Referências

* **FanJiang, Y.-Y. and Wu, C.-H. (2009).** *Towards a multi-agents architecture for gqm measurement system*. In 2009 Ninth International Conference on Hybrid Intelligent Systems, volume 1, pages 277-280[cite: 19].
* **Galin, D. (2018).** *Software Quality Factors (Attributes)*, pages 23–44.
* **ISO/IEC (2005).** *ISO/IEC 25010:2005: Systems and software engineering — Systems and software quality requirements and evaluation (SQuaRE) — System and software quality models*[cite: 19].
* **Washizaki, H. and Olszewska, J. I., editors (2024).** *Guide to the Software Engineering Body of Knowledge (SWEBOK Guide)*, Version 4.0. IEEE Computer Society, Piscataway, New Jersey[cite: 19].

## Histórico de Versões

| Versão | Data       | Descrição da alteração        | Autor(a)         | Revisor(a) |
| ------ | ---------- | ----------------------------- | ---------------- | ---------- |
| 0.1    | 23/10/2026 | Adicionando métricas          | Mariana Pereira  |            |
| 0.2    | 15/11/2026 | Divide MI3.1 em MI3.1 e MI3.2 | Ludmila O. Nunes |            |
| 0.3    | 16/11/2026 | ME2.1: fórmula normalizada pelo número de *threads* (N) e fonte de dados | Amanda C. Lima |            |
