import {BasePageObject} from "./BasePageObject";
import {browser, by, element} from "protractor";

export default class TestCasesPage extends BasePageObject {
    private addNewTestCaseButton = element(by.css('[href="/new-testcase"]'));
    private titleInput = element(by.css('[name="title"]'));
    private descriptionInput = element(by.className('main')).element(by.css('[name="description"]'));
    private expectedResultInput = element(by.css('[name="expected_result"]'));
    //TODO replace
    // private addTestStepButton = element(by.className('main')).element(by.buttonText('Add Test Step'))
    private addTestStepButton = element(by.css(".full-width-btn"))
    private allTestStepInputs = element.all(by.css(`[name*="step"]`));

    private testAutomatedSwitch = element(by.className('react-switch-bg'));
    private submitButton = element(by.className('main')).element(by.buttonText('Submit'));

    private allTestCases = element.all(by.css('.portrait-grid > span'));
    private testCasesEditButtons = element.all(by.css('a[href*="/edit-testcase/"'));

    private deleteTestCaseButton = element(by.css('.btn-danger'));
    private confirmTestCaseDeleteButton = element(by.className('confirmation-dialog--buttons--confirm'));

    public async clickAddNewTestCase() {
        await this.clickWhenClickable(this.addNewTestCaseButton)
    }

    public async inputTitle(text: string) {
        await this.typeInInput(this.titleInput, text);
    }

    public async getTitleInputContent(): Promise<string> {
        await this.waitForVisibility(this.titleInput);
        return this.titleInput.getAttribute("value");
    }

    public async inputDescription(text: string) {
        await this.typeInInput(this.descriptionInput, text);
    }

    public async getDescriptionInputContent(): Promise<string> {
        await this.waitForVisibility(this.descriptionInput);
        return this.descriptionInput.getText();
    }

    public async inputExpectedResult(text: string) {
        await this.typeInInput(this.expectedResultInput, text);
    }

    public async getExpectedResultInputContent(): Promise<string> {
        await this.waitForVisibility(this.expectedResultInput);
        return this.expectedResultInput.getAttribute("value");
    }

    public async toggleAutomatedTest() {
        await this.clickWhenClickable(this.testAutomatedSwitch);
    }

    public async clickAddTestStep() {
        await this.clickWhenClickable(this.addTestStepButton);
    }

    public async clickSubmit() {
        await this.clickWhenClickable(this.submitButton);
    }

    public async getTestCasesCount() {
        await this.waitForVisibility(this.allTestCases.get(0));
        return this.allTestCases.count();
    }

    public async clickEditTestCaseByIndex(index: number) {
        await this.clickWhenClickable(this.testCasesEditButtons.get(index));
    }

    public async clickDeleteTestCase() {
        await this.clickWhenClickable(this.deleteTestCaseButton);
    }

    public async clickConfirmTestCaseDelete() {
        await this.clickWhenClickable(this.confirmTestCaseDeleteButton);
    }

    public async getTestStepLength(index: number) {
        return this.allTestStepInputs.get(index).getText()
    }

    public async addTestStep(step: string, index: number) {
        /* only adds a new input if the index is bigger than the number of inputs*/
        if (await this.allTestStepInputs.count() < index + 1) {
            await this.clickAddTestStep();
        }
        let testStepInput = this.allTestStepInputs.get(index);
        await this.typeInInput(testStepInput, step);
    }

    public async inputTestSteps(steps: Array<string>) {
        for (const step of steps) {
            let index = steps.indexOf(step);
            await this.addTestStep(step, index);
        }
    }

}