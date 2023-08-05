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

    sidebar: {
      'v2' : [
          { 
            text: 'Skuul V2'  , items: [
                { text: 'Introduction'  , link: '/v2/introduction' },
            ]
          },
          {
            text: 'Getting Started', 
            collapsed: true,
            items: [
                { text: 'Requirements', link: '/v2/getting-started/requirements' },
                { text: 'Installation', link: '/v2/getting-started/installation' },
                { text: 'Deployment', link: '/v2/getting-started/deployment' },
                { text: 'Updating', link: '/v2/getting-started/updating' },
            ]
          }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yungifez/skuul' }
    ]
  }
})
