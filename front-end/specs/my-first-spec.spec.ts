import BrowserUtils from "../utils/WebDriverUtils";
import LoginActions from "../actions/LoginActions";
import SidebarComponent from "../pages/SidebarComponent";

describe('My front-end test suite', () => {

    let loginActions = new LoginActions();
    let sidebarComponent = new SidebarComponent();

    beforeAll(async () => {
        await loginActions.defaultLogin();
    })

    it('Is logged in', async () => {
        let isUrlDashboard = await BrowserUtils.doesUrlContain('/dashboard')
        expect(isUrlDashboard).toBe(true);
    })

    it('Navigates to Test Cases tab', async () => {
        await sidebarComponent.clickTestCasesNavButton();
        let isUrlTestCases = await BrowserUtils.doesUrlContain('/testcases')
        expect(isUrlTestCases).toBe(true);
    })

})