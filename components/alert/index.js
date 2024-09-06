import Alert from './src/alert.vue'
/* istanbul ignore next */
Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert)
}
export default Alert
