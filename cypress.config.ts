import { defineConfig } from "cypress"

export default defineConfig({
  env: {
    codeCoverage: {
      url: "/api/__coverage__",
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config)
    },
    baseUrl: "http://localhost:8001",
  },
})
