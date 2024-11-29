describe("Accessibility Audit with axe-core", () => {
  beforeEach(() => {
    cy.visit("https://splitwise.com"); 
    cy.injectAxe(); 
  });

  it("Should perform specific accessibility audits", () => {
   
    const customRules = {
      rules: {
        "color-contrast": { enabled: true }, // Check color contrast
        "image-alt": { enabled: true }, // Check images for alt text
        "link-name": { enabled: true }, // Check links for descriptive text
        "landmark-one-main": { enabled: true }, // Check landmarks for ARIA roles
        "region": { enabled: true }, // Check for proper ARIA landmarks
      },
    };

    cy.checkA11y(null, customRules, (violations) => {
      const results = violations.map((violation) => ({
        rule: `Rule violated: ${violation.id}`,
        description: `Description: ${violation.description}`,
        impact: `Impact level: ${violation.impact}`,
        nodes: `Affected elements: ${violation.nodes.map((node) => node.target).join(", ")}`,
      }));
      cy.task("logAccessibilityResults", results); 
    });
  });
});
