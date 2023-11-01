<script setup>
defineProps({
    color: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})
</script>

<template>
    <span :class="bem({ mod: { color, location } })"></span>
</template>

<style lang="scss">
@import '@/styles/_media.scss';
@import './ColorfulCircle.style.scss';
</style>
