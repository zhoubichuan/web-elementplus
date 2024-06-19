import PageContainer from './src/page-container'
/* istanbul ignore next */
PageContainer.install = function (Vue) {
  Vue.component(PageContainer.name, PageContainer)
}
export default PageContainer
