<template>
  <div>
    <button @click="darkMode = !darkMode">Toggle Dark Mode</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

export interface ToggleButtonProps {
  darkMode: boolean
}

const darkMode = ref(false)
</script>