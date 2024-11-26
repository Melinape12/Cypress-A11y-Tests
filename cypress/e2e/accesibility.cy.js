describe("Prueba de accesibilidad con axe-core", () => {
    it("Debe verificar la accesibilidad de la página", () => {
      cy.visit("https://secure.splitwise.com/"); // Cambia esto a la URL que quieres probar
      cy.injectAxe(); // Inyecta axe-core en la página
      cy.checkA11y(); // Ejecuta la auditoría de accesibilidad
    });
});