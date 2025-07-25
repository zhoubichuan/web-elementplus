import baseConfig, { name, file } from './rollup.config.js'

export default {
  ...baseConfig,
  output: {
    name,
    file: file('esm'),
    format: 'es'
  }
}