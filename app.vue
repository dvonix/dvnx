<template>
  <NuxtLayout>
    <v-app>
      <v-container>
        <v-btn @click="showAlert('Hello World')">Click Me</v-btn>
      </v-container>
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">

function showAlert(message : string) {
  window.alert(message)
}

</script>