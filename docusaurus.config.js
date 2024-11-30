// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NeutralAXIS",
  tagline:
    '"NeutralAXIS: Exploring urban development, infrastructure, and global connectivity. Join the conversation on the future of cities! 🌆🚇🌐"',
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://NeutralAXIS.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "NeutralAXIS", // Usually your GitHub org/user name.
  projectName: "NeutralAXIS.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

      plugins: [require.resolve('docusaurus-lunr-search')],


  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:'/',
          sidebarPath: "./sidebars.js",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/NeutralAXIS/NeutralAXIS.github.io/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "NeutralAXIS",
        logo: {
          alt: "NeutralAXIS",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Explore",
          // },
          {to: '/ETABS/ETABS%20API/Introduction', label: 'Etabs API', position: 'left'},
          {
            href: "https://github.com/orgs/NeutralAXIS/discussions",
            label: "Ask 💬",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Topics",
            items: [
              {to: '/ETABS/ETABS%20API/Introduction', label: 'Etabs API'},
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Stack Overflow",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
              // },
              {
                label: "Discussions",
                href: "https://github.com/orgs/NeutralAXIS/discussions",
              },
              // {
              //   label: "X",
              //   href: "https://x.com/NeutralAXIS",
              // },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/NeutralAXIS",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NeutralAXIS, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
