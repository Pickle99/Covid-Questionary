<script setup>
import HomeView from "@/views/HomeView.vue";
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
