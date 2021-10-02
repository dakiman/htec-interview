import LoginActions from "../actions/LoginActions";
import SidebarComponent from "../pages/SidebarComponent";
import TestCasesPage from "../pages/TestCasesPage";
import WebDriverUtils from "../utils/WebDriverUtils";

describe('Add test cases to application', () => {

    let loginActions = new LoginActions();
    let sidebarComponent = new SidebarComponent();
    let testCasesPage = new TestCasesPage();

    beforeAll(async () => {
        await loginActions.defaultLogin();
        await sidebarComponent.clickTestCasesNavButton();
    })

    it('Adds a test case', async () => {
        await testCasesPage
            .clickAddNewTestCase();
        await testCasesPage
            .inputTitle('My Title');
        await testCasesPage
            .inputDescription('My description');
        await testCasesPage
            .inputExpectedResult('My expected result');
        await testCasesPage
            .inputTestStep('My test step');
        await testCasesPage
            .toggleAutomatedTest();
        await testCasesPage
            .clickSubmit();

        expect(await WebDriverUtils.doesUrlContain('/testcases')).toBe(true);
    })

})