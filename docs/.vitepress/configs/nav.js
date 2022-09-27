const { getPath } = require('./utils')

module.exports = [
  { text: 'vue3.x基础', link: '/vue3/home', activeMatch: getPath('^/vue3/') },
  { text: 'vue3.x全家桶', link: '/components/button', activeMatch: getPath('^/components/') },
  { text: "组件", link: "/components/my-button/"},
  { text: "ElementPlus", link: "/element/base/"},
  { text: 'vue3.x源码', link: '/api/' },
]
