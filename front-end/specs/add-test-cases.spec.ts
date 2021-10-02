import LoginActions from "../actions/LoginActions";
import SidebarComponent from "../pages/SidebarComponent";
import TestCasesPage from "../pages/TestCasesPage";
import WebDriverUtils from "../utils/WebDriverUtils";
import DataUtils from "../utils/DataUtils";
import TestCase from "../types/TestCase";

describe('Add test cases to application', () => {

    let loginActions = new LoginActions();
    let sidebarComponent = new SidebarComponent();
    let testCasesPage = new TestCasesPage();
    let testCases: Array<TestCase>;

    beforeAll(async () => {
        await loginActions.defaultLogin();
        await sidebarComponent.clickTestCasesNavButton();
        testCases = JSON.parse(await DataUtils.readFileAsJson('front-end/resources/testCases.json'));
    })

    it('Adds a test case', async () => {
        //TODO review to replace with forEach
        for (const testCase of testCases) {
            await testCasesPage
                .clickAddNewTestCase();
            await testCasesPage
                .inputTitle(testCase.title);
            await testCasesPage
                .inputDescription(testCase.description);
            await testCasesPage
                .inputExpectedResult(testCase.expectedResult);
            await testCasesPage
                .inputTestSteps(testCase.testSteps);
            await testCasesPage
                .toggleAutomatedTest();
            await testCasesPage
                .clickSubmit();
            await WebDriverUtils.waitUntilUrlContains('/testcases')
        }

        // expect(await WebDriverUtils.doesUrlContain('/testcases')).toBe(true);
    })



})