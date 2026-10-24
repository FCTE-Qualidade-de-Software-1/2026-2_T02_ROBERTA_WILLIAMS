---
sidebar_position: 2
---

# 2. Questões de Pesquisa, Hipóteses e Métricas (GQM)

Com base nas diretrizes de medição e qualidade de software [Galin 2018, ISO/IEC 2023, Washizaki and Olszewska 2024], os objetivos da avaliação foram desdobrados em questões de pesquisa e hipóteses operacionais no método GQM.

---

## 2.1. Capacidade de Interação (*Interaction Capability*)

* **Q1-I (Operabilidade e Autonomia):**  
  Qual é o grau de autonomia de usuários surdos não alfabetizados em português para utilizar as funcionalidades de vídeo (velocidade, repetição, escolha de regionalismo) e o dicionário guiando-se apenas pela interface visual?

* **Q2-I (Feedback Visual e Proteção contra Erros):**  
  Como os alertas de erro e feedbacks do sistema (ex.: falha ao selecionar um texto na página ou erro de carregamento) são apresentados e compreendidos por usuários que dependem de recursos visuais alternativos ao texto?

* **Q3-I (Acessibilidade e Seleção de Texto):**  
  Qual é a eficácia da seleção de textos e a conformidade de contraste visual dos elementos do widget quando sobrepostos aos diferentes layouts das páginas do Governo Federal?

---

## 2.2. Eficiência de Desempenho (*Performance Efficiency*)

* **Q1-E (Comportamento Temporal):**  
  Qual é o tempo de resposta entre a seleção de um texto pelo usuário e o início da reprodução da tradução em Libras sob diferentes condições de rede (banda larga vs. conexões móveis limitadas como 3G)?

* **Q2-E (Utilização de Recursos de Hardware):**  
  Qual é o consumo de processamento (CPU) e memória (RAM) do navegador durante a renderização contínua do avatar em dispositivos com recursos de hardware limitados?

* **Q3-E (Uso de Rede e Cache):**  
  Qual é o volume de dados de rede consumido ao utilizar os recursos de repetição de vídeo, alteração de velocidade e consulta ao dicionário?

---

## 2.3. Flexibilidade (*Flexibility*)

* **Q1-F (Adaptabilidade entre Multiplataformas):**  
  Qual é a proporção de funcionalidades do escopo (tradutor, dicionário, controles de velocidade/repetição e regionalismo) que operam sem falhas nos principais navegadores (Chrome, Firefox, Edge, Safari) em ambientes desktop e mobile?

* **Q2-F (Instalabilidade e Conflitos de Integração):**  
  Qual é a frequência de problemas de integração (instalabilidade) que exigem adaptações específicas de código ou estilo ao incorporar o widget em diferentes portais web?

---

## 2.4. Manutenibilidade (*Maintainability*)

* **Q1-M (Reuso do Design System):**  
  Qual é o percentual de componentes de interface do widget que reutilizam diretamente os elementos padronizados no Design System do projeto?

* **Q2-M (Modularidade e Desacoplamento):**  
  Qual é o grau de modularidade e desacoplamento do código ao implementar uma melhoria ou corrigir uma falha nas funcionalidades do player de vídeo?

* **Q3-M (Modificabilidade e Tempo de Ciclo):**  
  Qual é o esforço médio (ou tempo de ciclo no repositório oficial) para atualizar o código e corrigir incompatibilidades geradas por mudanças nas plataformas do Governo Federal ou atualizações de navegadores?

---

## Referências

* **Galin, D. (2018).** *Software Quality Factors (Attributes)*, pages 23–44.
* **ISO/IEC (2023).** *ISO/IEC 25010:2023 Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model*.
* **Washizaki, H. and Olszewska, J. I., editors (2024).** *Guide to the Software Engineering Body of Knowledge (SWEBOK Guide)*, Version 4.0. IEEE Computer Society, Piscataway, New Jersey.

## Histórico de Versões

| Versão | Data | Descrição da alteração | Autor(a) | Revisor(a) |
| ------ | ---- | ---------------------- | -------- | ---------- |
| 0.1 | 23/10/2026 | Adicionado as questões | Mariana Pereira | |
