describe('Recuperar contrasena', () => {

    beforeEach(() => {
        cy.visit('/login')
    })

    it('TC14 - change password were the old and new password are correct', () => {
        cy.get('[href="#auth-forgot-password"]').click
        cy.get('#email').type('test@gmail.com')
        cy.visit('/recovery')
        cy.get('.border-2').type('dVpc3jyIrVDY9M7uOufQL1wadKI7Hx1E')
        cy.get('.bg-purBlue').click()
        cy.get('[placeholder="Nueva Contraseña"]').type('123456test')
        cy.get('[placeholder="Repita la Nueva contraseña"]').type('123456test')
        cy.get('.bg-purBlue').click()
        cy.get('#email').should('exist')
        cy.get('#password').should('exist')
    })

    it('TC15 - try to change password were the old and new password are not matching', () => {
        cy.get('[href="#auth-forgot-password"]').click
        cy.get('#email').type('test@gmail.com')
        cy.visit('/recovery')
        cy.get('.border-2').type('dVpc3jyIrVDY9M7uOufQL1wadKI7Hx1E')
        cy.get('.bg-purBlue').click()
        cy.get('[placeholder="Nueva Contraseña"]').type('156test')
        cy.get('[placeholder="Repita la Nueva contraseña"]').type('123456test')
        cy.get('.bg-purBlue').click()
        cy.get('#email').should('not.exist')
        cy.get('#password').should('not.exist')
    })


})
