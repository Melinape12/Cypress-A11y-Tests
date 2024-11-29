const fs = require("fs");
const path = require("path");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        logAccessibilityResults(results) {
          
          console.log("Accessibility Results:", results);

          
          const reportDir = path.join("cypress", "reports");

          if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir, { recursive: true });
          }

          
          fs.writeFileSync(
            path.join(reportDir, "accessibility.json"),
            JSON.stringify(results, null, 2)
          );

          return null;
        },
      });
      return config;
    },
  },
};
