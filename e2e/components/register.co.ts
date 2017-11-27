import { by, element, ElementFinder } from "protractor";

export class RegisterComponent {
  appRoot = 'page-register';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement(): ElementFinder {
    return this.rootElement;
  }

  getRegisterButton(): ElementFinder {
    return element(by.className('register-btn'));
  }

}
