module.exports = {
  title: "elementplus",
  base: "/web-elementplus/",
  dest: "public",
  lang: "zh-CN",
  lastUpdated: true,
  description: "elementplus",
  hmr: { overlay: false },
  themeConfig: {
    repo: 'https://github.com/zhoubichuan/web-elementplus', // 源码地址
    repoLabel: '查看源码', // (查看源码的)组件名称
    docsBranch: 'master', // git 源仓库 仓库分支
    editLinks: true, // 编辑链接
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    editLinkText: '在github上编辑此页',
    sidebarDepth: 2,
    lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
    nav: require('./nav.js'),
    sidebar: require('./sidebar.js'),
    searchMaxSuggestoins: 10,
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api']
      }
    },
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
