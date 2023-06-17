// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Huxley Sales',
  tagline: 'Welcome to HUXLEY Sales! Huxley Sales is a sales group owned by lvstnick. Huxley Sales offers a variety of different types of Bus Parts produced by developers and sold in the group. We also offer many different buses here. Feel free to purchase anything. Remember to read out Terms and Regulations!',
  favicon: 'img/favicon.ico',
  
  customFields: {
    hubSecret: process.env.HUB_SECRET_KEY
  },

  // Set the production url of your site here
  url: 'https://huxleysales.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'huxleysales', // Usually your GitHub org/user name.
  projectName: 'huxleysales.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: "en",
        maxSearchResults: 10,
        // style:
      }
    ],
      async function myPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/huxleysales/website',
        },
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editCurrentVersion: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'OPZUAAFIIO',

      //   // Public API key: it is safe to commit it
      //   apiKey: '6b771e57a2b846a30ad28a619c9d62f7',

      //   indexName: 'huxley',

      //   // Optional: see doc section below
      //   contextualSearch: true,

      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: 'external\\.com|domain\\.com',

      //   // Optional: Algolia search parameters
      //   searchParameters: {},

      //   //... other Algolia params
      // },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Huxley Sales',
        logo: {
          alt: 'Huxley Sales Logo',
          src: 'img/huxleysales.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'index',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            href: '/products', 
            label: 'Products', 
            position: 'left'
          },
          {
            type: 'dropdown',
            label: 'Docs',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                label: 'School Buses',
                sidebarId: 'buses',
              },
              {
                type: 'docSidebar',
                label: 'Bus Spawner',
                sidebarId: 'spawner',
              },
            ]
          },
          {
            href: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            href: 'https://discord.gg/yHH2cynGzD',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://www.roblox.com/groups/16419590/Huxley-Sales#!/about',
            label: 'Roblox Group',
            position: 'right'
          },
          {
            href: 'https://github.com/huxleysales',
            label: 'Github',
            position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'School & Transit Buses',
                to: '/docs/buses'
              },
              {
                label: 'Products',
                to: '/docs/products'
              },
              {
                label: 'Bus Spawner',
                to: '/docs/spawner'
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Roblox',
                href: 'https://www.roblox.com/groups/16419590/Huxley-Sales#!/about',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/yHH2cynGzD',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/huxleysales',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Huxley Sales. Built with Docusaurus.`,
      },
      announcementBar: {
        id: 'discord',
        content:
          '<strong> This documentation is in ongoing progress | Need help? <a href="https://discord.gg/yHH2cynGzD">Join our discord!</a></strong>',
        // backgroundColor: '#131314',
        // textColor: '#25c2a0',
        isCloseable: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua']
      },
    }),
};

module.exports = config;
