describe("crud vaccine", () => {
  it("testing crud vaccine ", () => {
    cy.visit("/dashboard");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.visit("/dashboard/addVaccine");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get("#label").type("newvaccine");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get(".ant-btn").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get(".ant-pagination-item-2 > a").click({ multiple: true });
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get(
      ":nth-child(3) > :nth-child(2) > div > .ant-btn-primary > span"
    ).click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get("#label").type("2");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get(
      ":nth-child(3) > :nth-child(2) > div > .ant-btn-dangerous > span"
    ).click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get(".ant-popover-buttons > .ant-btn-primary > span").click();
  });
});
