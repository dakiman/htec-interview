import {browser, by, ElementFinder, ExpectedConditions} from "protractor";

export abstract class BasePageObject {

    //millis
    //TODO Replace with configuration
    private defaultTimeout: number = 10000;

    protected async typeInInput(selector: ElementFinder, text: string, timeout = this.defaultTimeout): Promise<void> {
        await this.clickButtonWhenClickable(selector, timeout);
        await selector.sendKeys(text);
    }

    protected async clickButtonWhenClickable(element: ElementFinder, timeout = this.defaultTimeout): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(element), timeout,
            `Element ${element.locator().value} did not become CLICKABLE within ${timeout / 1000} seconds`
        );
        await element.click();
    }

    protected async isElementVisible(selector: ElementFinder, timeout = this.defaultTimeout): Promise<boolean> {
        return new Promise(resolve => {
            browser.wait(ExpectedConditions.visibilityOf(selector), timeout)
                .then(() => resolve(true))
                .catch(() => resolve(false));
        });
    }

    protected async waitForVisibility(selector: ElementFinder, timeout = this.defaultTimeout): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(selector), timeout,
            `Element ${selector.locator().value} was not VISIBLE within ${timeout / 1000} seconds...`
        );
    }

}