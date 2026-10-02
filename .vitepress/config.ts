import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Skuul',
  base: '/skuul.org/',
  description: 'School management documentation',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Current development', link: '/current/introduction' },
      { text: 'V2 releases', link: '/v2/introduction' }
    ],
    sidebar: {
      '/current/': [
        {
          text: 'Current development',
          items: [
            { text: 'Introduction', link: '/current/introduction' }
          ]
        },
        {
          text: 'Getting started',
          items: [
            { text: 'Requirements', link: '/current/getting-started/requirements' },
            { text: 'Local installation', link: '/current/getting-started/installation' },
            { text: 'Deployment', link: '/current/getting-started/deployment' },
            { text: 'Updating', link: '/current/getting-started/updating' }
          ]
        },
        {
          text: 'Maintenance',
          items: [
            { text: 'Backups and monitoring', link: '/current/operations' },
            { text: 'Development', link: '/current/development' }
          ]
        }
      ],
      '/v2/': [
        {
          text: 'V2 releases',
          items: [
            { text: 'Introduction', link: '/v2/introduction' }
          ]
        },
        {
          text: 'Getting started',
          items: [
            { text: 'Requirements', link: '/v2/getting-started/requirements' },
            { text: 'Installation', link: '/v2/getting-started/installation' },
            { text: 'Deployment', link: '/v2/getting-started/deployment' },
            { text: 'Updating', link: '/v2/getting-started/updating' }
          ]
        }
      ]
    },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yungifez/skuul' }
    ]
  }
})
