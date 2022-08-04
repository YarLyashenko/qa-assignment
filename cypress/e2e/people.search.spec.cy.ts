import {openApp} from "../pages";
import * as people10 from "../fixtures/people.10.json";
import * as peopleOO from "../fixtures/people.oo.json";
import * as planets10 from "../fixtures/planets.10.json";

describe("Search for a person", () => {
    it("Search existing person by exact name", () => {
        let person = people10.results[(people10.results.length * Math.random()) | 0];
        openApp()
            .searchPeople(person.name)
            .compareResultsWithExpected(Array.of(person));
    });

    it("Search existing people by whitespace", () => {
        openApp()
            .searchPeople(" ")
            .compareResultsWithExpected(people10.results);
    });

    it("Search existing people by partial string", () => {
        openApp()
            .searchPeople("oo")
            .compareResultsWithExpected(peopleOO.results);
    });

    it("Search non-existing person", () => {
        openApp()
            .searchPeople(Math.random().toString(36))
            .verifyEmptyResult();
    });

    it("Search person by empty string should cleanup previous results", () => {
        let person = people10.results[(people10.results.length * Math.random()) | 0];
        openApp()
            .searchPeople(person.name)
            .compareResultsWithExpected(Array.of(person))
            .searchPeopleByEmptyString()
            .verifyEmptyResult();
    });

    it("Search person by pressing Enter", () => {
        let person = people10.results[(people10.results.length * Math.random()) | 0];
        openApp()
            .searchPeopleByPressingEnter(person.name)
            .compareResultsWithExpected(Array.of(person))
    });

    it("Search people after searching planets", () => {
        let planet = planets10.results[(planets10.results.length * Math.random()) | 0];
        let person = people10.results[(people10.results.length * Math.random()) | 0];
        openApp()
            .searchPlanet(planet.name)
            .compareResultsWithExpected(Array.of(planet))
            .searchPeople(person.name)
            .compareResultsWithExpected(Array.of(person))
    });
});
