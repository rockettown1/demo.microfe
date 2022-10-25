import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

const endpoint = "http://localhost:3000/live/demo-microfe/header";

Given("I make a request to the lambda", () => {
  cy.visit(endpoint);
});

Then("I should see the header component", () => {
  cy.get("h1").should("have.text", "Header");
});
