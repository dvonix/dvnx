<template>
  <v-app>
    <v-container>
      <v-btn @click="showAlert('Hello World')">Click Me</v-btn>
      <v-btn @click="showAppConfig()">Show App Config</v-btn>
      <v-btn @click="showRuntimeConfig()">Show Runtime Config</v-btn>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

function showAlert(message : string) {
  window.alert(message)
}

function showAppConfig() {
  window.alert(appConfig.title)
}

function showRuntimeConfig() {
  window.alert(runtimeConfig.public.username)
}
</script>
