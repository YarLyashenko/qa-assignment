import {ResultsPage} from "./results.page";
import {SearchPage} from "./search.page";

export class PlanetsPage extends ResultsPage {
    compareResultsWithExpected(expectedList: any) {
        this.getResults()
            .should("have.length", expectedList.length)
            .each((item, index) => {
                cy.wrap(item).find("#name").should("be.visible", "have.text", expectedList[index].name);
                cy.wrap(item).find("#population-title").should("have.text", "Population:");
                cy.wrap(item).find("#population-value").should("have.text", expectedList[index].population);
                cy.wrap(item).find("#climate-title").should("have.text", "Climate:");
                cy.wrap(item).find("#climate-value").should("have.text", expectedList[index].climate);
                cy.wrap(item).find("#gravity-title").should("have.text", "Gravity:");
                cy.wrap(item).find("#gravity-value").should("have.text", expectedList[index].gravity);
            });

        return new SearchPage();
    }
}
