/// <reference types="cypress" />

describe("setup",()=>{
    it("setup - clear database",()=>{
            cy.visit("https://parabank.parasoft.com/parabank/index.htm")
            cy.contains("Admin Page").click()
            cy.get('input[id="accessMode4"]').click()
            cy.get('button[value="CLEAN"]').click()

            cy.get('input[id="accessMode3"]').click()
            cy.get('button[value="CLEAN"]').click()

            cy.get('input[id="accessMode1"]').click()
            cy.get('button[value="CLEAN"]').click()

    })
})