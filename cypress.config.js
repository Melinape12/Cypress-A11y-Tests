const fs = require("fs");

const generateHTMLReport = (results) => {
  let htmlContent = "<h1>Accessibility Audit Report</h1>";
  results.forEach((result) => {
    htmlContent += `
      <div>
        <h2>Rule: ${result.rule}</h2>
        <p>Description: ${result.description}</p>
        <p>Impact: ${result.impact}</p>
        <p>Help: <a href="${result.help}" target="_blank">More info</a></p>
        <p>Affected elements: ${result.nodes.join(", ")}</p>
      </div>
    `;
  });

  fs.writeFileSync("cypress/reports/accessibility.html", htmlContent);
};

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        logAccessibilityResults(results) {
          // Save the results as JSON
          fs.writeFileSync(
            "cypress/reports/accessibility.json",
            JSON.stringify(results, null, 2)
          );

          // Generate an HTML report
          generateHTMLReport(results);

          return null;
        },
      });
      return config;
    },
  },
};
