<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script lang="ts" setup>
import { useWebsiteStore } from './store';
const website = useWebsiteStore()
console.log(website.$state.name)
console.log(website.fetch())
</script>
