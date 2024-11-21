import TablePagination from './src/table.vue'
// @ts-ignore
TablePagination.install = function (app: App) {
  app.component(TablePagination.name, TablePagination)
}
export default TablePagination
