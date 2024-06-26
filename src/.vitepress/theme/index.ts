import DefaultTheme from 'vitepress/theme'; //引入默认主题
import demo from '../demoblock/demo.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import WebElementPlus from '../../../components/index.js'
// 导出vitepress配置
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('demo', demo);
        app.use(ElementPlus);
        app.use(WebElementPlus);
    }
}