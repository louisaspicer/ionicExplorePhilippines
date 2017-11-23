import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";

import { MyApp } from './app.component';
import { SignInPage } from '../pages/sign-in/sign-in';
import { MasterListPage } from "../pages/master-list/master-list";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuComponent } from "./menu/menu.component";
import { CityInfoServiceProvider } from '../providers/city-info-service/city-info-service';

@NgModule({
  declarations: [
    MyApp,
    SignInPage,
    MasterListPage,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignInPage,
    MasterListPage,
    MenuComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CityInfoServiceProvider
  ]
})
export class AppModule {}
