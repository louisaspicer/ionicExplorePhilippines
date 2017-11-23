import { by, element, ElementFinder } from "protractor";

export class SignInComponent {
  appRoot = 'page-sign-in';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement(): ElementFinder {
    return this.rootElement;
  }

  navigateToMasterList(): void {
    this.enterUsername('username');
    this.enterPassword('password');
    this.clickSignIn();
  }

  private enterUsername(username: string): void {
    let loginField = element(by.id('loginField'));
    loginField.click();
    loginField.element(by.css('input')).sendKeys(username);
  }

  private enterPassword(password: string): void {
    let passwordField = element(by.id('passwordField'));
    passwordField.click();
    passwordField.element(by.css('input')).sendKeys(password);  }

  private clickSignIn(): void {
    element(by.className('submit-btn')).click();
  }

}
