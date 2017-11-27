import { DefaultPage } from "./pages/app.po";
import { RegisterComponent } from "./components/register.co";
import { SignInComponent } from "./components/signin.co";
import { browser } from "protractor";

fdescribe('Register', function() {
  let page: DefaultPage;
  let registerPage: RegisterComponent;
  let signInPage: SignInComponent;

  beforeEach(() => {
    page = new DefaultPage();
    registerPage = new RegisterComponent();
    signInPage = new SignInComponent();

    page.navigateTo('/');
  });

  beforeEach(() => {
    page.getRegisterButton().click();
    browser.sleep(1000);
    registerPage.enterFirstName('louisa');
    registerPage.enterLastName('spicer');
    registerPage.enterUsername('louisaspicer');
    registerPage.enterPassword('password').then(() => {
      registerPage.clickRegisterButton();
    });
  });

  it('should allow user to register if username is not already taken', done => {
    signInPage.getRootElement().isPresent()
      .then(isOnSignInPage => {
        expect(isOnSignInPage).toBe(true);
        done();
      });
  });

  it('should not allow user to register is username is already taken', done => {
    page.getRegisterButton().click();
    browser.sleep(1000);

    registerPage.enterFirstName('louisa');
    registerPage.enterLastName('spicer');
    registerPage.enterUsername('louisaspicer');
    registerPage.enterPassword('password').then(() => {
      registerPage.clickRegisterButton();
    });

    registerPage.getErrorMessage()
      .then(text => {
      expect(text).toContain('Error: Username "louisaspicer" is already taken');
      done();
    });
  });

});
