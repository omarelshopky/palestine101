import './styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import bemMixin from './mixins/bem'

createApp(App).mixin(bemMixin).mount('#app')
