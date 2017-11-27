import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { SignInPage } from '../pages/sign-in/sign-in';
import { MasterListPage } from "../pages/master-list/master-list";
import { DetailPage } from "../pages/detail/detail";
import { RegisterPage } from "../pages/register/register";
import { MenuComponent } from "./menu/menu.component";
import { CityInfoServiceProvider } from '../providers/city-info-service/city-info-service';

@NgModule({
  declarations: [
    MyApp,
    SignInPage,
    MasterListPage,
    DetailPage,
    RegisterPage,
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
    DetailPage,
    RegisterPage,
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
