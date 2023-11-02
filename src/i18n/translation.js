import i18n from '@/i18n'
import { nextTick } from 'vue'

const translation = {
    get supportedLocales() {
        return import.meta.env.VITE_SUPPORTED_LOCALES.split(',')
    },

    get currentLocale() {
        return i18n.global.locale.value
    },

    set currentLocale(locale) {
        i18n.global.locale.value = locale
    },

    get defaultLocale() {
        return import.meta.env.VITE_DEFAULT_LOCALE
    },

    async switchLanguage(locale) {
        await this.loadLocaleMessages(locale)
        this.currentLocale = locale
        document.querySelector('html').setAttribute('lang', locale)
        document.querySelector('meta[property="og:locale"]').setAttribute('content', locale)
    },

    isLocaleSupported(locale) {
        return this.supportedLocales.includes(locale)
    },

    getUserLocale() {
        const locale =
            window.navigator.language || window.navigator.userLanguage || this.defaultLocale

        return {
            locale: locale,
            localeNoRegion: locale.split('-')[0]
        }
    },

    guessDefaultLocale() {
        const userPreferredLocale = this.getUserLocale()

        if (this.isLocaleSupported(userPreferredLocale.locale)) {
            return userPreferredLocale.locale
        }

        if (this.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
            return userPreferredLocale.localeNoRegion
        }

        return this.defaultLocale
    },

    async routeMiddleware(to, _from, next) {
        const paramLocale = to.params.locale

        if (!translation.isLocaleSupported(paramLocale)) {
            return next(translation.guessDefaultLocale())
        }

        await translation.switchLanguage(paramLocale)

        return next()
    },

    async loadLocaleMessages(locale) {
        if (!i18n.global.availableLocales.includes(locale)) {
            const messages = await import(`@/i18n/locales/${locale}.json`)
            i18n.global.setLocaleMessage(locale, messages.default)
        }

        return nextTick()
    }
}

export default translation
