import {ResultsPage} from "./results.page";
import {SearchPage} from "./search.page";

export class PeoplePage extends ResultsPage {
    compareResultsWithExpected(expectedList: any) {
        this.getResults()
            .should("have.length", expectedList.length)
            .each((item, index) => {
                cy.wrap(item).find("#name").should("be.visible", "have.text", expectedList[index].name);
                cy.wrap(item).find("#gender-title").should("have.text", "Gender:");
                cy.wrap(item).find("#gender-value").should("have.text", expectedList[index].gender);
                cy.wrap(item).find("#birth-year-title").should("have.text", "Birth year:");
                cy.wrap(item).find("#birth-year-value").should("have.text", expectedList[index].birth_year);
                cy.wrap(item).find("#eye-color-title").should("have.text", "Eye color:");
                cy.wrap(item).find("#eye-color-value").should("have.text", expectedList[index].eye_color);
                cy.wrap(item).find("#skin-color-title").should("have.text", "Skin color:");
                cy.wrap(item).find("#skin-color-value").should("have.text", expectedList[index].skin_color);
            });

        return new SearchPage();
    }
}
