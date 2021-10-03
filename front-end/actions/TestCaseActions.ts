import TestCase from "../types/TestCase";
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

    public async addSingleTestCase(testCase: TestCase) {
        await this.testCasesPage
            .clickAddNewTestCase();
        await this.testCasesPage
            .inputTitle(testCase.title);
        await this.testCasesPage
            .inputDescription(testCase.description);
        await this.testCasesPage
            .inputExpectedResult(testCase.expectedResult);
        await this.testCasesPage
            .inputTestSteps(testCase.testSteps);
        if (testCase.automated) {
            await this.testCasesPage
                .toggleAutomatedTest();
        }
        await this.testCasesPage
            .clickSubmit();
        await WebDriverUtils.waitUntilUrlContains('/testcases')
    }
}