<script setup>
import HeroSection from 'components/HeroSection/HeroSection.vue';
import LanguageSelector from 'components/LanguageSelector/LanguageSelector.vue';
</script>

<template>
  <div :class="bem()">
    <HeroSection />
    <LanguageSelector />
  </div>
</template>