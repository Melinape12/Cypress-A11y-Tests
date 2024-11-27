describe("Accesibility Audit with axe-core", () => {
  beforeEach(() => {
    cy.visit("https://secure.splitwise.com"); // Cambia a la URL que estás probando
    cy.injectAxe(); // Inyecta axe-core
  });

  it("Should check accesibility on the entire page", () => {
    // Auditoría completa de la página
    cy.checkA11y(null, {
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa"], // Estándares que quieres analizar
      },
    });
  });

  it("Should check images missing alt text", () => {
    cy.checkA11y("img", {
      rules: {
        "image-alt": { enabled: true }, // Activa específicamente la regla para texto alternativo
      },
    });
  });

  it("Should check color contrast violations", () => {
    cy.checkA11y(null, {
      rules: {
        "color-contrast": { enabled: true }, // Activa específicamente la regla para contraste
      },
    });
  });
});
