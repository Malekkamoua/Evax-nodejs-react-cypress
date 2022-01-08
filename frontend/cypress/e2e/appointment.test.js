describe("appointment", () => {
  it("testing appointment ", () => {
    cy.visit("/");
    cy.get(".container > .inline-flex").click();
    cy.get("#email").type("ghada.bendhieb20@gmail.com");
    cy.get(".fourth").click();
    cy.get("#email").type("ghada.bendhieb20@gmail.com");
    cy.get("#password").type("Hktm92");
    cy.get(".fourth").click();
    cy.get(".text-lg").click();
  });
});
