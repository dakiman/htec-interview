import LoginActions from "../actions/LoginActions";
import SidebarComponent from "../pages/SidebarComponent";
import TestCasesPage from "../pages/TestCasesPage";
import DataUtils from "../utils/DataUtils";
import TestCase from "../types/TestCase";
import TestCasesActions from "../actions/TestCaseActions";
import {browser} from "protractor";


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

    it('Adds test cases from a file', async () => {
        await testCasesActions.addTestCases(testCases);
    })

    it('Edits test cases', async () => {
        let casesCount = await testCasesPage.getTestCasesCount();
        for (let i = 0; i < casesCount; i++) {
            await testCasesPage
                .clickEditTestCaseByIndex(i);

            let testCase: TestCase = await getEditedTestCase();

            await testCasesActions
                .inputTestCaseForm(testCase)
        }
    })



    async function getEditedTestCase(): Promise<TestCase> {
        let titleLength = await testCasesPage.getTitleLength();
        let descriptionLength = await testCasesPage.getDescriptionLength();
        let expectedResultLength = await testCasesPage.getExpectedResultLength();
        return {
            title: getEditMessage(titleLength),
            description: getEditMessage(descriptionLength),
            expectedResult: getEditMessage(expectedResultLength),
            automated: true,
            testSteps: ['new step1', 'new step2']
        }
    }

    function getEditMessage(length: number) {
        return `This field previously had ${length} characters`;
    }

})