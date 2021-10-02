import LoginActions from "../actions/LoginActions";
import SidebarComponent from "../pages/SidebarComponent";

describe('Add test cases to application', () => {

    let loginActions = new LoginActions();
    let sidebarComponent = new SidebarComponent();

    beforeAll(async () => {
        await loginActions.defaultLogin();
        await sidebarComponent.clickTestCasesNavButton();
    })

    it('Adds a test case', async () => {

    })

})