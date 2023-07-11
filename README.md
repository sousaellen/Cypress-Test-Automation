# Cypress-Test-Automation
Test automation project with Cypress.
//"test": "npx cypress run --env allure=true,allureResultsPath=cypress/reports/allure-result",
npm test --reporter mochawesome --reporter-options autoOpen=true

npx cypress run --spec "cypress\e2e\UC01.cy.js" --browser chrome --reporter mochawesome 
