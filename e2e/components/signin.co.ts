import {by, element, ElementFinder} from "protractor";

export class SignInComponent {
  appRoot = 'page-sign-in';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement() {
    return this.rootElement;
  }

  clickLogin() {
    element(by.className('submit-btn')).click();
  }

}
