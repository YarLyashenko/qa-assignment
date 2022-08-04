import {defineConfig} from "cypress";

export default defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    video: true,
    screenshotsFolder: 'images',
    retries: 1,
    reporterOptions: {
        charts: true,
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },
    e2e: {
        baseUrl: "http://localhost:4200",
        defaultCommandTimeout: 10000,
        setupNodeEvents(on) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});
