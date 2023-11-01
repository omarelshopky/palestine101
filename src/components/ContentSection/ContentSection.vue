<script setup>
// eslint-disable-next-line no-unused-vars
const unusedVariableCreatedToEnableTheBemMixin = false
</script>

<template>
    <div :class="bem({ element: 'Wrapper' })">
        <div :class="bem({ element: 'Ribbons' })">
            <span :class="bem({ element: 'Ribbon', mod: { color: 'red' } })"></span>
            <span :class="bem({ element: 'Ribbon', mod: { color: 'black' } })"></span>
            <span :class="bem({ element: 'Ribbon', mod: { color: 'white' } })"></span>
            <span :class="bem({ element: 'Ribbon', mod: { color: 'green' } })"></span>
        </div>
        <div :class="bem({ element: 'Content' })">
            <h3 :class="bem({ element: 'Header' })">About Palestine</h3>

            <div :class="bem({ element: 'Text' })">
                Palestine is at the eastern end of the <strong>Mediterranean Sea</strong>, and forms
                a land bridge connecting the continents of Africa and Asia. One of the longest
                continuously inhabited areas of the world, Palestine has been recognized as a
                distinct geographical region since the Greek and Roman eras. (The name derives from
                <strong>the Philistines</strong>, a sea-faring people who invaded and settled the
                area in ancient times. The Arabic name for the country is still Filasteen.)
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/styles/_media.scss';
@import './ContentSection.style.scss';
</style>
