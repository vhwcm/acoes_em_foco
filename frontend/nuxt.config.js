module.exports = {
  head: {
    title: "My Nuxt Express App",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "My Nuxt and Express application",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [
    // Global CSS files can be added here
  ],
  plugins: [
    // Plugins can be added here
  ],
  components: true,
  buildModules: ["@nuxtjs/vuetify"],
  modules: [],
  build: {
    // Build configuration can be added here
  },
  server: {
    port: 3000, // default: 3000
    host: "0.0.0.0", // default: localhost
  },
};
