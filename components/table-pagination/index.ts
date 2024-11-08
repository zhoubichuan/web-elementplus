import TablePagination from './src/table-pagination.vue'
// @ts-ignore
TablePagination.install = function (Vue) {
  Vue.component(TablePagination.name, TablePagination)
}
export default TablePagination
