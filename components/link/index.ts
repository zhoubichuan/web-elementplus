import Link from './src/link'
/* istanbul ignore next */
Link.install = function (Vue) {
  Vue.component(Link.name, Link)
}
export default Link
