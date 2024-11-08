import DefaultTheme from 'vitepress/theme'; //引入默认主题
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './config.css'
import WebElementPlus from '../../../components/index.ts'
import {
    NaiveUIContainer
} from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
// 导出vitepress配置
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(ElementPlus);
        app.use(WebElementPlus);
        app.component('demo-preview', NaiveUIContainer)
    }
}