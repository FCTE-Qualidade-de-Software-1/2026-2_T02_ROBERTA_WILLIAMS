---
sidebar_position: 2
---

# 2. Questões de Pesquisa, Hipóteses e Métricas (GQM)

Com base nas diretrizes de medição e qualidade de software [Galin 2018, ISO/IEC 2023, Washizaki and Olszewska 2024], os objetivos da avaliação foram desdobrados em questões de pesquisa e hipóteses operacionais no método GQM.

---

## 2.1. Capacidade de Interação

### **Q1-CI: Operabilidade e Autonomia**
* **Questão:** Qual é o grau de autonomia de usuários surdos não alfabetizados em português para utilizar as funcionalidades de vídeo (velocidade, repetição, escolha de regionalismo) e o dicionário guiando-se apenas pela interface visual?
* **Hipótese (H1):** Pelo menos 80% dos usuários conseguem operar os controles básicos de vídeo (repetir e mudar velocidade) pelos ícones, mas menos de 50% conseguem localizar e filtrar sinais no dicionário ou alterar o regionalismo sem depender de leitura em português.
* **Métrica Associada:** `MCI1.1` — Taxa de conclusão de tarefas sem assistência (%).

### **Q2-CI: Feedback Visual e Proteção contra Erros**
* **Questão:** Como os alertas de erro e feedbacks do sistema (ex.: falha ao selecionar um texto na página ou erro de carregamento) são apresentados e compreendidos por usuários que dependem de recursos visuais alternativos ao texto?
* **Hipótese (H2):** Mais de 70% das mensagens de erro ou status do widget são exibidas apenas em texto em português (sem sinalização do avatar ou ícones explicativos), impedindo que cerca de 24,5% de usuários surdos não alfabetizados compreendam a falha.
* **Métrica Associada:** `MCI2.1` — Proporção de mensagens exibidas apenas em texto (%).

### **Q3-CI: Acessibilidade e Seleção de Texto**
* **Questão:** Qual é a eficácia da seleção de textos e a conformidade de contraste visual dos elementos do widget quando sobrepostos aos diferentes layouts das páginas do Governo Federal?
* **Hipótese (H3):** O widget mantém conformidade de contraste (nível AA da WCAG) em 90% de sua interface própria, mas em 30% das tentativas de uso o usuário comete erros ao selecionar blocos de texto na página web por falta de feedback visual claro do modo de seleção.
* **Métrica Associada:** `MCI3.1` — Taxa de conformidade de contraste e eficácia de seleção (%).

---

## 2.2. Eficiência de Desempenho

### **Q1-E: Comportamento Temporal sob Diferentes Redes**
* **Questão:** Qual é o tempo de resposta entre a seleção de um texto pelo usuário e o início da reprodução da tradução em Libras sob diferentes condições de rede (banda larga vs. conexões móveis limitadas como 3G)?
* **Hipótese (H1):** Em conexões rápidas, a resposta ocorre em menos de 3 segundos; porém, em redes limitadas (3G), o carregamento inicial do motor 3D ultrapassa 15 segundos e a geração de frases sofre atrasos superiores a 6 segundos.
* **Métrica Associada:** `ME1.1` — Tempo médio de resposta da tradução (segundos).

### **Q2-E: Consumo de Recursos de Hardware**
* **Questão:** Qual é o consumo de processamento (CPU) e memória (RAM) do navegador durante a renderização contínua do avatar em dispositivos com recursos de hardware limitados?
* **Hipótese (H2):** Em dispositivos de entrada (hardware modesto), a renderização gráfica reduz a taxa de quadros para menos de 20 FPS e eleva o uso de CPU acima de 50%, prejudicando a execução fluida da animação.
* **Métrica Associada:** `ME2.1` — Utilização média e de pico de CPU (%).

