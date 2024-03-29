import LoginActions from "../actions/LoginActions";
import SidebarComponent from "../pages/SidebarComponent";
import TestCasesPage from "../pages/TestCasesPage";
import DataUtils from "../../../common-module/utils/DataUtils";
import TestCase from "../../../common-module/models/TestCase";
import TestCasesActions from "../actions/TestCaseActions";

describe('Test cases manipulation on the front-end', () => {

    let loginActions = new LoginActions();
    let sidebarComponent = new SidebarComponent();
    let testCasesPage = new TestCasesPage();
    let testCasesActions = new TestCasesActions();
    let testCases: Array<TestCase>;

    beforeAll(async () => {
        await loginActions.defaultLogin();
        await sidebarComponent.clickTestCasesNavButton();
        testCases = JSON.parse(await DataUtils.readFileAsJson('common-module/resources/testCases.json'));
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000; // test might time out due to long input time
    })

    // /*Caveat: Some test must exist or this case will fail*/
    // it('Deletes existing test cases', async () => {
    //     let casesCount = await testCasesPage.getTestCasesCount();
    //
    //     for (let i = 0; i < casesCount; i++) {
    //         /* Always delete the first test case */
    //         await testCasesActions
    //             .deleteTestCaseByIndex(0);
    //     }
    // })

    it('Adds test cases from a file', async () => {
        await testCasesActions.addTestCases(testCases);
    })

    // it('Edits test cases', async () => {
    //     let casesCount = await testCasesPage.getTestCasesCount();
    //     for (let i = 0; i < casesCount; i++) {
    //         await testCasesPage
    //             .clickEditTestCaseByIndex(i);
    //
    //         let testCase: TestCase = await getEditedTestCase();
    //
    //         await testCasesActions
    //             .inputTestCaseForm(testCase)
    //     }
    // })

    async function getEditedTestCase(): Promise<TestCase> {
        let titleLength = (await testCasesPage.getTitleInputContent()).length;
        let descriptionLength = (await testCasesPage.getDescriptionInputContent()).length;
        let expectedResultLength = (await testCasesPage.getExpectedResultInputContent()).length;
        let testSteps = (await testCasesPage.getAllTestStepsContent())
            .map(testStep => {
                return {value: getEditMessage(testStep.length)}
            });

        return {
            title: getEditMessage(titleLength),
            description: getEditMessage(descriptionLength),
            expected_result: getEditMessage(expectedResultLength),
            test_steps: testSteps
        }
    }

    function getEditMessage(length: number) {
        return `This field previously had ${length} characters`;
    }

})