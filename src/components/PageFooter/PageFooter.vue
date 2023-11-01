<script setup>
// eslint-disable-next-line no-unused-vars
const unusedVariableCreatedToEnableTheBemMixin = false
</script>

<template>
    <div :class="bem({ element: 'Wrapper' })">
        <span :class="bem({ element: 'Text' })"> نحن لا نستسلم .. ننتصر أو نموت </span>
        <span :class="bem({ element: 'Text' })"> وَمَا النَّصْرُ إِلَّا مِنْ عِندِ اللَّهِ </span>
    </div>
</template>

<style lang="scss">
@import '@/styles/_media.scss';
@import './PageFooter.style.scss';
</style>
