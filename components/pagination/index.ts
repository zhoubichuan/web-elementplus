import Pagination from './src/pagination.vue'
/* istanbul ignore next */
Pagination.install = function (Vue) {
  Vue.component(Pagination.name, Pagination)
}
export default Pagination
