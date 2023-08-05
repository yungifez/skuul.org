import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Skuul.org",
  description: "A multi school management system",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/v2/introduction' }
    ],

    sidebar: [
      {
        text: 'Skuul V2 Documentation',
        items: [
          { text: 'Introduction', link: '/v2/introduction' },
          { text: 'Getting Started', items: [
              { text: 'Requirements', link: '/v2/getting-started/requirements' },
              { text: 'Installation', link: '/v2/getting-started/installation' },
              { text: 'Deployment', link: '/v2/getting-started/deployment' },
          ]},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yungifez/skuul' }
    ]
  }
})
