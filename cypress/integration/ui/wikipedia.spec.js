/// <reference types="cypress" />

describe('Actions on main page', () => {
    beforeEach(() => {
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
    })

    it('Open main page', () => {
        cy.contains('Welcome to Wikipedia')
    })

    it('Search article', () => {
        const searchText = 'Cypress'
        cy.get('input[type="search"]').type(`${searchText}{enter}`)
        cy.contains('Cypress is a common name for various coniferous trees')
    })

    it('Navigate to help and search', () => {
        cy.get('a[href="/wiki/Help:Contents"]').click()
        cy.contains('Help:Contents')
        cy.get('.searchboxInput[placeholder="Search Help pages"]').type('edit{enter}')
        cy.contains('Search results')
        cy.contains('There is a page named "Edit" on Wikipedia').should('be.visible')
    })
})
