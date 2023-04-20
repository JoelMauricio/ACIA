

describe('Agregar Asignaturas', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.wait(1000)
        cy.get('#email').type('rusbelduarte@gmail.com')
        cy.get('#password').type('123456')
        cy.get('.supabase-auth-ui_ui-button').click()
        cy.wait(1000)
        cy.visit('/')
    })

    it('TC16 - Crear Seccion', () => {
        cy.wait(1000)
        cy.get('#bt_AdministrarSecciones').click()
        cy.get('#period-select').select(4)
    })





})
