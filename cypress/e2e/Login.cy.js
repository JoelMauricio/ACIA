describe('login flow', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should login successfully with valid credentials', () => {
    cy.get('#email').type('   test@gmail.com')
    cy.get('#password').type('123456test')
    cy.get('.supabase-auth-ui_ui-button').click()
    cy.wait(2000)
    cy.getCookie('supabase-auth-token').should('exist')
  })

  it('TC8 - should not login with invalid email', () => {
    cy.get('#email').type('invalid@email.com')
    cy.get('#password').type('123456test')
    cy.get('.supabase-auth-ui_ui-button').click()
    cy.wait(2000)
    cy.contains('Invalid login credentials').should('exist')
  })

  it('TC9 - should not login with invalid password', () => {
    cy.get('#email').type('   test@gmail.com')
    cy.get('#password').type('invalidpassword')
    cy.get('.supabase-auth-ui_ui-button').click()
    cy.contains('Invalid login credentials').should('exist')
    cy.getCookie('supabase-auth-token').should('not.exist')
  })

  it('TC10 - should not login with empty email and password', () => {
    cy.get('.supabase-auth-ui_ui-button').click()
    cy.wait(1000)
    cy.contains('Invalid login credentials').should('exist')
    cy.getCookie('supabase-auth-token').should('not.exist')
  })
})
