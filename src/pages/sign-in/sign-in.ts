import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { MasterListPage } from "../master-list/master-list";
import { CityInfoServiceProvider } from "../../providers/city-info-service/city-info-service";
import { RegisterPage } from "../register/register";

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {
  @ViewChild('email') email: any;

  constructor(
    private navController: NavController,
    private menu: MenuController,
    private cityInfoService: CityInfoServiceProvider
  ) {}

  //TODO call a fake login service to save username
  login(): void {
    this.navController.setRoot(MasterListPage);
    this.cityInfoService.load();
  }

  createNewAccount(): void {
    this.navController.push(RegisterPage);
  }

  ionViewDidLoad(): void {
    setTimeout(() => {
      this.email.setFocus();
    }, 500);
  }

  ionViewDidEnter(): void {
    this.menu.swipeEnable(false);
  }

}
