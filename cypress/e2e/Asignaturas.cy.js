

describe('Test Asignaturas', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.wait(1000)
        cy.get('#email').type('test@gmail.com')
        cy.get('#password').type('123456test')
        cy.get('.supabase-auth-ui_ui-button').click()
        cy.wait(1000)
        cy.visit('/')
    })

    it('TC2 - Seleccionar Asignatura', () => {
        cy.get('#bt_Seleccion').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > :nth-child(8) > input').click()

        cy.get('.bg-purBlue').click()
        cy.wait(4000)
    })


    it('TC3 - Seleccionar Editar seleccion', () => {
        cy.get('#bt_Seleccion').click()
        cy.wait(1000)
        cy.get('.flex > .table-auto > .divide-y > tr > :nth-child(8)').click(40, 15)
        cy.get('.bg-purBlue').click()

    })



})
