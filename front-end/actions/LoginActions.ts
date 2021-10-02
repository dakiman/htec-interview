import {browser} from "protractor";
import BrowserUtils from "../utils/WebDriverUtils";
import LoginPage from "../pages/LoginPage";
import Configuration from "../../app-config";

export default class LoginActions {
    private loginPage = new LoginPage();
    private defaultEmail = Configuration.USER_EMAIL;
    private defaultPassword = Configuration.USER_PASSWORD;

    public async loginForUser(email: string, password: string) {
        await browser.get('/login')
        await this.loginPage.inputEmail(email);
        await this.loginPage.inputPassword(password);
        await this.loginPage.clickLogin();
        await BrowserUtils.waitUntilUrlContains('/dashboard')
    }

    public async defaultLogin() {
        if(this.defaultEmail == null || this.defaultPassword == null) {
            throw new Error("You must specify default login parameters in .env file");
        }
        await this.loginForUser(this.defaultEmail, this.defaultPassword)
    }
}