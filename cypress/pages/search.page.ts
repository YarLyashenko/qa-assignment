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
        this.getQueryField().clear().type(query);
        return this;
    }

    clearQuery() {
        this.getQueryField().clear();
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

    searchPeopleByPressingEnter(people: string) {
        this.clickOnPeople().fillQuery(people + '{enter}');
        return new PeoplePage();
    }

    searchPeopleByEmptyString() {
        this.clickOnPeople().clearQuery().clickSearchButton();
        return new PeoplePage();
    }

    searchPlanet(planet: string) {
        this.clickOnPlanets().fillQuery(planet).clickSearchButton();
        return new PlanetsPage();
    }

    searchPlanetByPressingEnter(planet: string) {
        this.clickOnPlanets().fillQuery(planet + '{enter}');
        return new PlanetsPage();
    }

    searchPlanetByEmptyString() {
        this.clickOnPlanets().clearQuery().clickSearchButton();
        return new PlanetsPage();
    }

    private getQueryField() {
        return cy.get(`input#query`)
    }
}
