describe('Visualizar Índice Académico', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.wait(1000)
        cy.get('#email').type('test@gmail.com')
        cy.get('#password').type('123456test')
        cy.get('.supabase-auth-ui_ui-button').click()
        cy.wait(1000)
        cy.visit('/')
    })

    it('TC7 - Visualizar Índice Académico', () => {
        cy.get('#bt_HistorialAcademico').click()
        cy.contains('4').should('exist')
        cy.get('.h-full > .p-2').select(2)
        cy.get('.bg-blue').click()
        cy.contains('3.4').should('exist')

    })

})
