import {BasePageObject} from "./BasePageObject";
import {by, element} from "protractor";

export default class TestCasesPage extends BasePageObject{
    private addNewTestCaseButton = element(by.css('[href="/new-testcase"]'));
    private titleInput = element(by.css('[name="title"]'));
    // meta tag also has name=description (bug)
    private descriptionInput = element(by.className('main')).element(by.css('[name="description"]'));
    private expectedResultInput = element(by.css('[name="expected_result"]'));
    //test step inputs todo
    private testStepInput = element(by.id("step-0"))
    private testAutomatedSwitch = element(by.className('react-switch-bg'));
    private submitButton = element(by.className('main')).element(by.buttonText('Submit'));

    public async clickAddNewTestCase() {
        await this.clickWhenClickable(this.addNewTestCaseButton)
    }

    public async inputTitle(text: string) {
        await this.typeInInput(this.titleInput, text);
    }

    public async inputDescription(text: string) {
        await this.typeInInput(this.descriptionInput, text);
    }

    public async inputExpectedResult(text: string) {
        await this.typeInInput(this.expectedResultInput, text);
    }

    public async toggleAutomatedTest() {
        await this.clickWhenClickable(this.testAutomatedSwitch);
    }

    public async clickSubmit() {
        await this.clickWhenClickable(this.submitButton);
    }

    public async inputTestStep(text: string) {
        await this.typeInInput(this.testStepInput, text)
    }
}