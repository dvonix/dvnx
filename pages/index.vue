<template>
  <div>
    <v-btn @click="showAlert('Hello World')" class="mr-4" variant="flat">Click Me</v-btn>
    <v-btn @click="showAppConfig()" class="mr-4" variant="outlined">Show App Config</v-btn>
    <v-btn @click="showRuntimeConfig()" class="mr-4" variant="outlined">Show Runtime Config</v-btn>
    <v-btn @click="showLoadingScreen()" class="mr-4" :variant="loading ? 'flat' : 'outlined'">Show Loading Screen</v-btn>
    <v-btn @click="toggleTheme" variant="outlined">toggle theme</v-btn>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
const theme = useTheme()
const loading = useState('loading')

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

function showAlert(message : string) {
  window.alert(message)
}

function showAppConfig() {
  window.alert(appConfig.title)
}

function showRuntimeConfig() {
  window.alert(runtimeConfig.public.username)
}

function showLoadingScreen() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>
