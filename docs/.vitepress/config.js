const base = process.env.BASE || '/'
const nav = require('./configs/nav')
const sidebar = require('./configs/sidebar')

module.exports = {
  title: 'VitePress',
  description: 'Life is short, Keep it simple.',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],
  outDir: "web-vue3",
  base,
  themeConfig: {
    repo: 'https://github.com/zhoubichuan/web-vue3',
    logo: '/logo.svg',
    docsDir: 'docs',
    docsBranch: 'master',
    // algolia: {
    //   appId: 'X51HWTCQJJ',
    //   apiKey: 'ca20f15eb8a667898b65d13f4213ae3d',
    //   indexName: 'vitepress-demo'
    // },
    nav,
    sidebar,
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
  },
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    }
  }
}
