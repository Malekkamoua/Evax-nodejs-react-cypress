describe("crud center", () => {
  it("testing crud center ", () => {
    cy.visit("/dashboard");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.visit("/dashboard/addCenter");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get("#name").type("centre1");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get(".ant-cascader-picker-label").click();
    cy.get(".ant-cascader-menu-item").click();
    cy.get('[title="Grande Ariana"]').click();
    cy.get(".ant-btn > span").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get(".ant-pagination-item-2 > a").click({ multiple: true });
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get(
      ":nth-child(1) > :nth-child(3) > div > .ant-btn-primary > span"
    ).click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get("#name").type("2");
    cy.get(".ant-cascader-picker-label").click();
    cy.get(".ant-cascader-menu-item").click();
    cy.get('[title="Petite Ariana :D"]').click();
    cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get(
      ":nth-child(1) > :nth-child(3) > div > .ant-btn-dangerous > span"
    ).click();
    cy.get(".ant-popover-buttons > .ant-btn-primary > span").click();
  });
});
