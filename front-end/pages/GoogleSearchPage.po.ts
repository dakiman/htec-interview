import {BasePageObject} from "./BasePageObject";
import {by, element, ElementFinder} from "protractor";

export class GoogleSearchPage extends BasePageObject {

    private queryStringField = element(by.css("[name=q]"));
    private searchButton = element(by.css("[name=btnK]"));
    private imFeelingLuckyButton = element(by.css("[name=btnI]"));

    public async inputQueryString(query: string): Promise<void> {
        await this.clearInputFieldAndType(this.queryStringField, query);
    }

    public async clickSearchButton(): Promise<void> {
        await this.waitForElementToBeClickableAndClick(this.searchButton);
    }

    public async getSearchBoxText(): Promise<string> {
        return this.queryStringField.getAttribute('value');
    }

    public async getImFeelingLuckyButtonText(): Promise<string> {
        return this.imFeelingLuckyButton.getAttribute('value');
    }

    private googleOfferedInMessage = element(by.css("#gws-output-pages-elements-homepage_additional_languages__als"))

    public async getGoogleOfferedInMessage(): Promise<string> {
        return this.googleOfferedInMessage.getText();
    }

}