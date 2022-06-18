<script setup>
import HomeView from "@/views/HomeView.vue";
import { setLocale } from "@vee-validate/i18n";
setLocale("ka");
</script>

<template>
  <header>
    <HomeView v-if="$route.path === '/'" to="/1" />
    <RouterView />
  </header>
</template>

<style>
html {
  background: #b5c0c7;
}
</style>
