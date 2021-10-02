import {browser} from "protractor";

const JasmineConsoleReporter = require('jasmine-console-reporter');

let HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

    baseUrl: 'https://qa-sandbox.ni.htec.rs',
    framework: 'jasmine2',

    capabilities: {
        browserName: 'chrome',

        // chromeOptions: {
        //     args: ["--headless", "--disable-gpu", "--window-size=800,600"]
        // }
    },

    specs: [
        './specs/*.ts',
    ],

    onPrepare: async function () {
        //TODO review if is needed
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