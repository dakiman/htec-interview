import {BasePageObject} from "./BasePageObject";
import {by, element} from "protractor";

export default class TestCasesPage extends BasePageObject{
    private addNewTestCaseButton = element(by.css('[href="/new-testcase"]'));
    private titleInput = element(by.css(''));
    private descriptionInput = element(by.css(''));
    private expectedResultInput = element(by.css(''));
    //test step inputs todo
    private testAutomatedSwitch = element(by.css(''));
    private submitButton = element(by.css(''));

    public async clickAddNewTestCase() {
        await this.clickButtonWhenClickable(this.addNewTestCaseButton)
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
        await this.clickButtonWhenClickable(this.testAutomatedSwitch);
    }

    public async clickSubmit() {
        await this.clickButtonWhenClickable(this.submitButton);
    }
}