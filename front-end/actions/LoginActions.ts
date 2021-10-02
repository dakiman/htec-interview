import {browser} from "protractor";
import BrowserUtils from "../utils/WebDriverUtils";
import LoginPage from "../pages/LoginPage";

export default class LoginActions {
    private loginPage: LoginPage = new LoginPage();

    public async loginForUser(email: string, password: string) {
        await browser.get('/login')
        await this.loginPage.inputEmail(email);
        await this.loginPage.inputPassword(password);
        await this.loginPage.clickLogin();
        await BrowserUtils.waitUntilUrlContains('/dashboard')
    }

    public async defaultLogin() {
        await this.loginForUser('dvancov@hotmail.com', 'Dakidaki123')
    }
}