### **Q3-E: Tráfego de Rede e Uso de Cache**
* **Questão:** Qual é o volume de dados de rede consumido ao utilizar os recursos de repetição de vídeo, alteração de velocidade e consulta ao dicionário?
* **Hipótese (H3):** As ações de repetição e mudança de velocidade de um trecho já traduzido reutilizam o cache local em 100% dos casos, não gerando tráfego de rede adicional.
* **Métrica Associada:** `ME3.1` — Volume de dados consumidos e taxa de reuso do cache (%).

---

## 2.3. Flexibilidade

### **Q1-F: Adaptabilidade entre Multiplataformas**
* **Questão:** Qual é a proporção de funcionalidades do escopo (tradutor, dicionário, controles de velocidade/repetição e regionalismo) que operam sem falhas nos principais navegadores (Chrome, Firefox, Edge, Safari) em ambientes desktop e mobile?
* **Hipótese (H1):** O widget apresenta 95% de compatibilidade funcional nos navegadores desktop, mas apresenta falhas de redimensionamento de tela e de captura de seleção de texto via toque (*touch*) em 40% dos navegadores em dispositivos móveis.
* **Métrica Associada:** `MF1.1` — Adaptabilidade a navegadores (%).

### **Q2-F: Frequência de Conflitos na Instalabilidade**
* **Questão:** Qual é a frequência de problemas de integração (instalabilidade) que exigem adaptações específicas de código ou estilo ao incorporar o widget em diferentes portais web?
* **Hipótese (H2):** Em 80% das páginas a instalação padrão funciona imediatamente, mas em 20% dos portais o desenvolvedor precisa realizar ajustes manuais devido a conflitos de CSS (ex.: sobreposição de *z-index*) ou bloqueios de execução de scripts.
* **Métrica Associada:** `MF2.1` — Taxa de integração sem ajuste manual (%).

---

## 2.4. Manutenibilidade

### **Q1-M: Reuso do Design System**
* **Questão:** Qual é o percentual de componentes de interface do widget que reutilizam diretamente os elementos padronizados no Design System do projeto?
* **Hipótese (H1):** Pelo menos 70% dos elementos visuais seguem os componentes do Design System, enquanto até 30% possuem código CSS/HTML duplicado ou customizado fora do padrão.
* **Métrica Associada:** `MM1.1` — Taxa de reuso de componentes do Design System (%).

### **Q2-M: Modularidade e Desacoplamento**
* **Questão:** Qual é o grau de modularidade e desacoplamento do código ao implementar uma melhoria ou corrigir uma falha nas funcionalidades do player de vídeo?
* **Hipótese (H2):** Uma alteração em um controle de interface (como o botão de velocidade ou regionalismo) exige modificações em no máximo 2 módulos distintos, demonstrando baixo acoplamento arquitetural.
* **Métrica Associada:** `MM2.1` — Média de módulos impactados por alteração (quantidade).

### **Q3-M: Esforço Médio de Correção**
* **Questão:** Qual é o esforço médio (ou tempo de ciclo no repositório oficial) para atualizar o código e corrigir incompatibilidades geradas por mudanças nas plataformas do Governo Federal ou atualizações de navegadores?
* **Hipótese (H3):** Problemas críticos de quebra de funcionamento em navegadores levam em média menos de 7 dias para serem corrigidos e mesclados (*merged*) no repositório oficial.
* **Métrica Associada:** `MM3.1` — Tempo médio de correção e *merge* (dias).

---

## Referências

* **Galin, D. (2018).** *Software Quality Factors (Attributes)*, pages 23–44.
* **ISO/IEC (2023).** *ISO/IEC 25010:2023 Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model*.
* **Washizaki, H. and Olszewska, J. I., editors (2024).** *Guide to the Software Engineering Body of Knowledge (SWEBOK Guide)*, Version 4.0. IEEE Computer Society, Piscataway, New Jersey.

## Histórico de Versões

| Versão | Data | Descrição da alteração | Autor(a) | Revisor(a) |
| ------ | ---- | ---------------------- | -------- | ---------- |
| 0.1 | 23/10/2026 | Adicionado as questões | Mariana Pereira | |
