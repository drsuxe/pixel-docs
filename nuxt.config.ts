// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio'],
  routeRules: {
    '/': { prerender: true }
  },

  // force module initialization on dev env
  studio: {
    enabled: true
  }
})
