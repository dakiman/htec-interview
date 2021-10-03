import LoginActions from "../actions/LoginActions";
import SidebarComponent from "../pages/SidebarComponent";
import TestCasesPage from "../pages/TestCasesPage";
import DataUtils from "../utils/DataUtils";
import TestCase from "../types/TestCase";
import TestCasesActions from "../actions/TestCaseActions";

describe('Add test cases to application', () => {

    let loginActions = new LoginActions();
    let sidebarComponent = new SidebarComponent();
    let testCasesPage = new TestCasesPage();
    let testCasesActions = new TestCasesActions();
    let testCases: Array<TestCase>;

    beforeAll(async () => {
        await loginActions.defaultLogin();
        await sidebarComponent.clickTestCasesNavButton();
        testCases = JSON.parse(await DataUtils.readFileAsJson('front-end/resources/testCases.json'));
    })

    it('Deletes existing test cases', async () => {
        let casesCount = await testCasesPage.getTestCasesCount();

        for (let i = 0; i < casesCount; i++) {
            await testCasesActions
                .deleteTestCaseByIndex(0);
        }
    })

    it('Add test cases from a file', async () => {
        await testCasesActions.addTestCases(testCases);
    })

    it('Edits test cases', async () => {

    })




})