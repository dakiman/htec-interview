import {BasePageObject} from "./BasePageObject";
import {by, element} from "protractor";

export default class LoginPage extends BasePageObject {
    private emailInput = element(by.css('[name="email"]'))
    private passwordInput = element(by.css('[name="password"]'))
    private loginButton = element(by.className('landing')).element(by.buttonText('Login'))

    public async inputEmail(text: string) {
        await this.typeInInput(this.emailInput, text);
    }

    public async inputPassword(text: string) {
        await this.typeInInput(this.passwordInput, text);
    }

    public async clickLogin() {
        await this.clickButtonWhenClickable(this.loginButton);
    }
}