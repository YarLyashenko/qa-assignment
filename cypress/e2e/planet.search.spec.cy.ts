import {openApp} from "../pages";
import * as planets10 from "../fixtures/planets.10.json";
import * as planetsOO from "../fixtures/planets.oo.json";
import * as people10 from "../fixtures/people.10.json";

describe("Search for a planet", () => {
    it("Search existing planet by exact name", () => {
        let planet = planets10.results[(planets10.results.length * Math.random()) | 0];
        openApp()
            .searchPlanet(planet.name)
            .compareResultsWithExpected(Array.of(planet));
    });

    it("Search existing planets by whitespace", () => {
        openApp()
            .searchPlanet(" ")
            .compareResultsWithExpected(planets10.results);
    });

    it("Search existing planets by partial string", () => {
        openApp()
            .searchPlanet("oo")
            .compareResultsWithExpected(planetsOO.results);
    });

    it("Search non-existing planet", () => {
        openApp()
            .searchPlanet(Math.random().toString(36))
            .verifyEmptyResult();
    });

    it("Search planets by empty string should cleanup previous results", () => {
        let planet = planets10.results[(planets10.results.length * Math.random()) | 0];
        openApp()
            .searchPlanet(planet.name)
            .compareResultsWithExpected(Array.of(planet))
            .searchPlanetByEmptyString()
            .verifyEmptyResult();
    });

    it("Search planets by pressing Enter", () => {
        let planet = planets10.results[(planets10.results.length * Math.random()) | 0];
        openApp()
            .searchPlanetByPressingEnter(planet.name)
            .compareResultsWithExpected(Array.of(planet))
    });

    it("Search planets after searching people", () => {
        let planet = planets10.results[(planets10.results.length * Math.random()) | 0];
        let person = people10.results[(people10.results.length * Math.random()) | 0];
        openApp()
            .searchPeople(person.name)
            .compareResultsWithExpected(Array.of(person))
            .searchPlanet(planet.name)
            .compareResultsWithExpected(Array.of(planet))
    });
});
