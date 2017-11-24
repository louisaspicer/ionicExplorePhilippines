import { Component, ViewChild } from '@angular/core';
import { Nav} from 'ionic-angular';

import { SignInPage } from "../../pages/sign-in/sign-in";
import { MasterListPage } from "../../pages/master-list/master-list";


@Component({
  templateUrl: 'menu.html'
})
export class MenuComponent {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SignInPage;

  pages: Array<{title: string, component: any}>;

  constructor() {
    this.pages = [
      { title: 'All Destinations', component: MasterListPage },
      { title: 'Favourites', component: null },
      { title: 'Directions', component: null },
      { title: 'Sign Out', component: SignInPage },
    ];
  }

  openPage(page): void {
    if (page.component === null) {
      return;
    }

    this.nav.setRoot(page.component);
  }
 // <!--TODO: make the menu push the page to the side instead of cover-->
}
