---
sidebar_position: 2
sidebar_label: MM2.1 - Modularidade e desacoplamento
---

# MM2.1: Média de Módulos Impactados por Alteração

Registro da medição da métrica MM2.1 no VLibras Web Browsers: o que foi medido, como, com quais decisões, o que resultou e quais são as limitações.

## 1. Métrica

**MM2.1: Média de Módulos Impactados por Alteração** (unidade: módulos/alteração). A definição completa está no plano de medição.

- **Cálculo:** `X = (soma dos módulos distintos alterados) / (número de alterações analisadas)`
- **Interpretação:** Baixo (≤ 2) indica alto desacoplamento; Alto (> 4) indica que a alteração se espalha por vários módulos.

## 2. Objeto medido e ambiente

| Item                            | Valor                                                    |
| ------------------------------- | -------------------------------------------------------- |
| Repositório                     | https://github.com/spbgovbr-vlibras/vlibras-web-browsers |
| Branch analisada                | `dev`                                                    |
| Commit de referência (HEAD)     | `1ef06d01529f00f0baffae6b1d9eab6381775a92`               |
| Total de commits no repositório | 1.284                                                    |
| Sistema operacional             | Windows ([PREENCHER versão])                             |
| Git                             | 2.47.1.windows.2                                         |
| Python                          | 3.11.9                                                   |
| Data e hora da medição          | 17/11/2026 19:00                                         |
| Avaliador                       | Mariana Pereira da Silva                                 |

> **Desvio em relação ao plano.** O plano define como objeto a versão 7.12.2 do widget. A análise foi executada sobre o HEAD da branch `dev`, e não sobre a tag `v7.12.2`. Existem as tags `v7.12.0` a `v7.12.3`, e o `dev` tem 114 commits posteriores à `v7.12.0`. Portanto, a análise pode incluir alterações posteriores à versão 7.12.2. 

## 3. Procedimento

Seguiu o protocolo definido no plano de medição:

1. **Identificar os caminhos dos controles** (velocidade, repetição e regionalismo).
2. **Listar os commits** que alteraram esses caminhos com `git log`.
3. **Para cada commit**, listar os módulos alterados.
4. **Contar os módulos distintos** por alteração e calcular a média.

Critério de parada: todas as alterações do histórico nos caminhos selecionados analisadas. Uma única análise de todo o histórico disponível dos caminhos.

## 4. Decisões de medição

### 4.1 Caminhos dos controles

Os caminhos foram identificados por busca textual por `speed`, `veloc`, `repeat`, `repetir` e `regional` na árvore atual do repositório.

| Controle               | Caminho                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| Velocidade e repetição | `src/widget/components/controls` (inclui `speed-option.tsx` e `main-action/`)                         |
| Regionalismo           | `src/widget/dialogs/settings/regionalism-field.tsx`                                                   |
| Regionalismo           | `src/widget/dialogs/settings/regionalism-list-item.tsx`                                               |
| Testes do regionalismo | `src/widget/dialogs/settings/__tests__/regionalism-field.test.tsx` e `regionalism-list-item.test.tsx` |


A pasta `src/widget/components/controls` inteira foi usada, o que inclui outros controles (emoções, legendas, barra de progresso, etc.), além dos três do plano.

### 4.2 Unidade de alteração

A alteração é o **commit** (merges excluídos com `--no-merges`). Não foi feito agrupamento por Pull Request, pois o repositório usa GitLab/MR e o histórico não tem um padrão confiável de PR identificável.

### 4.3 O que é módulo

Para cada commit, foram considerados **todos os arquivos alterados no commit**, e não só os dos caminhos filtrados. Isso é necessário porque o `git log --name-only -- <caminhos>` lista apenas os arquivos dentro dos caminhos filtrados e subestimaria os módulos.

