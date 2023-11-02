import './styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import bemMixin from './mixins/bem'

createApp(App).mixin(bemMixin).use(i18n).use(router).mount('#app')
