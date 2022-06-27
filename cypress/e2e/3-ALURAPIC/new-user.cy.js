import user from "../../fixtures/user.json";

describe("Cadastro de usuarios alura pic", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com");
  });

  it("Verificar mensagem validação required", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Email is required!").should("be.visible");
    cy.contains("ap-vmessage", "Full name is required!").should("be.visible");
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
  });

  it("Verificar mensagem email invalid", () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="email"]').type("teste");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
  });

  it('Verificar mensagem "Mininum length is 2" for full name', () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="fullName"]').type("t");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 2").should("be.visible");
  });

  it('Verificar mensagem "Maximun length is 40" for full name', () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="fullName"]').type(
      "12345678901234567891123456789212345678931234567894"
    );
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Maximun length is 40").should("be.visible");
  });

  it('Verificar mensagem "Mininum length is 2" for user name', () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="userName"]').type("t");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 2").should("be.visible");
  });

  it('Verificar mensagem "Maximun length is 30" for user name', () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="userName"]').type(
      "1234567890123456789112345678921234567893"
    );
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Maximun length is 30").should("be.visible");
  });

  it('Verificar mensagem "Mininum length is 8" for password', () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="password"]').type("t");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 8").should("be.visible");
  });

  it('Verificar mensagem "Maximun length is 18" for password', () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="password"]').type("123456789012345678");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Maximun length is 18").should("be.visible");
  });

  user.forEach((user) => {
    it.only(`registrar novo usuário: ${user.userName}`, () => {
      cy.contains("a", "Register now").click();
      cy.contains("button", "Register").click();
      cy.get('input[formcontrolname="email"]').type(user.email);
      cy.get('input[formcontrolname="fullName"]').type(user.fullName);
      cy.get('input[formcontrolname="userName"]').type(user.userName);
      cy.get('input[formcontrolname="password"]').type(user.password);
      cy.contains("button", "Register").click();
    });
  });
});
