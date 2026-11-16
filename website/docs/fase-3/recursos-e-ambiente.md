---
sidebar_position: 2
sidebar_label: Recursos e ambiente
---

# Recursos e ambiente

Esta página registra o produto, os dispositivos, os navegadores, as redes e as ferramentas usados nas medições, para que elas possam ser repetidas. Os [protocolos](./metodo-de-avaliacao.md) apontam para cá.

## Produto avaliado

| Item             | Definição                                                                        |
| ---------------- | -------------------------------------------------------------------------------- |
| Produto          | VLibras Web Browsers: widget                                                     |
| Versão           | 7.12.2, de 04/09/2026                                                            |
| Repositório      | [vlibras-web-browsers](https://github.com/spbgovbr-vlibras/vlibras-web-browsers) |
| Serviços remotos | Tradução e dicionário do VLibras, acessados apenas como cliente                  |

**Origem do widget por métrica.** O widget publicado (código padrão de instalação) é usado quando a métrica envolve páginas reais ou comparação entre ambientes. O código do repositório é usado nas análises de código e de histórico. A versão carregada é conferida e registrada no cabeçalho de cada execução.

| Métrica                                  | Origem                                          |
| ---------------------------------------- | ----------------------------------------------- |
| MF2.1, MI3.2                             | Widget publicado, em portais do Governo Federal |
| MI3.1, ME1.1, ME2.1, ME3.1, MF1.1, MI1.1 | Widget publicado, na página de teste            |
| MI2.1, MM1.1, MM2.1, MM3.1               | Código e histórico do repositório               |

## Dispositivos

**Tabela 1.** Dispositivos usados nas medições.

| ID  | Integrante | Dispositivo                   | Sistema operacional               | CPU                  | RAM   | Métricas     |
| --- | ---------- | ----------------------------- | --------------------------------- | -------------------- | ----- | ------------ |
| DI1  | Amanda     | Desktop                       | Windows 11                        | AMD Ryzen 7 7800X3D  | 16 GB | ME2.1        |
| DI2  | Geovane    | Desktop                       | Windows 11 Pro (build 10.0.26200) | AMD Ryzen 7 5700X3D  | 16 GB | ME3.1        |
| DI3  | Rodrigo    | Notebook Acer Nitro 5         | Windows 10                        | Intel Core i7-7700HQ | 16 GB | MF1.1        |
| DI4  | Rodrigo    | iPhone 14                     | iOS 26.6.2                        | Apple A15 Bionic     | 6 GB  | MF1.1        |
| DI5  | Rafael     | Notebook Acer Predator Helios | Windows 11                        | Intel Core i7-11800H | 16 GB | ME1.1, MM1.1 |

As métricas de análise de código e de histórico (MI2.1, MM1.1, MM2.1, MM3.1) não dependem de dispositivo específico e usam a máquina de cada responsável, com Git e GitHub CLI.

## Navegadores e versões

As versões são registradas no dia de cada teste, e nenhuma atualização é feita durante a execução.

**Tabela 2.** Navegadores por dispositivo.

| Dispositivo | Navegador       | Versão                           |
| ----------- | --------------- | -------------------------------- |
| DI1          | Google Chrome   | 157.0.8103.79                    |
| DI2          | Brave           | 1.99.57 (Chromium 157.0.8103.79) |
| DI3          | Google Chrome   | 157.0.8103.79 (64 bits)          |
| DI3          | Mozilla Firefox | 160.0 (64 bits)                  |
| DI3          | Microsoft Edge  | 157.0.4341.60 (64 bits)          |
| DI4          | Safari          | Integrado ao iOS 26.6.2          |
| DI5          | Google Chrome   | 157.0.8103.51 (64 bits)          |

## Ambientes de teste da MF1.1

**Tabela 3.** Ambientes da matriz de adaptabilidade.

| ID     | Navegador       | Plataforma          | Dispositivo |
| ------ | --------------- | ------------------- | ----------- |
| ENV-01 | Google Chrome   | Desktop, Windows 10 | DI3          |
| ENV-02 | Mozilla Firefox | Desktop, Windows 10 | DI3          |
| ENV-03 | Microsoft Edge  | Desktop, Windows 10 | DI3          |
| ENV-04 | Safari          | Mobile, iOS         | DI4          |

São 4 ambientes e 5 funções por ambiente, o que dá B total = 20 execuções. No iOS, Chrome e Edge usam o motor do Safari (WebKit), então não são ambientes distintos.

## Perfil de hardware e rede

**Hardware modesto (ME2.1).** O Ryzen 7 7800X3D (DI1) é um processador de alto desempenho e não representa o cenário de hardware limitado. Por isso, a ME2.1 é executada em duas condições, registradas separadamente:

| Condição                  | Dispositivo               | Procedimento                                                    |
| ------------------------- | ------------------------- | --------------------------------------------------------------- |
| Hardware modesto real     | DI3 (Core i7-7700HQ, 2017) | Execução direta, na tomada                                      |
| Simulação de CPU limitada | DI1                        | *Throttling* de CPU do DevTools em 4x, declarado nos resultados |

**Perfis de rede (ME1.1).**

| Perfil      | Definição                                                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Banda larga | Sem *throttling*, em Wi-Fi ou cabo estável. Antes de cada rodada, registrar a velocidade, com teste de velocidade (download, upload e latência) |
| 3G          | Perfil de 3G do DevTools. Registrar o nome exato do perfil, que varia conforme a versão do navegador, e usar o mesmo em todas as medições       |

## Ferramentas

| Ferramenta                                           | Uso                           | Versão                   |
| ---------------------------------------------------- | ----------------------------- | ------------------------ |
| DevTools (Network, Performance, Performance Monitor) | ME1.1, ME2.1, ME3.1, MF1.1    | A do navegador           |
| Lighthouse                                           | MI3.1                         | A do Chrome              |
| axe DevTools (extensão)                              | MI3.1                         | A registrar              |
| Medidor de contraste (seletor de cor do DevTools)    | MI3.1                         | A do navegador           |
| Git e GitHub CLI                                     | MM2.1, MM3.1                  | A registrar              |
| Planilha compartilhada                               | Registro de todas as métricas | N/A                      |
| Gravação de tela                                     | MI1.1, MI3.2, ME1.1           | A do sistema operacional |

## Condições gerais de execução

- Aba anônima ou privada, cache limpo e extensões de bloqueio desativadas.
- Em DI2, desativar os bloqueios (*Shields*) do Brave no site de teste, porque eles podem bloquear requisições e alterar o volume e o cache medidos. Alternativamente, executar a ME3.1 no Chrome.
- Notebooks na tomada, com o modo de energia registrado, e demais aplicações fechadas.
- Rede registrada em cada execução, e testes interrompidos por falha de rede são repetidos.

## Avaliadores

Integrantes da equipe, estudantes de graduação da Universidade de Brasília na disciplina Qualidade de Software 1 (FGA0315), sem experiência prévia como avaliadores profissionais. Os protocolos usam apenas ferramentas gratuitas e instruções passo a passo. Para a MM1.1, dois integrantes classificam os componentes de forma independente.

Nos testes de usabilidade (MI1.1 e MI3.2), as pessoas participantes são usuárias de Libras, como descrito em [Massa de dados](./massa-de-dados.md).

## Limitações do ambiente

- A MF2.1 e a MI3.2 foram feitas só no computador, porque não é prático injetar o widget em portais pelo celular.

## Referências

> ISO/IEC. **ISO/IEC 25040:2024**: systems and software engineering: systems and software quality requirements and evaluation (SQuaRE): quality evaluation framework. 2. ed. Geneva: ISO/IEC, 2024.

## Histórico de Versões

| Versão | Data       | Descrição da alteração                                                          | Autor(a)         | Revisor(a) |
| ------ | ---------- | ------------------------------------------------------------------------------- | ---------------- | ---------- |
| 0.1    | 15/11/2026 | Inserção do produto, dos dispositivos, dos ambientes, da rede e das ferramentas | Ludmila O. Nunes |            |
| 0.2    | 16/11/2026 | Ajusta siglas de dispositivos                                                   | Ludmila O. Nunes |            |