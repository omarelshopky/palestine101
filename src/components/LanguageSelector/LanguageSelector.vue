<script setup>
import { onMounted, ref } from 'vue';
import LanguageButton from 'components/LanguageButton/LanguageButton.vue';

const wrapper = ref(null);
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

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const header = entry.target.querySelector('.LanguageSelector-Header');
                const selector = entry.target.querySelector('.LanguageSelector-LanguagesContainer');

                if (header) {
                    header.classList.add("LanguageSelector-Header_inView");
                }

                if (selector) {
                    selector.classList.add("LanguageSelector-LanguagesContainer_inView");
                }

                observer.unobserve(entry.target); // To Trigger only once
            }
        });
    },
    {
        threshold: 0.5 // Trigger when 50% of the wrapper on the view port
    }
);

onMounted(() => observer.observe(wrapper.value));
</script>

<template>
    <div ref="wrapper" :class="bem({ element: 'Wrapper' })">
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
