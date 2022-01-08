describe("crud pharmacy", () => {
  it("testing crud pharmacy ", () => {
    cy.visit("/dashboard");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.visit("/dashboard/addPharmacy");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get("#name").type("pharmacie des arts");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get("#owner").type("yasmine manser");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get(".ant-cascader-picker-label").click();
    cy.get(".ant-cascader-menu-item").click();
    cy.get('[title="Grande Ariana"]').click();
    cy.get(".ant-btn > span").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get(".ant-pagination-item-2 > a").click({ multiple: true });
    cy.get(".ant-btn-primary > span").click({ multiple: true });
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get("#name").type("danden");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get("#owner").type("ep allani");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get(".ant-cascader-picker-label").click();
    cy.get(".ant-cascader-menu-item").click();
    cy.get('[title="Petite Ariana :D"]').click();
    cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get(".ant-btn-dangerous > span").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    cy.get(".ant-popover-buttons > .ant-btn-primary > span").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
  });
});
