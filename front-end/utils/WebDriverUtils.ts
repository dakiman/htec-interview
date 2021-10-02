import {browser, ExpectedConditions} from "protractor";
import Configuration from "../../app-config";

export default class BrowserUtils {

    private static defaultTimeout = Configuration.URL_TIMEOUT;

    static async waitUntilUrlContains(urlPart: string, timeout: number = this.defaultTimeout): Promise<boolean> {
        // Logger.debug('Waiting for URL route to change to ' + toUrl);
        return browser.wait(ExpectedConditions.urlContains(urlPart), timeout, `URL didnt contain ${urlPart}`);
    }

    static async doesUrlContain(urlPart: string, timeout: number = this.defaultTimeout): Promise<boolean> {
        return new Promise(resolve => {
            browser.driver
                .wait(async () => {
                    const url = await browser.driver.getCurrentUrl();
                    return new RegExp(urlPart).test(url);
                }, timeout)
                .then(() => resolve(true))
                .catch(() => resolve(false));
        });
    }
}