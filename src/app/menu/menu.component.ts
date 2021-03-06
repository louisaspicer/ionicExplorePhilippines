import { Component, ViewChild } from '@angular/core';
import { Nav} from 'ionic-angular';

import { SignInPage } from "../../pages/sign-in/sign-in";
import { MasterListPage } from "../../pages/master-list/master-list";
import { AuthenticationService } from "../../providers/authentication-service/authentication-service";


@Component({
  templateUrl: 'menu.html'
})
export class MenuComponent {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SignInPage;

  pages: Array<{title: string, component: any}>;

  constructor(private authenticationService: AuthenticationService) {
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

    this.checkIfSigningOut(page);
    this.nav.setRoot(page.component);
  }

  private checkIfSigningOut(page: {title: string, component: Component}): void {
    if (page.component === SignInPage) {
      this.authenticationService.logout();
    }
  }
}
