describe('basic flow test', () => {
  it('fill login form', () => {
    cy.visit('/login')
    cy.get('#email').type('  test@gmail.com')
    cy.get('#password').type('123456test')
    cy.get('.supabase-auth-ui_ui-button').click()
    it('read FAQ', () => {
      cy.visit('/ayuda')

    })
  })

  it('visit profile', () => {
    cy.get('#profile').click()
  })


})