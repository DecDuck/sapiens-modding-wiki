export default {
  title: "Sapiens Modding Wiki",
  description: "Mod docs for the Sapiens video game.",
  base: "/sapiens-modding-wiki/",
  themeConfig: {
    nav: [
      { text: 'Sapiens Website', link: 'https://www.playsapiens.com/' },
      { text: 'Official Sapiens Wiki', link: 'https://wiki.playsapiens.com/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SirLich/sapiens-modding-wiki' },
      { icon: 'discord', link: 'https://discord.gg/WnN8hj2Fyg' }
    ],
    sidebar: [
      {
        text: 'Guides',
        collapsible: false,
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      },
      {
        text: 'Documentation',
        collapsible: true,
        items: [
          { text: 'Mobs', link: '/docs/mobs' },
          { text: 'C++ Bridges', link: '/docs/bridge' },
          { text: 'Cheats', link: '/docs/cheat' },
          { text: 'User Interface', link: '/docs/adding-ui' },
          { text: 'Game Saves', link: '/docs/game-saves' },
          { text: 'Input', link: '/docs/handling-input' },
          { text: 'Notes', link: '/docs/notes' },
          { text: 'Threading', link: '/docs/thread-management' },
          { text: 'Timers', link: '/docs/timers' },

        ]
      },
      {
        text: 'Hammerstone',
        collapsible: false,
        items: [
          { text: 'Introduction', link: '/hammerstone/introduction' },
          { text: 'Getting Started', link: '/hammerstone/getting-started' }
        ]
      }
    ]
  }
};
