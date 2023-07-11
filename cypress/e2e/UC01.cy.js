/// <reference types="cypress" />

describe("UC01",()=>{
    beforeEach(() => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")});
    it("TC01 - Cadastro de usuário com sucesso",()=>{
        cy.fixture('../data/register_users/user_register_Mary.json').then((user) => {
            cy.contains("Register").click()
            cy.get('input[name="customer.firstName"]').type(user.FIRST_NAME)
            cy.get('input[name="customer.lastName"]').type(user.LAST_NAME)
            cy.get('input[name="customer.address.street"]').type(user.ADDRESS)
            cy.get('input[name="customer.address.city"]').type(user.CITY)
            cy.get('input[name="customer.address.state"]').type(user.STATE)
            cy.get('input[name="customer.address.zipCode"]').type(user.ZIP_CODE)
            cy.get('input[name="customer.phoneNumber"]').type(user.PHONE)
            cy.get('input[name="customer.ssn"]').type(user.SSN)
            cy.get('input[name="customer.username"]').type(user.USERNAME)
            cy.get('input[name="customer.password"]').type(user.PASSWORD)
            cy.get('input[name="repeatedPassword"]').type(user.REPETEATED_PASSWORD)
            cy.get("td > .button").click()
            //Asserts
            cy.get(".title").contains("Welcome "+ user.USERNAME)
            cy.get('p:contains(Your account was created successfully. You are now logged in.)').should('be.visible')    
            
            cy.contains("Log Out").click()
        })   
    })
    it("TC02 - Cadastro de usuário com todos os campos vazios",()=>{
        cy.fixture('../data/register_users/user_register_all_fields_empty.json').then((user) => {
            cy.contains("Register").click()
            cy.get('input[name="customer.firstName"]').type('{backspace}')
            cy.get('input[name="customer.lastName"]').type('{backspace}')
            cy.get('input[name="customer.address.street"]').type('{backspace}')
            cy.get('input[name="customer.address.city"]').type('{backspace}')
            cy.get('input[name="customer.address.state"]').type('{backspace}')
            cy.get('input[name="customer.address.zipCode"]').type('{backspace}')
            cy.get('input[name="customer.phoneNumber"]').type('{backspace}')
            cy.get('input[name="customer.ssn"]').type('{backspace}')
            cy.get('input[name="customer.username"]').type('{backspace}')
            cy.get('input[name="customer.password"]').type('{backspace}')
            cy.get('input[name="repeatedPassword"]').type('{backspace}')
            cy.get("td > .button").click()
            //Asserts
            cy.contains("First name is required.")
            cy.contains("Last name is required.")
            cy.contains("Address is required.")
            cy.contains("City is required.")
            cy.contains("State is required.")
            cy.contains("Zip Code is required.")
            cy.contains("Social Security Number is required.")
            cy.contains("Username is required.")
            cy.contains("Password is required.")
            cy.contains("Password confirmation is required.")
        })
    })
    it("TC03 - Cadastro de usuário com um username já cadastrado",()=>{
        cy.fixture('../data/register_users/user_register_John.json').then((user) => {
            var count = 1;
            while (count <= 2) {
                cy.contains("Register").click()
                cy.get('input[name="customer.firstName"]').type(user.FIRST_NAME)
                cy.get('input[name="customer.lastName"]').type(user.LAST_NAME)
                cy.get('input[name="customer.address.street"]').type(user.ADDRESS)
                cy.get('input[name="customer.address.city"]').type(user.CITY)
                cy.get('input[name="customer.address.state"]').type(user.STATE)
                cy.get('input[name="customer.address.zipCode"]').type(user.ZIP_CODE)
                cy.get('input[name="customer.phoneNumber"]').type(user.PHONE)
                cy.get('input[name="customer.ssn"]').type(user.SSN)
                cy.get('input[name="customer.username"]').type(user.USERNAME)
                cy.get('input[name="customer.password"]').type(user.PASSWORD)
                cy.get('input[name="repeatedPassword"]').type(user.REPETEATED_PASSWORD)
                cy.get("td > .button").click()

                if (count == 1) {
                    cy.get(".title").contains("Welcome "+ user.USERNAME)
                    cy.contains("Log Out").click()
                } else {
                    //Asserts
                    cy.get(".error").should('be.visible')
                    cy.get('span:contains(This username already exists.)').should('be.visible')
                }
                count = count + 1;
            }   
        })   
    })
    it("TC04 - Cadastro de usuário com campos não obrigatórios vazios",()=>{
        cy.fixture('../data/register_users/user_registration_empty_non-required_fields.json').then((user) => {
            cy.contains("Register").click()
            cy.get('input[name="customer.firstName"]').type(user.FIRST_NAME)
            cy.get('input[name="customer.lastName"]').type(user.LAST_NAME)
            cy.get('input[name="customer.address.street"]').type(user.ADDRESS)
            cy.get('input[name="customer.address.city"]').type(user.CITY)
            cy.get('input[name="customer.address.state"]').type(user.STATE)
            cy.get('input[name="customer.address.zipCode"]').type(user.ZIP_CODE)
            cy.get('input[name="customer.phoneNumber"]').type('{backspace}')
            cy.get('input[name="customer.ssn"]').type(user.SSN)
            cy.get('input[name="customer.username"]').type(user.USERNAME)
            cy.get('input[name="customer.password"]').type(user.PASSWORD)
            cy.get('input[name="repeatedPassword"]').type(user.REPETEATED_PASSWORD)
            cy.get("td > .button").click()
            //Asserts
            cy.get(".title").contains("Welcome "+ user.USERNAME)
            cy.get('p:contains(Your account was created successfully. You are now logged in.)').should('be.visible') 

            cy.contains("Log Out").click()
        })   
    })
    it("TC05 - Cadastro de usuário com senhas diferentes",()=>{
        cy.fixture('../data/register_users/user_register_different_passwords.json').then((user) => {
            cy.contains("Register").click()
            cy.get('input[name="customer.firstName"]').type(user.FIRST_NAME)
            cy.get('input[name="customer.lastName"]').type(user.LAST_NAME)
            cy.get('input[name="customer.address.street"]').type(user.ADDRESS)
            cy.get('input[name="customer.address.city"]').type(user.CITY)
            cy.get('input[name="customer.address.state"]').type(user.STATE)
            cy.get('input[name="customer.address.zipCode"]').type(user.ZIP_CODE)
            cy.get('input[name="customer.phoneNumber"]').type(user.PHONE)
            cy.get('input[name="customer.ssn"]').type(user.SSN)
            cy.get('input[name="customer.username"]').type(user.USERNAME)
            cy.get('input[name="customer.password"]').type(user.PASSWORD)
            cy.get('input[name="repeatedPassword"]').type(user.REPETEATED_PASSWORD)
            cy.get("td > .button").click()
            //Asserts
            cy.get(".error").should('be.visible')
            cy.get('span:contains(Passwords did not match.)').should('be.visible')          
        })   
    })
    it("TC06 - Cadastro de usuário com campos obrigatórios vazios",()=>{
        cy.fixture('../data/register_users/user_register_empty_required_fields.json').then((user) => {
            cy.contains("Register").click()
            cy.get('input[name="customer.firstName"]').type(user.FIRST_NAME)
            cy.get('input[name="customer.lastName"]').type(user.LAST_NAME)
            cy.get('input[name="customer.address.street"]').type(user.ADDRESS)
            cy.get('input[name="customer.address.city"]').type(user.CITY)
            cy.get('input[name="customer.address.state"]').type(user.STATE)
            cy.get('input[name="customer.address.zipCode"]').type(user.ZIP_CODE)
            cy.get('input[name="customer.phoneNumber"]').type(user.PHONE)
            cy.get('input[name="customer.ssn"]').type('{backspace}')
            cy.get('input[name="customer.username"]').type(user.USERNAME)
            cy.get('input[name="customer.password"]').type(user.PASSWORD)
            cy.get('input[name="repeatedPassword"]').type(user.REPETEATED_PASSWORD)
            cy.get("td > .button").click()
            //Asserts
            cy.contains("Social Security Number is required.")
            cy.get(".error").should('be.visible')
        })
    })
})