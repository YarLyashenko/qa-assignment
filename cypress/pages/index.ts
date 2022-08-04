export * from "./search.page";
export * from "./people.page";
export * from "./planets.page";
export * from "./results.page";

import {SearchPage} from "./search.page";

export function openApp() {
    cy.visit("/");
    return new SearchPage();
}
