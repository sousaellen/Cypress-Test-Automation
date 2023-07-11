/// <reference types="cypress" />

describe("UC02",()=>{
    beforeEach(() => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")});
    it("TC07 - Login com sucesso",()=>{
        cy.fixture('../data/login/users_login.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            //Asserts
            cy.get('h1:contains(Accounts Overview)').should('be.visible')
            cy.get(".smallText").contains("Welcome "+ user.FIRST_NAME + " " + user.LAST_NAME)
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/overview.htm')
            
            cy.contains("Log Out").click()
        })
    })
    it("TC08 - Login com todos os campos vazios",()=>{
        cy.fixture('../data/login/user_login_all_fields_empty.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type('{backspace}')
            cy.get("#loginPanel > form > div:nth-child(4) > input").type('{backspace}')
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            //Asserts
            cy.get(".error").should('be.visible')
            cy.get('h1:contains(Error!)').should('be.visible')
            cy.get('p:contains(Please enter a username and password.)').should('be.visible')
        })
    })
    it("TC09 - Login com usuário não cadastrado",()=>{
        cy.fixture('../data/login/user_login_unregistered.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            //Asserts
            cy.get(".error").should('be.visible')
            cy.get('h1:contains(Error!)').should('be.visible')
            cy.get('p:contains(The username and password could not be verified.)').should('be.visible')
        })
    })
    it("TC10 - Login com usuário não cadastrado",()=>{
        cy.fixture('../data/login/user_login_wrong_password.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            //Asserts
            cy.get(".error").should('be.visible')
            cy.get('h1:contains(Error!)').should('be.visible')
            cy.get('p:contains(The username and password could not be verified.)').should('be.visible')
        })
    })
    it("TC11 - Login com campo de usuário vazio",()=>{
        cy.fixture('../data/login/user_login_empty_username.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type('{backspace}')
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            //Asserts
            cy.get(".error").should('be.visible')
            cy.get('h1:contains(Error!)').should('be.visible')
            cy.get('p:contains(Please enter a username and password.)').should('be.visible')
        })
    })
    it("TC12 - Login com campo de senha vazio",()=>{
        cy.fixture('../data/login/user_login_empty_password.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type('{backspace}')
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            //Asserts
            cy.get(".error").should('be.visible')
            cy.get('h1:contains(Error!)').should('be.visible')
            cy.get('p:contains(Please enter a username and password.)').should('be.visible')
        })
    })
})