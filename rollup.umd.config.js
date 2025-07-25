import baseConfig, { file } from './rollup.config.js'

export default {
  ...baseConfig,
  output: {
    name: 'LegoComponents',
    file: file('umd'),
    format: 'umd',
    // 第三方库的全局变量名称
    globals: {
      'vue': "Vue",
      'lodash-es': '_'
    },
    // 组件库的全局变量名称
    exports: 'named'
  },
}