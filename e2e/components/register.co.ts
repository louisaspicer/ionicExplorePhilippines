import {browser, by, element, ElementFinder} from "protractor";
import {promise} from "selenium-webdriver";
import {protractor} from "protractor/built/ptor";

export class RegisterComponent {
  appRoot = 'page-register';
  rootElement: ElementFinder = element(by.css(this.appRoot));
  ec = protractor.ExpectedConditions;


  getRootElement(): ElementFinder {
    return this.rootElement;
  }

  clickRegisterButton() {
    let submitButton = element(by.className('register-user-button'));
    browser.wait(this.ec.visibilityOf(submitButton), 5000);
    submitButton.click();
  }

  enterUsername(username: string): void {
    let loginField = element(by.id('userNameField'));
    loginField.click();
    loginField.element(by.css('input')).sendKeys(username);
  }

  enterFirstName(firstName: string): void {
    let loginField = element(by.id('firstNameField'));
    loginField.click();
    loginField.element(by.css('input')).sendKeys(firstName);
  }

  enterLastName(lastName: string): void {
    let loginField = element(by.id('lastNameField'));
    loginField.click();
    loginField.element(by.css('input')).sendKeys(lastName);
  }

  enterPassword(password: string): promise.Promise<void> {
    let passwordField = element(by.id('password2Field'));
    passwordField.click();
    return passwordField.element(by.css('input')).sendKeys(password);
  }

}
