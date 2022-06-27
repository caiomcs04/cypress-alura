describe("Login de usuarios alura pic", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com");
  });

  //Por algum motivo nao funciona no chrome. provavelmente CORS
  it("Fazer login usuário válido", () => {
    cy.login("flavio", "123");
    cy.contains("a", "(Logout)").should("be.visible");
  });

  it("Fazer login usuário inválido", () => {
    cy.login("flavio", "1234");
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Invalid user name or password");
    });
  });
});
