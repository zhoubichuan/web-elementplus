import FormView from './src/form-view.vue'
/* istanbul ignore next */
FormView.install = function (Vue) {
  Vue.component(FormView.name, FormView)
}
export default FormView
