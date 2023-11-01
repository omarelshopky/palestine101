<script setup>
import ContentSections from 'components/ContentSections/ContentSections.vue';
import HeroSection from 'components/HeroSection/HeroSection.vue';
import LanguageSelector from 'components/LanguageSelector/LanguageSelector.vue';
import PageFooter from 'components/PageFooter/PageFooter.vue';
</script>

<template>
  <div :class="bem()">
    <HeroSection />
    <LanguageSelector />
    <ContentSections />
    <PageFooter />
  </div>
</template>