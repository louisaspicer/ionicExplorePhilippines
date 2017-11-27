import { DefaultPage } from './pages/app.po';
import { MasterListPage } from "./pages/master-list.po";
import { browser } from "protractor";
import { RegisterPage } from "./pages/register.po";

describe('App', function() {
  let page: DefaultPage;
  let masterListPage: MasterListPage;

  beforeAll(() => {
    page = new DefaultPage();
    masterListPage = new MasterListPage();
    page.navigateTo('/');
  });

  describe('default screen', () => {

    it('should have a title saying Explore Philippines', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('Explore Philippines');
      });
    });

    it('should show a sign in screen on initial load', () => {
      page.getSignInComponent().getRootElement().isPresent().then(boolean => {
        expect(boolean).toBe(true);
      });
    });

    it('should not show menu icon on sign in page', () => {
      page.getMenuComponent().getMenuButton().isPresent()
        .then(isMenuButtonFound => {
          browser.sleep(2000);
          expect(isMenuButtonFound).toBe(false);
        });
    });

    describe('register', () => {

      it('should have a register button', () => {
        page.getRegisterComponent().getRegisterButton().isPresent()
          .then(isRegisterButtonFound => {
            expect(isRegisterButtonFound).toBe(true);
          });
      });

      it('should navigate to register page when register button is clicked', () => {
        page.getRegisterComponent().getRegisterButton().click();

        page.getRegisterComponent().getRootElement().isPresent()
          .then(isOnRegisterPage => {
            expect(isOnRegisterPage).toBe(true);
          });
      });
    });

    describe('upon sign in', () => {
      beforeEach(() => {
        page.getSignInComponent().navigateToMasterList();
      });

      it('should load the Master List page on sign in click', () => {
        masterListPage.getMasterListComponent().getRootElement().isPresent()
          .then(isMasterListPage => {
            expect(isMasterListPage).toBe(true);
          });
      });

      it('should show menu icon on after sign in', () => {
        page.getMenuComponent().getMenuButton().isPresent()
          .then(isMenuButtonFound => {
            expect(isMenuButtonFound).toBe(true);
          });
      });
    });
  });

});
