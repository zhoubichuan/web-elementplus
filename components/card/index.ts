import Card from './src/card.vue'
import type { App } from 'vue'
Card.install = function (app: App) {
  app.component(Card.name, Card)
}
export default Card
