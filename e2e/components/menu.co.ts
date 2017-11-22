import { by, element } from "protractor";

export class MenuComponent {

  getMenuButton() {
    return element(by.className('menuToggle'));
  }

}
