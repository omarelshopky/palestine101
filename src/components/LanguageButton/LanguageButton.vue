<script setup>
defineProps({
    id: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<template>
    <button :class="bem({ mod: { active } })">{{ label }}</button>
</template>

<style lang="scss">
@import '@/styles/_media.scss';
@import './LanguageButton.style.scss';
</style>
