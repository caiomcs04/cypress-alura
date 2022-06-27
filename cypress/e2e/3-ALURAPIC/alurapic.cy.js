
describe("Usabilidade tela inicial", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com");
  });

  it('Verifica mensagem inicial', ()=>{
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    cy.get('button[type="submit"]').should('be.disabled')
  })

  it('Verifica botãoo habilitado na tela inicial', () =>{
    cy.get('input[formcontrolname="userName"').type('teste123')
    cy.get('input[formcontrolname="password"').type('teste123')
    cy.get('button[type="submit"]').should('be.enabled')
  })

  it('Verifica nome da aplicação na tela inicial', () =>{
    cy.contains('a', 'ALURAPIC').should('be.visible')
  })

  it('Verifica menu clicavel tela inicial', () =>{
    cy.get('.navbar-brand > .fa').click();
    cy.get('.menu-bar > .fa').should('be.visible');
  })
});
