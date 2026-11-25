import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'

import ApiStats from './components/ApiStats.vue'
import MethodBadge from './components/MethodBadge.vue'
import ApiCard from './components/ApiCard.vue'
import DocTag from './components/DocTag.vue'

import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('ApiStats', ApiStats)
    app.component('MethodBadge', MethodBadge)
    app.component('ApiCard', ApiCard)
    app.component('DocTag', DocTag)
  }
}
