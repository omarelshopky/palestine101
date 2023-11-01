<script setup>
// eslint-disable-next-line no-unused-vars
const unusedVariableToEnableMixin = false;
</script>

<template>
    <div :class="bem({ element: 'Wrapper' })">
        <div :class="bem({ element: 'Content' })">
            <div :class="bem({ element: 'LeftColumn' })">
                <span :class="bem({ element: 'Border', mod: { type: 'vertical', location: 'leftRight' } })"></span>
                <span :class="bem({ element: 'Border', mod: { type: 'vertical', location: 'leftLeft' } })"></span>
            </div>
            <div :class="bem({ element: 'RightColumn' })">
                <span :class="bem({ element: 'Border', mod: { type: 'vertical', location: 'rightRight' } })"></span>
                <span :class="bem({ element: 'Border', mod: { type: 'vertical', location: 'rightLeft' } })"></span>
                <span :class="bem({ element: 'RightColumnFarLeftBorder' })"></span>
            </div>
            <div :class="bem({ element: 'UpperRow' })">
                <span :class="bem({ element: 'Border', mod: { type: 'horizontal', location: 'lower' } })"></span>
            </div>
            <div :class="bem({ element: 'LowerRow' })">
                <span :class="bem({ element: 'Border', mod: { type: 'horizontal', location: 'upper' } })"></span>
            </div>
            <div :class="bem({ element: 'CenterWrapper' })">
                CenterWrapper
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/styles/_media.scss";
@import "./HeroSection.style.scss";
</style>
