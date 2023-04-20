describe('Ver perfil', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.wait(1000)
        cy.get('#email').type('j.hormegon@gmail.com')
        cy.get('#password').type('123456')
        cy.get('.supabase-auth-ui_ui-button').click()
        cy.wait(1000)
        cy.visit('/')
    })

    it('TC17 - Ver Perfil de Usuario', () => {
        cy.get('#profile > .flex > .w-full').click()
        cy.contains('Perfil').should('exist')
        cy.get('.bg-purBlue > .h-fit').selectFile('public/bg.png')

    })

})
