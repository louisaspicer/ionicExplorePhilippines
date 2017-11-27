import { browser } from 'protractor';

import { SignInComponent } from "../components/signin.co";
import { MenuComponent } from "../components/menu.co";
import { RegisterComponent } from "../components/register.co";

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

  getRegisterComponent() {
    return new RegisterComponent();
  }

}
