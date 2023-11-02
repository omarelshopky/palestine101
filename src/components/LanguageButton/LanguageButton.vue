<script setup>
import { useRouter } from 'vue-router'
import translation from '@/i18n/translation'

const props = defineProps({
    locale: {
        type: String,
        required: true
    }
})

const router = useRouter()

const switchLanguage = async () => {
    await translation.switchLanguage(props.locale)

    try {
        await router.replace({ params: { locale: props.locale } })
    } catch (e) {
        router.push('/')
    }
}
</script>

<template>
    <button
        :class="bem({ mod: { active: translation.currentLocale == locale } })"
        @click="switchLanguage"
    >
        {{ $t(`locale.${locale}`) }}
    </button>
</template>

<style lang="scss">
@import '@/styles/_media.scss';
@import './LanguageButton.style.scss';
</style>
