import {browser, by, element} from "protractor"
import {GoogleSearchPage} from "../pages/GoogleSearchPage.po";


describe('My front-end test suite', () => {

    let googlePage: GoogleSearchPage = new GoogleSearchPage();

    beforeEach(async () => {
        await browser.get('http://google.com');
    })

    it('Goes to google', async () => {
        let currentUrl = await browser.getCurrentUrl();

        expect(currentUrl).toContain('google');
    })

    it('Searches Google', async () => {
        let queryString = 'my_query'
        await googlePage.inputQueryString(queryString);
        await googlePage.clickSearchButton();

        let currentUrl = await browser.getCurrentUrl();
        expect(currentUrl).toContain(queryString);
    })

    it('Confirms checkbox', async () => {
        let queryString = 'my_query'
        await googlePage.inputQueryString(queryString);

        let currentText = await googlePage.getSearchBoxText();

        expect(currentText).toBe(queryString);
    })

    it('Im feeling lucky', async () => {
        let imFeelingLuckyText = await googlePage.getImFeelingLuckyButtonText();

        expect(imFeelingLuckyText).toBe('Ме следи среќа');
    })

    it('Fail and success', async () => {
        expect(1).toBe(2);
        expect(1).toBe(1);
        expect('Daki').toBe("Laki")
    })

})