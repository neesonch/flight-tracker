describe("Dashboard flow", () => {
  beforeEach(() => {
    cy.reload();
  });

  it("Loads successfully", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h4").should("include.text", "Please select a portfolio");
  });

  it("Clicking the view button on a portfolio card displays the portfolio details", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("All aircraft")
      .parent()
      .within((card) => cy.contains("View").click());
    cy.get("h4").should("include.text", "All aircraft");
  });

  it("Entering text into the 'Portfolio Name' input and clicking 'Add New Portfolio' creates a new portfolio", () => {
    const newPortfolioName = "E2E Test Portfolio";
    const addPortfolioButtonText = "Add new portfolio";

    cy.visit("http://localhost:3000/");
    cy.contains("button", addPortfolioButtonText).should("be.disabled");
    cy.contains("Your Portfolios")
      .get("#new-portfolio-name")
      .type(newPortfolioName);
    cy.contains("button", addPortfolioButtonText).should("not.be.disabled");
    cy.contains("button", addPortfolioButtonText).click();

    cy.contains("Your Portfolios")
      .parent()
      .within((portfolios) => cy.contains(newPortfolioName).should("exist"));
  });

  it("Clicking the delete button on an aircraft within a portfolio removes it from the list", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("All aircraft")
      .parent()
      .within((card) => cy.contains("View").click());

    cy.contains("D-AIUO").should("exist");

    cy.contains("D-AIUO")
      .parent()
      .parent()
      .within((card) => cy.get('[aria-label="delete"]').click());

    cy.contains("D-AIUO").should("not.exist");
  });
});
