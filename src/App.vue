<script setup>
import { setLocale } from "@vee-validate/i18n";
setLocale("ka");
</script>

<template>
  <header>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </header>
</template>

<style>
html {
  background: #b5c0c7;
}
</style>
