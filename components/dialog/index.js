import Dialog from './src/dialog'
/* istanbul ignore next */
Dialog.install = function (Vue) {
  Vue.component(Dialog.name, Dialog)
}
export default Dialog
