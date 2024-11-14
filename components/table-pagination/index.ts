import TablePagination from './src/table.vue'
// @ts-ignore
TablePagination.install = function (Vue) {
  Vue.component(TablePagination.name, TablePagination)
}
export default TablePagination
