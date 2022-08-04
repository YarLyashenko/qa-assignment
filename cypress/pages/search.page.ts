import {PeoplePage} from "./people.page";
import {PlanetsPage} from "./planets.page";

export class SearchPage {
    clickOnPeople() {
        cy.get(`input#people`).click();
        return this;
    }

    clickOnPlanets() {
        cy.get(`input#planets`).click();
        return this;
    }

    fillQuery(query: string) {
        cy.get(`input#query`).type(query);
        return this;
    }

    clickSearchButton() {
        cy.get(`button#search`).click();
        return this;
    }

    searchPeople(people: string) {
        this.clickOnPeople().fillQuery(people).clickSearchButton();
        return new PeoplePage();
    }

    searchPlanet(planet: string) {
        this.clickOnPlanets().fillQuery(planet).clickSearchButton();
        return new PlanetsPage();
    }
}
