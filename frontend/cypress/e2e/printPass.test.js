describe("print pass", () => {
  it("testing print pass ", () => {
    cy.visit("/");
    cy.get(".container > .inline-flex").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get("#email").type("ghada.bendhieb20@gmail.com");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get(".fourth").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get("#email").type("ghada.bendhieb20@gmail.com");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get("#password").type("Hktm92");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get(".fourth").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get(
      '[style="float: right; display: inline-block;"] > [type="button"]'
    ).click();
  });
});
