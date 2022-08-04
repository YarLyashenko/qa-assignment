export class ResultsPage {
    getResults() {
        return cy.get(`#results div.card`);
    }

    verifyEmptyResult() {
        this.getResults().should("not.exist");
        cy.get(`div#not-found`)
            .should("be.visible")
            .should("have.text", "Not found.");
        return this;
    }
}
