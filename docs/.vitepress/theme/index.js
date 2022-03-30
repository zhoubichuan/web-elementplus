import DefaultTheme from "vitepress/theme";
import FeedBack from "./components/Feedback.vue";
import "./index.css"
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("FeedBack", FeedBack);
  },
};
