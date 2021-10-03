import LoginActions from "../actions/LoginActions";
import SidebarComponent from "../pages/SidebarComponent";
import TestCasesPage from "../pages/TestCasesPage";
import WebDriverUtils from "../utils/WebDriverUtils";
import DataUtils from "../utils/DataUtils";
import TestCase from "../types/TestCase";
import TestCaseActions from "../actions/TestCaseActions";
import {$$, browser, by, element} from "protractor";

describe('Add test cases to application', () => {

    let loginActions = new LoginActions();
    let sidebarComponent = new SidebarComponent();
    let testCasesPage = new TestCasesPage();
    let testCaseActions = new TestCaseActions();
    let testCases: Array<TestCase>;

    beforeAll(async () => {
        await loginActions.defaultLogin();
        await sidebarComponent.clickTestCasesNavButton();
        testCases = JSON.parse(await DataUtils.readFileAsJson('front-end/resources/testCases.json'));
    })

    it('Deletes existing test cases', async () => {
        await browser.sleep(2000)
        let testCases = $$('.portrait-grid > span');
        let casesCount = await testCases.count();

        for (let i = 0; i < casesCount; i++) {
            testCases = $$('.portrait-grid > span');
            testCases.first().element(by.xpath('//*[contains(@href, "/edit-testcase/")]')).click();
            let deleteBtn = element(by.css('#root > div > div.grid-menu-container > div.main-grid > div > div > div:nth-child(1) > div > div > div > span > button'))
            deleteBtn.click();

            let removeBtn = element(by.className('confirmation-dialog--buttons--confirm'))
            removeBtn.click();

            await WebDriverUtils.waitUntilUrlContains('/testcases')
        }
    })

    // it('Add test cases from a file', async () => {
    //     await testCaseActions.addTestCases(testCases);
    // })

})