import {by, element} from "protractor";
import {BasePageObject} from "./BasePageObject";

export default class SidebarComponent extends BasePageObject {
    // [href='/testcases' yields multiple results (bug)
    private testCasesNavButton = element(by.className('menu')).element(by.css('[href="/testcases"]'));

    public async clickTestCasesNavButton() {
        await this.clickWhenClickable(this.testCasesNavButton);
    }
}