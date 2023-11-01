<script setup>
import LanguageButton from 'components/LanguageButton/LanguageButton.vue';

const supportedLanguages = [
    {
        id: 'en',
        label: 'English'
    },
    {
        id: 'fr',
        label: 'French'
    },
    {
        id: 'fr',
        label: 'French'
    },
    {
        id: 'fr',
        label: 'French'
    },
    {
        id: 'fr',
        label: 'French'
    },
    {
        id: 'fr',
        label: 'French'
    },
    {
        id: 'fr',
        label: 'French'
    },
    {
        id: 'fr',
        label: 'French'
    },
    {
        id: 'fr',
        label: 'French'
    },
    {
        id: 'fr',
        label: 'French'
    },
    {
        id: 'ar',
        label: 'العربية'
    }
];
</script>

<template>
    <div :class="bem({ element: 'Wrapper' })">
        <div :class="bem({ element: 'Content' })">
            <span :class="bem({ element: 'Header' })">
                Choose your <br> suitable language
            </span>
            <div :class="bem({ element: 'LanguagesContainer' })">
                <LanguageButton v-for="language, index in supportedLanguages" :key="index" :id="language.id" :label="language.label" :active="language.id === 'en'" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/styles/_media.scss";
@import "./LanguageSelector.style.scss";
</style>
