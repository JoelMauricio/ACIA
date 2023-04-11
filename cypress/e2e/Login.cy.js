describe('basic flow test', () => {
  it('fill login form', () => {
    cy.visit('/login')
    cy.get('#email').type('  joeldavidmauriciohdez@gmail.com')
    cy.get('#password').type('12345678')
    cy.get('.supabase-auth-ui_ui-button').click()
  })
  it('read FAQ', () => {
    cy.get('#bt_Ayuda').click()
    cy.get(':nth-child(2) > .text-lg').click()
    cy.get('.bg-gray-100').should('be.visible')
  })
  it('visit profile', () => {
    cy.get('#profile').click()
  })


})