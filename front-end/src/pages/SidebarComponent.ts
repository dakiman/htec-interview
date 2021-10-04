import {by, element} from "protractor";
import {BasePageObject} from "./BasePageObject";

export default class SidebarComponent extends BasePageObject {
    private testCasesNavButton = element(by.className('menu')).element(by.css('[href="/testcases"]'));

    public async clickTestCasesNavButton(): Promise<void> {
        await this.clickWhenClickable(this.testCasesNavButton);
    }
}