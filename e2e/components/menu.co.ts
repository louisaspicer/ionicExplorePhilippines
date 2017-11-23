import { by, element, ElementFinder } from "protractor";

export class MenuComponent {

  getMenuButton(): ElementFinder {
    return element(by.className('menuToggle'));
  }

}
