import { Component } from "@angular/core";
import {MenuController, NavController} from "ionic-angular";
import { SignInPage } from "../sign-in/sign-in";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  registerUser: any = {};

  constructor(private menu: MenuController, private navController: NavController) {}

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  register(): void {
    this.navController.setRoot(SignInPage);
  }
}
