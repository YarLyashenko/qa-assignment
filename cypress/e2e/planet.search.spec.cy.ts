import {openApp} from "../pages";
import * as planets10 from "../fixtures/planets.10.json";
import * as planetsOO from "../fixtures/planets.oo.json";

describe("Search for a planet", () => {
    it("Search existing planet by exact name", () => {
        let planet = planets10.results[(planets10.results.length * Math.random()) | 0];
        openApp()
            .searchPlanet(planet.name)
            .compareResultsWithExpected(Array.of(planet));
    });

    it("Search existing planets by empty string", () => {
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
});
