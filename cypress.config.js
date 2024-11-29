const fs = require("fs");
const path = require("path");

const generateHTMLReport = (results) => {
  const reportDir = path.join("cypress", "reports");

  // Create reports directory if it doesn't exist
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  let htmlContent = "<h1>Accessibility Audit Report</h1>";
  results.forEach((result) => {
    htmlContent += `
      <div>
        <h2>Rule: ${result.rule}</h2>
        <p>Description: ${result.description}</p>
        <p>Impact: ${result.impact}</p>
        <p>Affected elements: ${result.nodes}</p>
      </div>
    `;
  });

  fs.writeFileSync(path.join(reportDir, "accessibility.html"), htmlContent);
};

module.exports = (on) => {
  on("task", {
    logAccessibilityResults(results) {
      const reportDir = path.join("cypress", "reports");

      // Save results as JSON
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }

      fs.writeFileSync(
        path.join(reportDir, "accessibility.json"),
        JSON.stringify(results, null, 2)
      );

      // Generate detailed HTML report
      generateHTMLReport(results);

      return null;
    },
  });
};
