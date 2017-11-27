import { browser, by, element, ElementFinder } from 'protractor';

import { SignInComponent } from "../components/signin.co";
import { MenuComponent } from "../components/menu.co";

export class DefaultPage {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getSignInComponent() {
    return new SignInComponent();
  }

  getMenuComponent() {
    return new MenuComponent();
  }

  getRegisterButton(): ElementFinder {
    return element(by.className('register-btn'));
  }
}
