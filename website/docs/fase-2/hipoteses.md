---
sidebar_position: 3
---

# Hipóteses de Avaliação (GQM)

As hipóteses representam as suposições operacionais do nível analítico da abordagem *Goal-Question-Metric* (GQM) [Washizaki and Olszewska 2024]. Cada hipótese estabelece uma expectativa mensurável para responder às questões de pesquisa formuladas para o **VLibras**, tomando como base os atributos da norma **ISO/IEC 25010:2023** [ISO/IEC 2023] e os fatores de qualidade de software [Galin 2018].

---

## 1. Capacidade de Interação (*Interaction Capability*)

* **H1-I (Operabilidade e Autonomia):**  
  Pelo menos 80% dos usuários conseguem operar os controles básicos de vídeo (repetir e mudar velocidade) guiando-se exclusivamente pelos ícones visuais, mas menos de 50% conseguem localizar e filtrar sinais no dicionário ou alterar o regionalismo sem depender da leitura de textos em português.

* **H2-I (Feedback Visual e Proteção contra Erros):**  
  Mais de 70% das mensagens de erro ou status do widget são exibidas apenas em texto em português (sem sinalização por avatar ou ícones explicativos), impedindo que cerca de 24,5% dos usuários surdos não alfabetizados compreendam a causa da falha.

* **H3-I (Acessibilidade e Seleção de Texto):**  
  O widget mantém conformidade de contraste visual (nível AA da WCAG) em 90% de sua interface própria, mas em 30% das tentativas de uso o usuário comete erros ao selecionar blocos de texto na página web devido à ausência de feedback visual claro do modo de seleção.

---

## 2. Eficiência de Desempenho (*Performance Efficiency*)

* **H1-E (Comportamento Temporal sob Diferentes Redes):**  
  Em conexões de alta velocidade (banda larga), o início da tradução ocorre em menos de 3 segundos; contudo, em redes limitadas (3G), o carregamento inicial do motor 3D ultrapassa 15 segundos e a geração de frases sofre atrasos superiores a 6 segundos.

* **H2-E (Utilização de Recursos de Hardware):**  
  Em dispositivos de entrada (*hardware* modesto), a renderização gráfica contínua do avatar reduz a taxa de quadros para menos de 20 FPS e eleva o uso de CPU do navegador para valores acima de 50%, prejudicando a fluidez da animação.

* **H3-E (Uso de Rede e Cache):**  
  As ações de repetição e alteração de velocidade de um trecho de texto já traduzido reutilizam o cache local em 100% dos casos, não gerando tráfego de dados adicional na rede.

---

## 3. Flexibilidade (*Flexibility*)

* **H1-F (Adaptabilidade entre Multiplataformas):**  
  O widget apresenta 95% de compatibilidade funcional nos navegadores em ambiente *desktop*, mas exibe falhas de redimensionamento de tela e de captura de seleção de texto via toque (*touch*) em 40% dos navegadores em dispositivos móveis.

* **H2-F (Instalabilidade e Conflitos de Integração):**  
  Em 80% das páginas web governamentais a instalação padrão do widget funciona imediatamente (*plug-and-play*), mas em 20% dos portais o desenvolvedor precisa realizar ajustes manuais devido a conflitos de CSS (ex.: sobreposição de *z-index*) ou bloqueios na execução de scripts.

---

## 4. Manutenibilidade (*Maintainability*)

* **H1-M (Reuso do Design System):**  
  Pelo menos 70% dos elementos visuais da interface seguem os componentes padronizados do *Design System*, enquanto até 30% possuem código CSS/HTML duplicado ou customizado fora do padrão.

* **H2-M (Modularidade e Desacoplamento):**  
  Uma alteração em um controle de interface do player de vídeo (como o botão de velocidade ou troca de regionalismo) exige modificações em no máximo 2 módulos distintos, demonstrando baixo acoplamento arquitetural.

* **H3-M (Modificabilidade e Tempo de Ciclo):**  
  Problemas críticos de quebra de funcionamento em navegadores levam em média menos de 7 dias para serem corrigidos e mesclados (*merged*) no repositório oficial do projeto.

---

## Referências

* **Galin, D. (2018).** *Software Quality Factors (Attributes)*, pages 23–44.
* **ISO/IEC (2023).** *ISO/IEC 25010:2023 Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model*.
* **Washizaki, H. and Olszewska, J. I., editors (2024).** *Guide to the Software Engineering Body of Knowledge (SWEBOK Guide)*, Version 4.0. IEEE Computer Society, Piscataway, New Jersey.

## Histórico de Versões

| Versão | Data       | Descrição da alteração | Autor(a)        | Revisor(a) |
| ------ | ---------- | ---------------------- | --------------- | ---------- |
| 0.1    | 23/10/2026 | Adicionando hipoteses  | Mariana Pereira |            |
