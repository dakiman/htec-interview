import {browser} from "protractor";

const JasmineConsoleReporter = require('jasmine-console-reporter');

let HtmlReporter = require('protractor-beautiful-reporter');

//TODO maybe move to bootstrap
const result = require('dotenv').config({
    path: './.env',
});

if (result.error) {
    console.error('Couldnt find environment variables. Make sure you have a `.env` file prepared in the root of the project');
    throw result.error;
}

exports.config = {

    //TODO replace with configuration prop
    baseUrl: 'https://qa-sandbox.ni.htec.rs',
    framework: 'jasmine2',

    capabilities: {
        browserName: 'chrome',

        // chromeOptions: {
        //     args: ["--headless", "--disable-gpu", "--window-size=800,600"]
        // }
    },

    //TODO review
    specs: [
        './src/specs/test-case.spec.ts',
    ],

    onPrepare: async function () {
        browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './front-end/reports',
            screenshotsSubfolder: 'screenshots',
            gatherBrowserLogs: true,
            preserveDirectory: false,
            takeScreenShotsOnlyForFailedSpecs: false,
            clientDefaults: {
                showTotalDurationIn: "header",
                totalDurationFormat: "hms"
            },
        }).getJasmine2Reporter());

        jasmine.getEnv().addReporter(new JasmineConsoleReporter());
    }
};