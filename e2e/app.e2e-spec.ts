import { DefaultPage } from './pages/app.po';
import { MasterListPage } from "./pages/master-list.po";
import { browser } from "protractor";

describe('App', function() {
  let page: DefaultPage;
  let masterListPage: MasterListPage;

  beforeAll(() => {
    page = new DefaultPage();
    masterListPage = new MasterListPage();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

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
          browser.sleep(5000);
          expect(isMenuButtonFound).toBe(false);
        });
    });

    describe('upon sign in', () => {
      beforeEach(() => {
        page.getSignInComponent().enterUsername("louisa");
        page.getSignInComponent().enterPassword("password");
        page.getSignInComponent().clickSignIn();
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
