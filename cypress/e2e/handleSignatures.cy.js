

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

    it('TC4 - Agregar Asignaturas', () => {
        cy.wait(1000)
        cy.get('#bt_AdministrarAsignaturas').click()
        cy.get('.bg-purBlue').click()
        cy.get('#courseName').type("test" + Math.random().toString(36).substring(2, 10))
        cy.get('#courseCode').type("IDS324")
        cy.get('#courseCredits').select(1)
        cy.get('#courseArea').select(1)
        cy.get('.items-center > .bg-purBlue').click()

    })

    it('TC5 - Editar Asignaturas', () => {
        cy.wait(1000)
        cy.get('#bt_AdministrarAsignaturas').click()
        cy.wait(2000)
        cy.get('.flex-wrap > :nth-child(2) > :nth-child(2)').click(40, 40)
        cy.get('#courseName').type("test" + Math.random().toString(36).substring(2, 10))
        cy.get('.items-center > .bg-purBlue').click()
    })



})
