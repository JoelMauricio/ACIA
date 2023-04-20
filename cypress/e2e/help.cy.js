

describe('Solicitar Ayuda', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.wait(1000)
        cy.get('#email').type('test@gmail.com')
        cy.get('#password').type('123456test')
        cy.get('.supabase-auth-ui_ui-button').click()
        cy.wait(1000)
        cy.visit('/')
    })

    it('TC6 - Solicitar Ayuda', () => {
        cy.get('#bt_Ayuda').click()
        cy.wait(1000)
        cy.contains('Ayuda').should('exist')
        cy.get(':nth-child(2) > .text-lg').click()
        cy.contains('En ese caso debera de comunicarse con servico al cliente para solicitar la ayuda de un admisnitrador sobre su caso.').should('exist')
        cy.get('.justify-center').click()

    })



})
