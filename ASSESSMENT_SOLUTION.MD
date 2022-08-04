# QA Engineer Assessment

## Solution

UI tests using Cypress library and Page Object pattern. Page contains locators and actions.
App upgraded to the last Angular version.

## Requirements

- **NodeJS 16**
- Chrome browser
- Tested on Windows 10

## Installation

```
npm install
```

## Run

```
ng e2e
```

## Report 

- Test report is hosted [here](https://yarlyashenko.github.io/qa-assignment/)
- Html report is automatically generated to [index.html](./cypress/reports/html/index.html)
- Video recordings are generated to [people.search.spec.cy.ts.mp4](./cypress/videos/people.search.spec.cy.ts.mp4) and [planet.search.spec.cy.ts.mp4](./cypress/videos/planet.search.spec.cy.ts.mp4)   
 

## Issues
- Empty string as a wildcard - search returns all entities.
- No pagination. Only first 10 results are shown.
- Cannot retry search without changing input.
