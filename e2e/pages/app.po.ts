import { browser } from 'protractor';
import {SignInComponent} from "../components/signin.co";

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
}
