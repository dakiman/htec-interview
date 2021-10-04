import {browser, ExpectedConditions} from "protractor";
import Configuration from "../../../app-config";

export default class BrowserUtils {

    private static urlTimeout = Configuration.URL_TIMEOUT;

    public static async waitUntilUrlContains(urlPart: string, timeout: number = this.urlTimeout): Promise<boolean> {
        return browser.wait(ExpectedConditions.urlContains(urlPart), timeout,
            `URL didnt contain ${urlPart} after ${timeout / 1000} seconds`
        );
    }

    public static async doesUrlContain(urlPart: string): Promise<boolean> {
        return (await browser.getCurrentUrl()).includes(urlPart);
    }
}