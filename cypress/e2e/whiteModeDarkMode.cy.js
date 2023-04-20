describe(' Ver Configuración', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.wait(1000)
        cy.get('#email').type('j.hormegon@gmail.com')
        cy.get('#password').type('123456')
        cy.get('.supabase-auth-ui_ui-button').click()
        cy.wait(1000)
        cy.visit('/')
    })

    it('TC18 - Ver Configuración', () => {
        cy.get('#bt_Theme > .flex').click()
        cy.contains('Claro').should('exist')
        cy.get('#bt_Theme > .flex').click()
        cy.contains('Oscuro').should('exist')

    })

})
