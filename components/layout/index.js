import Layout from './src/layout.vue'
/* istanbul ignore next */
Layout.install = function (Vue) {
  Vue.component(Layout.name, Layout)
}
export default Layout
