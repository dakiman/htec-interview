import TestCase from "../../../common-module/models/types/TestCase";
import WebDriverUtils from "../utils/WebDriverUtils";
import TestCasesPage from "../pages/TestCasesPage";

export default class TestCaseActions {
    private testCasesPage = new TestCasesPage();

    public async addTestCases(testCases: Array<TestCase>) {
        //TODO review to replace with forEach
        for (const testCase of testCases) {
            await this.addSingleTestCase(testCase);
        }
    }

    public async inputTestCaseForm(testCase: TestCase) {
        await this.testCasesPage
            .inputTitle(testCase.title);
        await this.testCasesPage
            .inputDescription(testCase.description);
        await this.testCasesPage
            .inputExpectedResult(testCase.expected_result);
        await this.testCasesPage
            .inputTestSteps(testCase.test_steps);
        if (testCase.automated) {
            await this.testCasesPage
                .toggleAutomatedTest();
        }
        await this.testCasesPage
            .clickSubmit();
        await WebDriverUtils
            .waitUntilUrlContains('/testcases')
    }

    public async addSingleTestCase(testCase: TestCase) {
        await this.testCasesPage
            .clickAddNewTestCase();
        await this
            .inputTestCaseForm(testCase)
    }

    public async deleteTestCaseByIndex(index: number) {
        await this.testCasesPage
            .clickEditTestCaseByIndex(index);
        await this.testCasesPage
            .clickDeleteTestCase();
        await this.testCasesPage
            .clickConfirmTestCaseDelete();
        await WebDriverUtils
            .waitUntilUrlContains('/testcases')
    }

    // public async editTestCaseByIndex(index: number, testCase: TestCase) {
    //     await this.testCasesPage
    //         .clickEditTestCaseByIndex(index);
    //     await this.testCasesPage
    //         .inputTitle(testCase.title);
    //     await this.testCasesPage
    //         .inputDescription(testCase.description);
    //     await this.testCasesPage
    //         .inputExpectedResult(testCase.expectedResult);
    //     await this.testCasesPage
    //         .inputTestSteps(testCase.testSteps);
    //     if (testCase.automated) {
    //         await this.testCasesPage
    //             .toggleAutomatedTest();
    //     }
    //     await this.testCasesPage
    //         .clickSubmit();
    //     await WebDriverUtils
    //         .waitUntilUrlContains('/testcases')
    // }

}