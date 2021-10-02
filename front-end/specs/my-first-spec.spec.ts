import BrowserUtils from "../utils/WebDriverUtils";
import LoginActions from "../actions/LoginActions";
import {browser} from "protractor";


describe('My front-end test suite', () => {

    let loginActions = new LoginActions();

    beforeAll(async () => {
        console.log(browser.baseUrl);
        await loginActions.defaultLogin();
    })

    it('Is logged in', async () => {
        let isUrlDashboard = await BrowserUtils.doesUrlContain('/dashboard')
        expect(isUrlDashboard).toBe(true);
    })

})