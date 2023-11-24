<template>
  <v-app>
    <v-app-bar density="compact" elevation="1">
      <v-app-bar-nav-icon icon="mdi-home" color="primary"/>
      <v-app-bar-title>
        <p class="font-weight-bold text-primary">DVNX</p>
      </v-app-bar-title>
    </v-app-bar>
    <v-main class="ma-4">
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>