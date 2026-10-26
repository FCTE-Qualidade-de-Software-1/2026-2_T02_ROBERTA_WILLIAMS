---
sidebar_position: 5
sidebar_label: Pontuação e critérios
---

# Pontuação e Critérios de Avaliação

Para consolidar os dados quantitativos coletados pelas métricas e permitir a tomada de decisão pelos *stakeholders*, foi estabelecido um sistema de pontuação e critérios de aceite padronizado de acordo com as diretrizes da norma **ISO/IEC 25010:2023** e o método **GQM**.

---

## 1. Escala de Pontuação Individual por Métrica

Cada métrica coletada é convertida em uma pontuação de 1 a 5 pontos com base nos limites definidos na sua interpretação operacional:

| Pontuação | Classificação    | Descrição                                                                                               |
| :-------: | :--------------- | :------------------------------------------------------------------------------------------------------ |
|   **5**   | **Excelente**    | O resultado atende plenamente ao cenário ideal de qualidade, superando a meta estabelecida.             |
|   **4**   | **Bom**          | O resultado atende aos critérios mínimos de qualidade esperados sem impactos significativos ao usuário. |
|   **3**   | **Regular**      | O resultado atinge o limite aceitável, mas apresenta pequenos gargalos que exigem atenção.              |
|   **2**   | **Insuficiente** | O resultado não atinge os critérios mínimos e compromete parcialmente a experiência ou manutenção.      |
|   **1**   | **Crítico**      | O resultado indica uma falha grave ou impedimento direto de uso/integração do software.                 |

---

## 2. Matriz de Critérios e Limites por Métrica

A tabela a seguir apresenta os limites numéricos para atribuição da pontuação em cada métrica da avaliação:

| Métrica                                     | Característica           | Ruim (1 a 2) | Aceitável / Regular (3) | Satisfatório / Ideal (4 a 5) |
| :------------------------------------------ | :----------------------- | :----------: | :---------------------: | :--------------------------: |
| **MI1.1** (Conclusão de Tarefas)            | Capacidade de Interação  |    < 50%     |        50% a 79%        |            ≥ 80%             |
| **MI2.1** (Mensagens Apenas em Texto)       | Capacidade de Interação  |    > 70%     |        31% a 70%        |            ≤ 30%             |
| **MI3.1** (Contraste e Seleção)             | Capacidade de Interação  |    < 70%     |        70% a 89%        |            ≥ 90%             |
| **ME1.1** (Tempo de Resposta em 3G)         | Eficiência de Desempenho |     > 6s     |        3.1s a 6s        |             ≤ 3s             |
| **ME2.1** (Uso Médio de CPU)                | Eficiência de Desempenho |    > 50%     |        31% a 50%        |            ≤ 30%             |
| **ME3.1** (Reuso de Cache)                  | Eficiência de Desempenho |    < 80%     |        80% a 94%        |            ≥ 95%             |
| **MF1.1** (Adaptabilidade Multiplataforma)  | Flexibilidade            |    < 80%     |        80% a 94%        |            ≥ 95%             |
| **MF2.1** (Integração sem Ajuste Manual)    | Flexibilidade            |    < 60%     |        60% a 79%        |            ≥ 80%             |
| **MM1.1** (Reuso do Design System)          | Manutenibilidade         |    < 50%     |        50% a 69%        |            ≥ 70%             |
| **MM2.1** (Módulos Atingidos por Alteração) | Manutenibilidade         |     > 4      |          3 a 4          |             ≤ 2              |
| **MM3.1** (Tempo Médio de Correção)         | Manutenibilidade         |  > 15 dias   |       8 a 15 dias       |           ≤ 7 dias           |

---

## 3. Método de Agregação e Pontuação por Característica

A pontuação final de cada característica de qualidade é calculada através da média aritmética simples das notas obtidas pelas suas métricas associadas:

`P_C = (Soma das pontuações das métricas) / n`

Onde:
* `P_C`: Pontuação da Característica de Qualidade (de 1.0 a 5.0)
* `P_M`: Pontuação individual de cada métrica da característica
* `n`: Número total de métricas da característica

---

## 4. Critério de Aceite e Nível Geral de Qualidade

O software **VLibras (versão plugin)** é considerado **Aprovado na Avaliação de Qualidade** se atingir os dois critérios de aceite globais:

1. **Pontuação Geral do Produto:** Média global das 4 características igual ou superior a **3.5 pontos**.
2. **Ausência de Bloqueio Crítico:** Nenhum indicador individual pode obter pontuação igual a **1 (Crítico)**.

### Faixas de Classificação do Produto
* [1.0 - 2.4]  -> Reprovado (Nível crítico de qualidade)
* [2.5 - 3.4]  -> Necessita otimizações (Aprovado com ressalvas)
* [3.5 - 4.4]  -> Aprovado (Bom nível de qualidade)
* [4.5 - 5.0]  -> Excelência em qualidade de software

## Histórico de Versões

| Versão | Data       | Descrição da alteração                        | Autor(a)        | Revisor(a) |
| ------ | ---------- | --------------------------------------------- | --------------- | ---------- |
| 0.1    | 23/10/2026 | Adicionado pontuação e critérios de avaliação | Mariana Pereira |            |
