<template>
  <v-dialog v-model="loading" persistent="true" max-width="true" max-height="true">
    <v-progress-circular
        indeterminate
        color="primary"
        size="32"
        class="mx-auto my-auto"
    ></v-progress-circular>
  </v-dialog>
</template>

<script setup>
  const loading = useState('loading')
</script>
