import { defineStore } from 'pinia'

export const useWebsiteStore = defineStore('websiteStore', {
    state: () => ({
      name: 'hi nuxt',
      description: ''
    }),
    actions: {
      async fetch() {
         await $fetch('https://api.nuxt.com/modules/pinia').then(res => console.log(res))
      }
    }
  })