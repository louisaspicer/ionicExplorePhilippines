import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from "../list/list";

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {
  @ViewChild('email') email: any;
  // private username: string;
  // private password: string;
  // private error: string;

  constructor(public navCtrl: NavController) {}

  login(): void {
    this.navCtrl.push(ListPage);
  }

  ionViewDidLoad(): void {
    setTimeout(() => {
      this.email.setFocus();
    }, 500);
  }

}
