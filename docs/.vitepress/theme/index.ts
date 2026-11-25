import DefaultTheme from 'vitepress/theme'
import RedocViewer from './components/RedocViewer.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RedocViewer', RedocViewer)
  }
}
