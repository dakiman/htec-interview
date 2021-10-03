import LoginActions from "../actions/LoginActions";
import SidebarComponent from "../pages/SidebarComponent";
import TestCasesPage from "../pages/TestCasesPage";
import WebDriverUtils from "../utils/WebDriverUtils";
import DataUtils from "../utils/DataUtils";
import TestCase from "../types/TestCase";
import TestCaseActions from "../actions/TestCaseActions";

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

    it('Add test cases from a file', async () => {
        await testCaseActions.addTestCases(testCases);
    })

})