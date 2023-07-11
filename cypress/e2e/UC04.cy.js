/// <reference types="cypress" />

describe("UC04",()=>{
    beforeEach(() => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")});
    it("TC18 - Atualizar dados com sucesso",()=>{
        cy.fixture('../data/update_data/update_data_users.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            cy.contains("Update Contact Info").click()
            cy.get('input[name="customer.firstName"]').type(user.FIRST_NAME)
            cy.get('input[name="customer.lastName"]').type(user.LAST_NAME)
            cy.get('input[name="customer.address.street"]').type(user.NEW_ADDRESS)
            cy.get('input[name="customer.address.city"]').type(user.NEW_CITY)
            cy.get('input[name="customer.address.state"]').type(user.NEW_STATE)
            cy.get('input[name="customer.address.zipCode"]').type(user.NEW_ZIP_CODE)
            cy.get('input[name="customer.phoneNumber"]').type(user.NEW_PHONE)
            cy.get("#rightPanel > div > div > form > table > tbody > tr:nth-child(8) > td:nth-child(2) > input").click()         
            //Asserts
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/updateprofile.htm')
            cy.get('h1:contains(Profile Updated)').should('be.visible')
            cy.get('p:contains(Your updated address and phone number have been added to the system. )').should('be.visible')

            cy.contains("Log Out").click()         
        })   
    })
    it("TC19 -  Atualizar dados com todos os campos vazios",()=>{
        cy.fixture('../data/update_data/update_data_users.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            cy.contains("Update Contact Info").click()
            cy.get('input[name="customer.firstName"]').type('{backspace}')
            cy.get('input[name="customer.lastName"]').type('{backspace}')
            cy.get('input[name="customer.address.street"]').type('{backspace}')
            cy.get('input[name="customer.address.city"]').type('{backspace}')
            cy.get('input[name="customer.address.state"]').type('{backspace}')
            cy.get('input[name="customer.address.zipCode"]').type('{backspace}')
            cy.get('input[name="customer.phoneNumber"]').type('{backspace}')
            cy.get("#rightPanel > div > div > form > table > tbody > tr:nth-child(8) > td:nth-child(2) > input").click()                     
            //Asserts
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/updateprofile.htm')
            cy.get('h1:contains(Update Profile)').should('be.visible')
            cy.contains("First name is required.")
            cy.contains("Last name is required.")
            cy.contains("Address is required.")
            cy.contains("City is required.")
            cy.contains("State is required.")
            cy.contains("Zip Code is required.")
            
            cy.contains("Log Out").click()
        })
    })
    it("TC20 - Atualizar dados com campos obrigatórios vazios",()=>{
        cy.fixture('../data/update_data/update_data_users.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            cy.contains("Update Contact Info").click()
            cy.get('input[name="customer.firstName"]').type(user.FIRST_NAME)
            cy.get('input[name="customer.lastName"]').type(user.LAST_NAME)
            cy.get('input[name="customer.address.street"]').type(user.NEW_ADDRESS)
            cy.get('input[name="customer.address.city"]').type(user.NEW_CITY)
            cy.get('input[name="customer.address.state"]').type(user.NEW_STATE)
            cy.get('input[name="customer.address.zipCode"]').type('{backspace}')
            cy.get('input[name="customer.phoneNumber"]').type(user.NEW_PHONE)
            cy.get("#rightPanel > div > div > form > table > tbody > tr:nth-child(8) > td:nth-child(2) > input").click()
          
            //Asserts
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/updateprofile.htm')
            cy.get('h1:contains(Update Profile)').should('be.visible')
            cy.contains("Zip Code is required.")
            
            cy.contains("Log Out").click()
        })   
    })
    it("TC21 - Atualizar dados com o campo telefone (não obrigatório) vazio",()=>{
        cy.fixture('../data/update_data/update_data_users.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            cy.contains("Update Contact Info").click()
            cy.get('input[name="customer.firstName"]').type(user.FIRST_NAME)
            cy.get('input[name="customer.lastName"]').type(user.LAST_NAME)
            cy.get('input[name="customer.address.street"]').type(user.NEW_ADDRESS)
            cy.get('input[name="customer.address.city"]').type(user.NEW_CITY)
            cy.get('input[name="customer.address.state"]').type(user.NEW_STATE)
            cy.get('input[name="customer.address.zipCode"]').type(user.NEW_ZIP_CODE)
            cy.get('input[name="customer.phoneNumber"]').type('{backspace}')
            cy.get("#rightPanel > div > div > form > table > tbody > tr:nth-child(8) > td:nth-child(2) > input").click()
            //Asserts
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/updateprofile.htm')
            cy.get('h1:contains(Profile Updated)').should('be.visible')
            cy.get('p:contains(Your updated address and phone number have been added to the system. )').should('be.visible')
            
            cy.contains("Log Out").click()
        })   
    })
}) 