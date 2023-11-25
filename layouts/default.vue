<template>
  <v-app>
    <loading-screen/>
    <main-header></main-header>
    <v-main class="ma-4">
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

import MainHeader from "~/layouts/main-header.vue";
import LoadingScreen from "~/components/loading-screen.vue";
</script>

<style scoped>

</style>