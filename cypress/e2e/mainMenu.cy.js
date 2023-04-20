describe('Verificar el menu principal', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.wait(1000)
    })

    it('TC011 - Ver Menú Principal - Rol: Profesor', () => {
        cy.get('#email').type('j.hormegon@gmail.com')
        cy.get('#password').type('123456')
        cy.get('.supabase-auth-ui_ui-button').click()
        cy.wait(1000)
        cy.visit('/')
        cy.contains('Gestión de Calificaciones').should('exist')

    })

    it('TC12 - Ver Menú Principal - Rol: Estudiante', () => {
        cy.get('#email').type('test@gmail.com')
        cy.get('#password').type('123456test')
        cy.get('.supabase-auth-ui_ui-button').click()
        cy.wait(1000)
        cy.visit('/')
        cy.contains('Seleccionar Asignatura').should('exist')
        cy.contains('Historial Academico').should('exist')

    })


    it('TC13 - Ver Menú Principal - Rol: Administrador', () => {
        cy.get('#email').type('rusbelduarte@gmail.com')
        cy.get('#password').type('123456')
        cy.get('.supabase-auth-ui_ui-button').click()
        cy.wait(1000)
        cy.visit('/')
        cy.contains('Administrar Usuarios').should('exist')
        cy.contains('Administrar Asignaturas').should('exist')
        cy.contains('Administrar Secciones').should('exist')

    })





})
