// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      title: "mensa.rs",
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
