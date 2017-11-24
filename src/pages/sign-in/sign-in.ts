import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { MasterListPage } from "../master-list/master-list";
import {CityInfoServiceProvider} from "../../providers/city-info-service/city-info-service";

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {
  @ViewChild('email') email: any;

  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private cityInfoService: CityInfoServiceProvider
) {}

  //TODO call a fake login service to save username
  login(): void {
    this.navCtrl.setRoot(MasterListPage);
    this.cityInfoService.load();
  }

  ionViewDidLoad(): void {
    setTimeout(() => {
      this.email.setFocus();
    }, 500);
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

}
