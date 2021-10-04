import axios, {AxiosResponse} from "axios";
import SingleTestCase from "../models/SingleTestCase";
import DataUtils from "../../common-module/utils/DataUtils";
import TestCase from "../../common-module/models/types/TestCase";
import TestCasesClient from "../http/TestCasesClient";


describe('My backend test suite', () => {

    let testCaseId: number;
    let testCases: Array<TestCase>;
    let testCasesClient = new TestCasesClient();

    beforeAll(async () => {
        testCases = JSON.parse(await DataUtils.readFileAsJson('common-module/resources/testCases.json'));
        await testCasesClient.init();
    })

    it('Deletes existing test cases', async () => {
        let getTestCasesResponse = await testCasesClient.getAllTestCases();
        let allTestCases: Array<SingleTestCase> = getTestCasesResponse.data;

        for (const testCase of allTestCases) {
            await testCasesClient.deleteTestCase(testCase.id);
        }
    })

    it('Adds test cases from a file', async () => {
        for (const testCase of testCases) {
            await testCasesClient.createTestCase(testCase);
        }
    })

    it('Edits test cases', async () => {
        let getTestCasesResponse = await testCasesClient.getAllTestCases();
        let allTestCases: Array<SingleTestCase> = getTestCasesResponse.data;

        for (const testCase of allTestCases) {
            await testCasesClient.updateTestCase(getEditedTestCase(testCase))
        }
    })

    function getEditedTestCase(testCase: TestCase): TestCase {
        testCase.title = getEditMessage(testCase.title);
        testCase.description = getEditMessage(testCase.description);
        testCase.expected_result = getEditMessage(testCase.expected_result);
        testCase.test_steps = testCase.test_steps.map(testStep => { return { value: getEditMessage(testStep.value) }})
        testCase.testcaseId = testCase.id;

        return testCase;
    }

    function getEditMessage(item: string) {
        return `This field previously had ${item.length} characters`;
    }

})

