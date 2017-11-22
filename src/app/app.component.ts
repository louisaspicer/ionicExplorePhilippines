import {Component, OnInit, ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuComponent } from "./menu/menu.component";

@Component({
  template: '<ion-nav #baseNav></ion-nav>'
})
export class MyApp implements OnInit {
  @ViewChild('baseNav') nav: Nav;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  ngOnInit(): void {
    this.nav.push(MenuComponent, { animate: false });
  }

  initializeApp(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
