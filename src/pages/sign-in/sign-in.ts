import {Component, OnInit, ViewChild} from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { MasterListPage } from "../master-list/master-list";
import { CityInfoServiceProvider } from "../../providers/city-info-service/city-info-service";
import { RegisterPage } from "../register/register";
import { AuthenticationService } from "../../providers/authentication-service/authentication-service";
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage implements OnInit {
  @ViewChild('email') email: any;
  userLogin: any = {};

  constructor(
    private navController: NavController,
    private menu: MenuController,
    private cityInfoService: CityInfoServiceProvider,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.authenticationService.logout();
  }

  login(): void {
    this.authenticationService.login(this.userLogin.username, this.userLogin.password)
      .subscribe(data => {
          this.navController.setRoot(MasterListPage);
          this.cityInfoService.load();
        },
        error => {
          console.log(error); //TODO: build alert service to show error on UI
        });
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
