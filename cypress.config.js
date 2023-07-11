const { defineConfig } = require("cypress");


module.exports = defineConfig({
  numTestsKeptInMemory: 0,
  video: false,
  screenshotOnRunFailure: false,
  trashAssetsBeforeRuns: false,
  e2e: {

    },
});
