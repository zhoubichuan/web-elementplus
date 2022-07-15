module.exports = {
  title: "elementplus",
  base: "/web-elementplus/",
  dest: "public",
  lang: "zh-CN",
  lastUpdated: true,
  description: "elementplus",
  hmr: { overlay: false },
  themeConfig: {
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api']
      }
    },
    nav: require('./nav.js'),
    sidebar: require('./sidebar.js'),
  },
  markdown: {
    config: (md) => {
      const {
        demoBlockPlugin
      } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    },
    lineNumbers: true
  }

};
