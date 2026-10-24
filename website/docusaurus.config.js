// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const REPO_URL =
  'https://github.com/FCTE-Qualidade-de-Software-1/2026-2_T02_ROBERTA_WILLIAMS';

// Atualizar a cada entrega (critério F2-C10: versão e data no rodapé).
const SITE_VERSION = '1.0';
const LAST_UPDATE = '24/10/2026';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Roberta Williams',
  tagline: 'Qualidades de Software 1',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://fcte-qualidade-de-software-1.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/2026-2_T02_ROBERTA_WILLIAMS/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fcte-qualidade-de-software-1', // Usually your GitHub org/user name.
  projectName: '2026-2_T02_ROBERTA_WILLIAMS', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: `${REPO_URL}/tree/main/website/`,
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Roberta Williams',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {
            href: REPO_URL,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Avaliação',
            items: [
              {label: 'Fase 1 – Requisitos', to: '/docs/fase-1'},
              {label: 'Fase 2 – Especificação (GQM)', to: '/docs/fase-2'},
            ],
          },
          {
            title: 'Projeto',
            items: [
              {label: 'Gestão (PSM/CID)', to: '/docs/gestao'},
              {label: 'Entrega 1', to: '/docs/sobre/entregas/entrega-1'},
              {label: 'Tabela de contribuição', to: '/docs/sobre/tabela-de-contribuicao'},
            ],
          },
          {
            title: 'Repositório',
            items: [
              {label: 'GitHub', href: REPO_URL},
              {label: 'Releases', href: `${REPO_URL}/releases`},
            ],
          },
        ],
        copyright: `Equipe Roberta Williams · FGA0315 Qualidade de Software 1 · UnB · Versão ${SITE_VERSION} · Atualizado em ${LAST_UPDATE}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
