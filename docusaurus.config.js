// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "UTN FRA - Programación II",
    tagline:
        "Información, apuntes y ejercicios para las asignaturas Programación II y Laboratorio de Computación II.",
    favicon: 'base/favicon.ico',

    // Set the production url of your site here
    url: 'https://marioar.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/utn-prog-ii/',

    // staticDirectories: ['static'], // 'public', 

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'marioar', // Usually your GitHub org/user name.
    projectName: 'utn-prog-ii', // Usually your repo name.

    onBrokenLinks: 'log', // throw
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'es',
        locales: ['es'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
            image: 'img/docusaurus-social-card.jpg',

            navbar: {
                title: 'Programación II',
                logo: {
                    alt: "UTN Logo",
                    src: "base/logo.svg",
                },
                items: [
                    {
                        to: "docs/introduccion/descripcion-materia",
                        activeBasePath: "docs/introduccion/",
                        label: "Introducción a la materia",
                        position: "left",
                    },
                    {
                        to: "docs/clases/programa",
                        activeBasePath: "docs/clases/",
                        label: "Clases",
                        position: "left",
                    },
                    /*         {
                              to: "docs/evaluaciones",
                              activeBasePath: "docs/evaluaciones",
                              label: "Evaluaciones",
                              position: "left",
                            }, */
                    {
                        href: "http://www.sistemas-utnfra.com.ar/#/home",
                        label: "Tecnicaturas UTN-Fra",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: "Secciones",
                        items: [
                            {
                                label: "Introducción a la materia",
                                to: "docs/introduccion/descripcion-materia",
                            },
                            {
                                label: "Clases",
                                to: "docs/clases/programa",
                            },
                            /*             {
                                          label: "Evaluaciones",
                                          to: "docs/evaluaciones",
                                        } */
                        ],
                    },
                    {
                        title: "Comunidad",
                        items: [
                            {
                                label: "Slack",
                                href:
                                    "https://join.slack.com/t/utn-prog2/shared_invite/zt-a7q2ca78-HDLaVbxtzMLSzVrxct3xWg",
                            },
                            {
                                label: "Google Classroom",
                                href: "https://classroom.google.com/u/0/c/NTQ1MTg2NjM5NDBa",
                            },
                        ],
                    },
                    {
                        title: "Material adicional",
                        items: [
                            {
                                label: "Microsoft Docs",
                                href: "https://docs.microsoft.com/es-es/dotnet/",
                            },
                            {
                                label: "Github - Programación y Laboratorio II",
                                href: "https://github.com/codeutnfra/programacion_2_laboratorio_2",
                            },
                            {
                                label: "You Tube - UTN FRA",
                                href: "https://www.youtube.com/channel/UC2Z2ADpWCh4aTHz07K3os2g/featured",
                            }
                        ],
                    },
                    {
                        title: "Reportar un error",
                        items: [
                            {
                                html: "<a href=\"https://github.com/mauricioCerizza/utn-prog-ii/issues/new\" target=\"_blank\"><img src=\"https://i.im.ge/2021/08/08/01RjT.md.png\" alt=\"Reportar error\" width=60% height=60%></img></a>",
                            }
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} UTN Facultad Regional Avellaneda. Built with <a href=\"https://docusaurus.io/\" target=\"_blank\">Docusaurus</a>.`,

            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ["csharp"],
            },
        }),
};

module.exports = config;
