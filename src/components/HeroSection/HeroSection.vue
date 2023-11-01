<script setup>
import PalestineFlag from 'components/PalestineFlag/PalestineFlag.vue';
import ScrollDown from 'components/ScrollDown/ScrollDown.vue';
</script>

<template>
    <div :class="bem({ element: 'Wrapper' })">
        <div :class="bem({ element: 'Content' })">
            <div :class="bem({ element: 'LeftColumn' })">
                <span :class="bem({ element: 'Border', mod: { type: 'vertical', location: 'leftRight' } })"></span>
                <span :class="bem({ element: 'Border', mod: { type: 'vertical', location: 'leftLeft' } })"></span>
                <span :class="bem({ element: 'Circle', mod: { color: 'green', location: 'topLeft' } })"></span>
            </div>
            <div :class="bem({ element: 'RightColumn' })">
                <span :class="bem({ element: 'Border', mod: { type: 'vertical', location: 'rightRight' } })"></span>
                <span :class="bem({ element: 'Border', mod: { type: 'vertical', location: 'rightLeft' } })"></span>
                <span :class="bem({ element: 'RightColumnFarLeftBorder' })"></span>
                <span :class="bem({ element: 'Circle', mod: { color: 'green', location: 'bottomRight' } })"></span>
            </div>
            <div :class="bem({ element: 'UpperRow' })">
                <span :class="bem({ element: 'Border', mod: { type: 'horizontal', location: 'lower' } })"></span>
                <div :class="bem({ element: 'HeaderContainer' })">
                    <PalestineFlag :class="bem({ element: 'PalestineFlag' })" />
                    <span :class="bem({ element: 'HeaderText' })">
                        Free <br> Palestine
                    </span>
                </div>
            </div>
            <div :class="bem({ element: 'LowerRow' })">
                <span :class="bem({ element: 'Border', mod: { type: 'horizontal', location: 'upper' } })"></span>
                <div :class="bem({ element: 'ScrollDown' })">
                    <ScrollDown />
                </div>
            </div>
            <div :class="bem({ element: 'CenterWrapper' })">
                <span :class="bem({ element: 'Circle', mod: { color: 'red', location: 'bottomLeft' } })"></span>
                <span :class="bem({ element: 'Circle', mod: { color: 'red', location: 'topRight' } })"></span>
                <h1 :class="bem({ element: 'Title' })">
                    Palestine <br>
                    <span>101</span>
                </h1>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/styles/_media.scss";
@import "./HeroSection.style.scss";
</style>
