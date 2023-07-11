/// <reference types="cypress" />

describe("UC03",()=>{
    beforeEach(() => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")});
    it("TC13 - Encontrar informações de login com sucesso",()=>{
        cy.fixture('../data/find_login_info/registered_user.json').then((user) => {
            cy.contains("Forgot login info?").click()
            cy.get('input[name="firstName"]').type(user.FIRST_NAME )
            cy.get('input[name="lastName"]').type(user.LAST_NAME)
            cy.get('input[name="address.street"]').type(user.ADDRESS)
            cy.get('input[name="address.city"]').type(user.CITY)
            cy.get('input[name="address.state"]').type(user.STATE)
            cy.get('input[name="address.zipCode"]').type(user.ZIP_CODE)
            cy.get('input[name="ssn"]').type(user.SSN)
            cy.get("td > .button").click()          
            //Asserts
            cy.contains("Username: " + user.USERNAME)
            cy.contains("Password: " + user.PASSWORD)
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/lookup.htm')
            cy.get('h1:contains(Customer Lookup)').should('be.visible')
            cy.get('p:contains(Your login information was located successfully. You are now logged in.)').should('be.visible')

            cy.contains("Log Out").click()         
        })   
    })
    it("TC14 - Encontrar informações de login com todos os campos vazios",()=>{
        cy.fixture('../data/find_login_info/registered_user_all_fields_empty.json').then((user) => {
            cy.contains("Forgot login info?").click()
            cy.get('input[name="firstName"]').type('{backspace}')
            cy.get('input[name="lastName"]').type('{backspace}')
            cy.get('input[name="address.street"]').type('{backspace}')
            cy.get('input[name="address.city"]').type('{backspace}')
            cy.get('input[name="address.state"]').type('{backspace}')
            cy.get('input[name="address.zipCode"]').type('{backspace}')
            cy.get('input[name="ssn"]').type('{backspace}')
            cy.get("td > .button").click() 
            //Asserts
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/lookup.htm')
            cy.get('p:contains(Please fill out the following information in order to validate your account.)').should('be.visible')
            cy.contains("First name is required.")
            cy.contains("Last name is required.")
            cy.contains("Address is required.")
            cy.contains("City is required.")
            cy.contains("State is required.")
            cy.contains("Zip Code is required.")
            cy.contains("Social Security Number is required.")  
        })
    })
    it("TC15 - Encontrar informações de login com dados inconsistentes",()=>{
        cy.fixture('../data/find_login_info/registered_users_inconsistent_data.json').then((user) => {
            cy.contains("Forgot login info?").click()
            cy.get('input[name="firstName"]').type(user.FIRST_NAME )
            cy.get('input[name="lastName"]').type(user.LAST_NAME)
            cy.get('input[name="address.street"]').type(user.ADDRESS)
            cy.get('input[name="address.city"]').type(user.CITY)
            cy.get('input[name="address.state"]').type(user.STATE)
            cy.get('input[name="address.zipCode"]').type(user.ZIP_CODE)
            cy.get('input[name="ssn"]').type(user.SSN)
            cy.get("td > .button").click() 
            //Asserts
            cy.get('h1:contains(Error!)').should('be.visible')
            cy.get(".error").should('be.visible')
            cy.get('p:contains(The customer information provided could not be found.)').should('be.visible')
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/lookup.htm')          
        })   
    })
    it("TC16 - Encontrar informações de login com usuário não cadastrado",()=>{
        cy.fixture('../data/find_login_info/unregistered_users.json').then((user) => {
            cy.contains("Forgot login info?").click()
            cy.get('input[name="firstName"]').type(user.FIRST_NAME )
            cy.get('input[name="lastName"]').type(user.LAST_NAME)
            cy.get('input[name="address.street"]').type(user.ADDRESS)
            cy.get('input[name="address.city"]').type(user.CITY)
            cy.get('input[name="address.state"]').type(user.STATE)
            cy.get('input[name="address.zipCode"]').type(user.ZIP_CODE)
            cy.get('input[name="ssn"]').type(user.SSN)
            cy.get("td > .button").click() 
            //Asserts
            cy.get('h1:contains(Error!)').should('be.visible')
            cy.get(".error").should('be.visible')
            cy.get('p:contains(The customer information provided could not be found.)').should('be.visible')
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/lookup.htm')       
        })   
    })
    it("TC17 - Encontrar informações de login com campos obrigatórios vazios",()=>{
        cy.fixture('../data/find_login_info/registered_user_empty_required_fields.json').then((user) => {
            cy.contains("Forgot login info?").click()
            cy.get('input[name="firstName"]').type(user.FIRST_NAME )
            cy.get('input[name="lastName"]').type(user.LAST_NAME)
            cy.get('input[name="address.street"]').type(user.ADDRESS)
            cy.get('input[name="address.city"]').type(user.CITY)
            cy.get('input[name="address.state"]').type(user.STATE)
            cy.get('input[name="address.zipCode"]').type(user.ZIP_CODE)
            cy.get('input[name="ssn"]').type('{backspace}')
            cy.get("td > .button").click() 
            //Asserts
            cy.contains("Social Security Number")
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/lookup.htm')
            cy.get(".error").should('be.visible')
            cy.get('p:contains(Please fill out the following information in order to validate your account.)').should('be.visible')   
        })
    })
})