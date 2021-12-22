// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const LOGO_IMAGE = 'img/logo.png'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kube-green',
  tagline: 'Make your k8s clusters more green',
  url: 'https://kube-green.github.io',
  baseUrl: '/kube-green/',
  favicon: LOGO_IMAGE,
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  organizationName: 'kube-green',
  projectName: 'website',
  deploymentBranch: 'main',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/kube-green/website/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/kube-green/website/edit/main/website/blog/',
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
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: LOGO_IMAGE,
      announcementBar: {
        id: 'support-us',
        content: 'If you like kube-green, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/kube-green/kube-green">GitHub</a> ⭐',
      },
      navbar: {
        title: 'kube-green',
        logo: {
          alt: 'kube-green Logo',
          src: LOGO_IMAGE,
          srcDark: 'img/logo-dark.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/tutorial', label: 'Tutorial', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/kube-green/kube-green',
            position: 'right',
            label: 'GitHub',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
