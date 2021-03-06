import { by, element, ElementFinder } from "protractor";

export class MasterListComponent {
  appRoot = 'page-master-list';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement(): ElementFinder {
    return this.rootElement;
  }

  selectFirstCard() {
    element.all(by.css('ion-card')).first().click();
  }

  // getAllDestinationCards() {}
}
