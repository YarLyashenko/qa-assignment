import {openApp} from "../pages";
import * as people10 from "../fixtures/people.10.json";
import * as peopleOO from "../fixtures/people.oo.json";

describe("Search for a person", () => {
    it("Search existing person by exact name", () => {
        let person = people10.results[(people10.results.length * Math.random()) | 0];
        openApp()
            .searchPeople(person.name)
            .compareResultsWithExpected(Array.of(person));
    });

    it("Search existing people by empty string", () => {
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
});
