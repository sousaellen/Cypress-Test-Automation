/// <reference types="cypress" />

describe("UC06",()=>{
    beforeEach(() => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")});
    it("TC24 - Visualizar painel geral das contas com sucesso",()=>{
        cy.fixture('../data/login/users_login.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            cy.contains("Accounts Overview").click()
            //Asserts
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/overview.htm')
            cy.get('h1:contains(Accounts Overview)').should('be.visible')
            
            cy.contains("Log Out").click()
        })
    })
    it("TC25 - Exibir lista de contas com sucesso",()=>{
        cy.fixture('../data/login/users_login.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            cy.contains("Accounts Overview").click()
            //Asserts
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/overview.htm')
            cy.get('h1:contains(Accounts Overview)').should('be.visible')
            cy.get('table[id="accountTable"]').should('be.visible')
            cy.get('#accountTable > tbody > tr.ng-scope').should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Account)").should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Balance*)").should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Available Amount)").should('be.visible')
            
            cy.contains("Log Out").click()
        })
    })
    it("TC26 - Visualizar detalhes de uma conta com sucesso",()=>{
        cy.fixture('../data/login/users_login.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            cy.contains("Accounts Overview").click()
            //Asserts
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/overview.htm')
            cy.get('h1:contains(Accounts Overview)').should('be.visible')
            cy.get('table[id="accountTable"]').should('be.visible')
            cy.get('#accountTable > tbody > tr.ng-scope').should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Account)").should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Balance*)").should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Available Amount)").should('be.visible')
            
            cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
            //Asserts
            cy.get('h1:contains(Account Details)').should('be.visible')

            cy.contains("Log Out").click()
        })
    })
    it("TC27 - Verificar dados da conta",()=>{
        cy.fixture('../data/login/users_login.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            cy.contains("Accounts Overview").click()
            //Asserts
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/overview.htm')
            cy.get('h1:contains(Accounts Overview)').should('be.visible')
            cy.get('table[id="accountTable"]').should('be.visible')
            cy.get('#accountTable > tbody > tr.ng-scope').should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Account)").should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Balance*)").should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Available Amount)").should('be.visible')
            
            cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
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
    it("TC28 - Visualizar atividades da conta",()=>{
        cy.fixture('../data/login/users_login.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            cy.contains("Transfer Funds").click()
            cy.get("#fromAccountId > option").eq(0)
            cy.get("#toAccountId > option").eq(1)
            cy.get("#amount").type("1")
            cy.get(".button:nth-child(1)").click()

            cy.contains("Accounts Overview").click()
            //Asserts
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/overview.htm')
            cy.get('h1:contains(Accounts Overview)').should('be.visible')
            cy.get('table[id="accountTable"]').should('be.visible')
            cy.get('#accountTable > tbody > tr.ng-scope').should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Account)").should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Balance*)").should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Available Amount)").should('be.visible')
            
            cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
            cy.get('select[id="month"]').select("All")
            cy.get('select[id="transactionType"]').select("All")
            cy.get('input[value="Go"]').click()

            //Asserts
            cy.get('h1:contains(Account Activity)').should('be.visible')
            cy.get('table[id="transactionTable"]').should('be.visible')
            cy.get('#transactionTable > thead > tr > th:contains(Date)').should('be.visible')
            cy.get('#transactionTable > thead > tr > th:contains(Transaction)').should('be.visible')
            cy.get('#transactionTable > thead > tr > th:contains(Debit (-))').should('be.visible')
            cy.get('#transactionTable > thead > tr > th:contains(Credit (+))').should('be.visible')

            cy.contains("Log Out").click()
        })
    })
    it("TC29 - Visualizar lista de transações da conta",()=>{
        cy.fixture('../data/login/users_login.json').then((user) => {
            cy.get("#loginPanel > form > div:nth-child(2) > input").type(user.USERNAME)
            cy.get("#loginPanel > form > div:nth-child(4) > input").type(user.PASSWORD)
            cy.get("#loginPanel > form > div:nth-child(5) > input").click()
            cy.contains("Transfer Funds").click()
            cy.get("#fromAccountId > option").eq(0)
            cy.get("#toAccountId > option").eq(1)
            cy.get("#amount").type("1")
            cy.get(".button:nth-child(1)").click()
            cy.contains("Accounts Overview").click()
            //Asserts
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/overview.htm')
            cy.get('h1:contains(Accounts Overview)').should('be.visible')
            cy.get('table[id="accountTable"]').should('be.visible')
            cy.get('#accountTable > tbody > tr.ng-scope').should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Account)").should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Balance*)").should('be.visible')
            cy.get("#accountTable > thead > tr > th:contains(Available Amount)").should('be.visible')
            
            cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
            cy.get('select[id="month"]').select("All")
            cy.get('select[id="transactionType"]').select("All")
            cy.get('input[value="Go"]').click()
            cy.get("#transactionTable > tbody > tr:nth-child(1) > td:nth-child(2) > a").click()
            //Asserts
            cy.get('h1:contains(Transaction Details)').should('be.visible')
            cy.get('b:contains(Transaction ID:)').should('be.visible')
            cy.get('tr:nth-child(1) > td:nth-child(2)').should('be.visible')
            cy.get('b:contains(Date:)').should('be.visible')
            cy.get('tr:nth-child(2) > td:nth-child(2)').should('be.visible')
            cy.get('b:contains(Description:)').should('be.visible')
            cy.get('tr:nth-child(3) > td:nth-child(2)').should('be.visible')
            cy.get('b:contains(Type:)').should('be.visible')
            cy.get('tr:nth-child(4) > td:nth-child(2)').should('be.visible')
            cy.get('b:contains(Amount:)').should('be.visible')
            cy.get('tr:nth-child(5) > td:nth-child(2)').should('be.visible')

            cy.contains("Log Out").click()
        })
    })
})