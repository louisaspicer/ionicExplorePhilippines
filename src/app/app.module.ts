import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { BaseRequestOptions, HttpModule } from "@angular/http";
import { MockBackend } from "@angular/http/testing";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { SignInPage } from '../pages/sign-in/sign-in';
import { MasterListPage } from "../pages/master-list/master-list";
import { DetailPage } from "../pages/detail/detail";
import { RegisterPage } from "../pages/register/register";
import { MenuComponent } from "./menu/menu.component";
import { CityInfoServiceProvider } from '../providers/city-info-service/city-info-service';
import { fakeBackendProvider } from "../helpers/fake-backend";
import { UserService } from "../providers/user-service/user-service";
import { AuthenticationService } from "../providers/authentication-service/authentication-service";

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
    CityInfoServiceProvider,
    AuthenticationService,
    UserService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ]
})
export class AppModule {}
