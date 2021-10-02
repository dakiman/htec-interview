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
    //TODO replace
    // private addTestStepButton = element(by.className('main')).element(by.buttonText('Add Test Step'))
    private addTestStepButton = element(by.css("#root > div > div.grid-menu-container > div.main-grid > div > div.width-container.default-container.default-padding > div:nth-child(4) > div.form-element.undefined > div:nth-child(2) > div"))

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

    public async clickAddTestStep() {
        await this.clickWhenClickable(this.addTestStepButton);
    }

    public async inputTestSteps(steps: Array<string>) {
        // TODO review, 1 more input than required is added
        for (const step of steps) {
            let index = steps.indexOf(step);
            await this.clickAddTestStep();
            // input field and X button have same id (bug)
            let testStepInput = element(by.css(`[name="step-${index}"]`));
            await this.typeInInput(testStepInput, step);
        }
    }

}