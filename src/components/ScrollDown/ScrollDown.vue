<script setup>
// eslint-disable-next-line no-unused-vars
const unusedVariableCreatedToEnableTheBemMixin = false
</script>

<template>
    <div :class="bem({ element: 'Wrapper' })">
        <span :class="bem({ element: 'Text' })"> Scroll Down </span>
        <svg
            :class="bem({ element: 'Arrow' })"
            viewBox="0 0 43 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_142_19)">
                <path
                    d="M20.9697 29.5303C21.2626 29.8232 21.7374 29.8232 22.0303 29.5303L26.8033 24.7574C27.0962 24.4645 27.0962 23.9896 26.8033 23.6967C26.5104 23.4038 26.0355 23.4038 25.7426 23.6967L21.5 27.9393L17.2574 23.6967C16.9645 23.4038 16.4896 23.4038 16.1967 23.6967C15.9038 23.9896 15.9038 24.4645 16.1967 24.7574L20.9697 29.5303ZM20.75 11L20.75 29L22.25 29L22.25 11L20.75 11Z"
                    fill="white"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_142_19"
                    x="0.97702"
                    y="0"
                    width="41.046"
                    height="48.75"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_142_19"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_142_19"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    </div>
</template>

<style lang="scss">
@import '@/styles/_media.scss';
@import './ScrollDown.style.scss';
</style>
