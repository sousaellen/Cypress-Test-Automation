/// <reference types="cypress" />

describe("UC07",()=>{
    beforeEach(() => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")});
    it("TC30 - Realizar logout",()=>{
        cy.fixture('../data/login/users_login.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            //Asserts
            cy.get('h1:contains(Accounts Overview)').should('be.visible')
            cy.get(".smallText").contains("Welcome "+ user.FIRST_NAME + " " + user.LAST_NAME)
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/overview.htm')
            
            cy.contains("Log Out").click()
            //Asserts
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC')
            cy.get('h2:contains(Customer Login)').should('be.visible')
            cy.contains("Username").should('be.visible')
            cy.contains("Password").should('be.visible')
            cy.contains("Forgot login info?").should('be.visible')
            cy.contains("Register").should('be.visible')
        })
    })
})