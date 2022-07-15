import DefaultTheme from "vitepress/theme";
import FeedBack from "./components/Feedback.vue";
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components.js'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("FeedBack", FeedBack);
    registerComponents(app)
  }
}