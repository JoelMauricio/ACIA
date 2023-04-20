

describe('Agregar Calificaciones', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.wait(1000)
        cy.get('#email').type('j.hormegon@gmail.com')
        cy.get('#password').type('123456')
        cy.get('.supabase-auth-ui_ui-button').click()
        cy.wait(1000)
        cy.visit('/')
    })

    it('TC1 - Agregar Calificaciones', () => {
        cy.get('#bt_GestionCalificaciones').click()
        cy.wait(1000)
        cy.get('#period-select').select(1)
        cy.get('.flex-wrap > :nth-child(1) > :nth-child(2)').click(180, 40)
        cy.get('#grade').clear().type("80")
        cy.get('.bg-purBlue').click()


    })



})
