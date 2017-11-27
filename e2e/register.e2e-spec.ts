import { DefaultPage } from "./pages/app.po";
import { RegisterComponent } from "./components/register.co";
import { SignInComponent } from "./components/signin.co";
import { browser } from "protractor";

describe('Register', function() {
  let page: DefaultPage;
  let registerPage: RegisterComponent;
  let signInPage: SignInComponent;

  beforeAll(() => {
    page = new DefaultPage();
    registerPage = new RegisterComponent();
    signInPage = new SignInComponent();

    page.navigateTo('/');
    page.getRegisterButton().click();
  });

  it('should allow user to register if username is not already taken', done => {
    browser.sleep(500);
    registerPage.enterFirstName('louisa');
    registerPage.enterLastName('spicer');
    registerPage.enterUsername('louisaspicer');
    registerPage.enterPassword('password').then(() => {
      registerPage.clickRegisterButton()
    });

    signInPage.getRootElement().isPresent()
      .then(isOnSignInPage => {
        expect(isOnSignInPage).toBe(true);
        done();
      });
  });

});
