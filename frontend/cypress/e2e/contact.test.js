describe("contact", () => {
  it("testing contact ", () => {
    cy.visit("/");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get("input.bg-white").type("marouen@gmail.com");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get(".h-32").type("coucou");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get(".lg:w-1/3 > .text-white").click();
  });
});
