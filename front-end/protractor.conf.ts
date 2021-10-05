import {browser} from "protractor";
import './bootstrap';
import Configuration from "../app-config";
const JasmineConsoleReporter = require('jasmine-console-reporter');
let HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

    baseUrl: Configuration.BASE_URL_FE,
    framework: 'jasmine2',

    capabilities: {
        browserName: 'chrome',

        // chromeOptions: {
        //     args: ["--headless", "--disable-gpu", "--window-size=800,600"]
        // }
    },

    specs: [
        './src/specs/*.spec.ts',
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