Cada arquivo foi classificado por prefixo de caminho, nos módulos descritos em [Tipo de produto](https://fcte-qualidade-de-software-1.github.io/2026-2_T02_ROBERTA_WILLIAMS/docs/fase-1/tipo-produto-descricao):

| Prefixo                         | Módulo        |
| ------------------------------- | ------------- |
| `src/widget/`                   | Widget        |
| `src/player/` e `public/unity/` | Player        |
| `src/core/` e `src/common/`     | Core e Common |
| `src/loader/`                   | Loader        |
| `extensions/`                   | Extensão      |

Um módulo conta **uma vez por alteração**, independentemente de quantos arquivos dele mudaram.

### 4.4 O que não foi contado como módulo

Os itens abaixo foram descartados (`--drop-modules`), por serem configuração, build, assets ou demonstração, e não módulos de código da arquitetura:

- arquivos soltos em `src/` (`main.tsx`, `data/`, `assets/`, `test/`, `@types/`, `vite-env.d.ts`);
- arquivos da raiz (`package.json`, `pnpm-lock.yaml`, `biome.json`, `vitest.config.ts`, `index.html`, etc.);
- `demo/`, `public/` (exceto `public/unity/`), `scripts/` e `.vscode/`.

Os bundles gerados pelo build em `extensions/<navegador>/app/` foram excluídos da contagem (`--exclude`), porque têm nome com hash e mudam a cada build.

## 5. Script

Script em Python que automatiza os passos 2 a 4 do protocolo e gera o CSV e o resumo: [Script de analise](../dados-brutos/MM2.1/script/mm2_1_modulos_por_alteracao.py)


## 6. Comando executado


```powershell
python mm2_1_modulos_por_alteracao.py `
  --paths src/widget/components/controls `
          src/widget/dialogs/settings/regionalism-field.tsx `
          src/widget/dialogs/settings/regionalism-list-item.tsx `
          src/widget/dialogs/settings/__tests__/regionalism-field.test.tsx `
          src/widget/dialogs/settings/__tests__/regionalism-list-item.test.tsx `
  --exclude "^extensions/[^/]+/app/" `
  --drop-modules "src,Raiz,demo,public,scripts,.vscode"
```

## 7. Resultados

### 7.1 Resumo

| Indicador                 | Valor                      |
| ------------------------- | -------------------------- |
| Alterações analisadas     | 102                        |
| Soma de módulos distintos | 161                        |
| **MM2.1 (média)**         | **1,58 módulos/alteração** |
| Mediana                   | 1                          |
| Classificação             | Baixo (≤ 2)                |

### 7.3 Distribuição

| Módulos por alteração | Alterações |
| --------------------- | ---------- |
| 1                     | 55         |
| 2                     | 36         |
| 3                     | 10         |
| 4                     | 1          |

### 7.4 Dados brutos

| Arquivo | Descrição |
|---|---|
| [CSV com alterações analisadas](../dados-brutos/MM2.1/resultados/MM2.1_2026-11-17_alteracoes.csv) | Uma linha por alteração: commit, arquivos, módulos e quantidade |
| [Resumo da análise](../dados-brutos/MM2.1/resultados/MM2.1_2026-11-17_resumo.txt) | Comando usado e indicadores |

Evidências armazenadas em [Fase 4 - Dados Brutos](../dados-brutos/MM2.1).

## 8. Análise

- **Resultado.** A média de 1,58 módulos por alteração fica dentro da faixa "Baixo (≤ 2)". A mediana é 1, e mais da metade das alterações (55 de 102) atingiu um único módulo.
- **Padrão de acoplamento.** Nas alterações com mais de um módulo, o par mais comum é Widget com Player (a interface chamando as ações e o estado do player) ou Widget com Core e Common (estilos globais, hooks e configuração). Isso é coerente com o papel dos controles, que disparam comandos ao player.
- **Alterações maiores.** Apenas 11 alterações atingiram 3 ou 4 módulos. A de 4 módulos é o commit `74ca760` ("raw: backup", 80 arquivos), uma reorganização ampla, e não uma modificação isolada de controle. Outros commits com dezenas ou centenas de arquivos (como `8f09d9f`, `a245282` e `a2b772d`) são movimentações de ícones e estrutura.
- **Faixa intermediária.** O plano nomeia as faixas "Baixo (≤ 2)" e "Alto (> 4)". 

## 9. Limitações 

1. **Versão medida.** A análise usou o HEAD de `dev`, e não a tag `v7.12.2` definida no plano. Alterações posteriores à versão podem estar incluídas.
2. **Escopo temporal.** O commit mais antigo que atinge os caminhos é o `74ca760` (12/03/2026). O histórico anterior (a partir da "Release 2.0") não foi analisado, pois tinha outra organização de arquivos. Não foi verificado se os controles existiam antes sob outros nomes.
3. **Caminhos atuais.** O filtro por caminho só encontra commits que tocaram arquivos com o nome atual. Alterações feitas em caminhos antigos (por exemplo `src/data/regionalism.ts` e `src/widget/screens/regionalism/`) só entram se o mesmo commit também tocou um caminho atual. Isso pode subestimar a contagem, principalmente do regionalismo.
4. **Abrangência dos controles.** A pasta `controls/` inclui controles além de velocidade, repetição e regionalismo. Commits que alteram só esses outros controles entraram na amostra.
5. **Arquivos descartados.** `src/data/` continha código (emoções e regionalismo), depois movido para `src/common/data` e `src/player/data`, e foi descartado como "arquivo solto de `src/`". Tratá-lo como Core e Common elevaria a média para cerca de 1,64 (estimativa manual, sem reexecução do script), sem mudar a classificação.
6. **Commits e não PRs.** Um PR com vários commits aparece como várias alterações.
7. **Commits amplos.** Alterações de reestruturação com dezenas de arquivos foram mantidas na amostra, sem remoção, e podem inflar a média.

## 10. Registro de desvios

| # | Desvio | Motivo | Efeito |
|---|---|---|---|
| 1 | Primeira execução sem descartar arquivos fora da Tabela 4 | O mapa de módulos não cobria `src/` solto, raiz, `demo`, `public`, `scripts` e `.vscode`, que apareceram como módulos | Média 1,95 (199 módulos em 102 alterações), classificação Baixo |
| 2 | Execução final com `--drop-modules` | Corrigir o item anterior | Média 1,58 (161 em 102), classificação Baixo |
| 3 | Análise no HEAD de `dev`, e não na tag `v7.12.2` | Decisão de não repetir a execução limitada à tag | Pode incluir alterações posteriores à versão medida |
| 4 | Exclusão de bundles gerados (`extensions/*/app/`) | São artefatos de build com nome com hash | Evita inflar artificialmente o módulo Extensão |
| 5 | Uso da pasta `controls/` inteira | Não foi identificado um arquivo exclusivo para a repetição | Pode incluir outros controles na amostra |

## 11. Como reproduzir

```powershell
git clone https://github.com/spbgovbr-vlibras/vlibras-web-browsers.git
cd vlibras-web-browsers
git checkout 1ef06d01529f00f0baffae6b1d9eab6381775a92
```

Depois, execute o script da seção 5 com o comando da seção 6, a partir da raiz do repositório. Requer apenas Git e Python 3, sem bibliotecas adicionais. Como o repositório continua recebendo commits, use o hash acima para reproduzir o mesmo resultado.

## Histórico de Versões

| Versão | Data       | Descrição da alteração   | Autor(a)                 | Revisor(a) |
| ------ | ---------- | ------------------------ | ------------------------ | ---------- |
| 1.0    | 18/11/2026 | Registro da documentação | Mariana Pereira da Silva |            |
