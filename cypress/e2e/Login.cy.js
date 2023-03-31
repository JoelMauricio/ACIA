describe('LoginTest', () => {
  it('fill login form', () => {
    cy.visit('/login')
    cy.get('#email').type('  test@gmail.com')
    cy.get('#password').type('test123456')
    cy.get('.supabase-auth-ui_ui-button').click()
  })
  it('read FAQ', () => {
    cy.visit('/ayuda')
    cy.get(':nth-child(2) > .text-lg').click()
    cy.get('.bg-gray-100').contains('Nuestra política de devoluciones es que aceptamos devoluciones dentro de los 30 días posteriores a la compra. Para procesar una devolución, necesitarás proporcionar el recibo de compra o la confirmación del pedido. Si la devolución se debe a un error nuestro, cubriremos los costos de envío de la devolución. Si la devolución se debe a un error del cliente, el cliente es responsable de los costos de envío de la devolución. Una vez que hayamos recibido la devolución, procesaremos el reembolso dentro de 5-7 días hábiles.')
    
  })
  it('read FAQ', () => {
    cy.visit('/')
    cy.get('#profile').click()
  })


})