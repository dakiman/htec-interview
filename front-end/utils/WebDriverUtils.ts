import {browser, ExpectedConditions} from "protractor";
import Configuration from "../../app-config";

export default class BrowserUtils {

    private static defaultTimeout = Configuration.URL_TIMEOUT;

    public static async waitUntilUrlContains(urlPart: string, timeout: number = this.defaultTimeout): Promise<boolean> {
        return browser.wait(ExpectedConditions.urlContains(urlPart), timeout,
            `URL didnt contain ${urlPart} after ${timeout / 1000} seconds`
        );
    }

    public static async doesUrlContain(urlPart: string, timeout: number = this.defaultTimeout): Promise<boolean> {
        return new Promise(resolve => {
            browser.driver
                .wait(async () => {
                    const currentUrl = await browser.driver.getCurrentUrl();
                    return new RegExp(urlPart).test(currentUrl);
                }, timeout)
                .then(() => resolve(true))
                .catch(() => resolve(false));
        });
    }
}