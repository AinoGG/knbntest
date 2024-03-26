<template>
  <div class="main">
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import { useWebsiteStore } from './store';
const website = useWebsiteStore()
console.log(website.$state.name)
console.log(website.fetch())
</script>

<style lang="scss">
.main {
  background: #424141;
}

body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: antiquewhite;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

button {  
  background: #f3f3f3;
  border: none;
  border-radius: 4px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
