describe('alura busca cursos',()=>{
    beforeEach(()=>{
        
        cy.visit('https://www.alura.com.br');
    })

    it('Buscar curso de Java', ()=>{
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome')
        .should('have.contain','Formação Java e Orientação a Objetos');
    })

})