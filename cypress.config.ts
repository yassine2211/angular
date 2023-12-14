import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:4200',
    //"supportFile": false
    "defaultCommandTimeout": 15000 // Défaut est 4000ms, ajustez en fonction de vos besoins

  },
})
