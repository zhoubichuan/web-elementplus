const { getPath } = require('./utils')

module.exports = [
  { text: '基础知识', link: '/vue3/home', activeMatch: getPath('^/vue3/') },
  { text: 'vue3.x全家桶', link: '/components/tabs', activeMatch: getPath('^/components/') },
  { text: "Plus组件二次封装", link: "/src/my-button/index", activeMatch: getPath('^/src/') },
  { text: "ElementPlus", link: "/element/base/" },
  { text: 'vue3.x源码', link: '/api/' },
]
