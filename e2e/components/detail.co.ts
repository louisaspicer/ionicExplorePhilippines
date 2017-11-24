import { by, element, ElementFinder } from "protractor";

export class DetailComponent {
  appRoot = 'page-detail';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement(): ElementFinder {
    return this.rootElement;
  }

}
