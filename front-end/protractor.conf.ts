import { browser } from "protractor";
const JasmineConsoleReporter = require('jasmine-console-reporter');

let HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

    framework: 'jasmine2',

    specs: [
        './specs/*.ts',
    ],

    onPrepare: async function () {
        browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();
        
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './front-end/reports',
            screenshotsSubfolder: 'screenshots',
            gatherBrowserLogs: true,
            preserveDirectory: true,
            takeScreenShotsOnlyForFailedSpecs: false,
            clientDefaults: {
                showTotalDurationIn: "header",
                totalDurationFormat: "hms"
            },
        }).getJasmine2Reporter());

        jasmine.getEnv().addReporter(new JasmineConsoleReporter());
    }
};