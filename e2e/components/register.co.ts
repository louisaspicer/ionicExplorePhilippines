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

  clickRegisterButton(): promise.Promise<void> {
    let submitButton = element(by.className('register-user-button'));
    browser.wait(this.ec.visibilityOf(submitButton), 5000);
    return submitButton.click();
  }

  enterUsername(username: string): void {
    let usernameField = element(by.id('userNameField'));
    let input = usernameField.element(by.css('input'));

    usernameField.click();
    input.clear().then(() => {
      input.sendKeys(username);
    });
  }

  enterFirstName(firstName: string): void {
    let firstNameField = element(by.id('firstNameField'));
    let input = firstNameField.element(by.css('input'));

    firstNameField.click();
    input.clear().then(() => {
      input.sendKeys(firstName);
    });
  }

  enterLastName(lastName: string): void {
    let lastNameField = element(by.id('lastNameField'));
    let input = lastNameField.element(by.css('input'));

    lastNameField.click();
    input.clear().then(() => {
      input.sendKeys(lastName);
    });
  }

  enterPassword(password: string): promise.Promise<void> {
    let passwordField = element(by.id('passwordInputField'));
    passwordField.click();
    return passwordField.element(by.css('input')).sendKeys(password);
  }

  getErrorMessage(): promise.Promise<string> {
    return element(by.className('error-message')).getText();
  }

}
