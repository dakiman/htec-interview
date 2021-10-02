import {browser, ExpectedConditions} from "protractor";

export default class BrowserUtils {

    //TODO implement logger
    //TODO replace timeout with config
    static async waitUntilUrlContains(urlPart: string, timeout: number = 15000): Promise<boolean> {
        // Logger.debug('Waiting for URL route to change to ' + toUrl);
        return browser.wait(ExpectedConditions.urlContains(urlPart), timeout, `URL didnt contain ${urlPart}`);
    }

    static async doesUrlContain(urlPart: string, timeout: number = 5000): Promise<boolean> {
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