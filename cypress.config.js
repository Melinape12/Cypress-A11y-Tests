const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "4nwxwg", // Reemplaza esto con el ID que copiaste
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    video: true, // Habilita grabación de video
    screenshotOnRunFailure: true, // Captura pantalla en fallos
  },
});
