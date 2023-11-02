import { createI18n } from 'vue-i18n'

import en from './locales/en.json' // Only import the default one

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false, // ensure the plugin works with Vue 3
    globalInjection: true,
    messages: { en }
})
