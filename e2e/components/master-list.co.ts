import { by, element, ElementFinder } from "protractor";

export class MasterListComponent {
  appRoot = 'page-master-list';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement() {
    return this.rootElement;
  }

}
