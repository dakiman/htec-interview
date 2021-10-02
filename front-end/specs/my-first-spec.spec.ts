import {browser, by, element} from "protractor"
import LoginPage from "../pages/LoginPage";
import BrowserUtils from "../utils/WebDriverUtils";


describe('My front-end test suite', () => {

    let loginPage: LoginPage = new LoginPage();

    beforeAll(async () => {
        await browser.driver.navigate().to('https://qa-sandbox.ni.htec.rs/testcases')
        await loginPage.inputEmail('dvancov@hotmail.com');
        await loginPage.inputPassword('Dakidaki123');
        await loginPage.clickLogin();
        await BrowserUtils.waitUntilUrlContains('/dashboard')
    })

    it('Is logged in', async () => {
        let isUrlDashboard = await BrowserUtils.doesUrlContain('/dashboard')
        expect(isUrlDashboard).toBe(true);
    })

})