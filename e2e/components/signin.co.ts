import { by, element, ElementFinder } from "protractor";

export class SignInComponent {
  appRoot = 'page-sign-in';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement() {
    return this.rootElement;
  }

  enterUsername(username: string): void {
    let loginField = element(by.id('loginField'));
    loginField.click();
    loginField.element(by.css('input')).sendKeys(username);
  }

  enterPassword(password: string): void {
    let passwordField = element(by.id('passwordField'));
    passwordField.click();
    passwordField.element(by.css('input')).sendKeys(password);  }

  clickSignIn(): void {
    element(by.className('submit-btn')).click();
  }



}
