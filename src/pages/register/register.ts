import { Component } from "@angular/core";
import { MenuController } from "ionic-angular";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(private menu: MenuController) {}

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
}
