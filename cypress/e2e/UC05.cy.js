/// <reference types="cypress" />

describe("UC05",()=>{
    beforeEach(() => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")});
    it("TC22 - Criar uma conta com sucesso",()=>{
        cy.fixture('../data/login/users_login.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            //Asserts
            cy.get('h1:contains(Accounts Overview)').should('be.visible')
            cy.get(".smallText").contains("Welcome "+ user.FIRST_NAME + " " + user.LAST_NAME)
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/overview.htm')

            cy.contains("Open New Account").click()
            cy.get('select[id="type"]').select("SAVINGS")
            cy.get('input[class="button"]').click()
            //Asserts
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/openaccount.htm')
            cy.get('h1:contains(Account Opened!)').should('be.visible')
            cy.get('p:contains(Congratulations, your account is now open.)').should('be.visible')
            cy.get('b:contains(Your new account number:)').should('be.visible')
            cy.get('a[id="newAccountId"]').should('be.visible')

            cy.contains("Log Out").click()         
        })   
    })
    it("TC23 - Visualizar detalhes de uma nova conta",()=>{
        cy.fixture('../data/login/users_login.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            //Asserts
            cy.get('h1:contains(Accounts Overview)').should('be.visible')
            cy.get(".smallText").contains("Welcome "+ user.FIRST_NAME + " " + user.LAST_NAME)
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/overview.htm')

            cy.contains("Open New Account").click()
            cy.get('select[id="type"]').select("SAVINGS")
            cy.get('input[class="button"]').click()
            //Asserts
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/openaccount.htm')
            cy.get('h1:contains(Account Opened!)').should('be.visible')
            cy.get('p:contains(Congratulations, your account is now open.)').should('be.visible')
            cy.get('b:contains(Your new account number:)').should('be.visible')
            cy.get('a[id="newAccountId"]').should('be.visible')

            cy.get('a[id="newAccountId"]').click()
            //Asserts
            cy.get('h1:contains(Account Details)').should('be.visible')
            cy.get('td:contains(Account Number:)').should('be.visible')
            cy.get('td[id="accountId"]').should('be.visible')
            cy.get('td:contains(Account Type:)').should('be.visible')
            cy.get('td[id="accountType"]').should('be.visible')
            cy.get('td:contains(Balance:)').should('be.visible')
            cy.get('td[id="balance"]').should('be.visible')
            cy.get('td:contains(Available:)').should('be.visible')
            cy.get('td[id="availableBalance"]').should('be.visible')
            
            cy.contains("Log Out").click()          
        }) 
    })
})