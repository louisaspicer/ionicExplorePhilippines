import { Component } from "@angular/core";
import { MenuController, NavController } from "ionic-angular";
import { SignInPage } from "../sign-in/sign-in";
import { UserService } from "../../providers/user-service/user-service";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  registerUser: any = {};
  error$: Observable<any>;
  errorMessage: string;
  private errorSubject = new Subject<string>();

  constructor(private menu: MenuController,
              private navController: NavController,
              private userService: UserService,
  ) {
    this.error$ = this.errorSubject.asObservable();
    this.error$.subscribe(message => {
      this.errorMessage = message;
    });
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  register(): void {
    this.userService.create(this.registerUser)
        .subscribe(
          data => {
            console.log("Successful Registration"); //TODO: update this to a UI success message
            this.navController.setRoot(SignInPage);
          },error => {
            this.errorSubject.next(error);
          });
  }
}
