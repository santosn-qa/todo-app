const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5500/public/',
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 10000,
    video: true,
    env: {
      API_URL: 'http://localhost:3000/',
    },
    setupNodeEvents(on, config) {
      // Custom event listeners or plugin integration can go here
    },
  },
});
