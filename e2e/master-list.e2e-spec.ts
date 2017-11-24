import { MasterListPage } from "./pages/master-list.po";
import { DefaultPage } from "./pages/app.po";
import {DetailPage} from "./pages/detail.po";

describe('Master List', function() {
  let page: DefaultPage;
  let masterListPage: MasterListPage;
  let detailPage: DetailPage;

  beforeAll(() => {
    page = new DefaultPage();
    masterListPage = new MasterListPage();
    detailPage = new DetailPage();

    page.navigateTo('/');
    page.getSignInComponent().navigateToMasterList();
  });

    //TODO: Needs a mock backend to connect to, or maybe could use json-server
    //https://paucls.wordpress.com/2017/01/03/developing-with-a-stub-backend-on-angular-2/
    //https://www.npmjs.com/package/json-server
  // it('should show a card list of destinations', () => {
  //   let destinationCards = masterListPage.getMasterListComponent().getAllDestinationCards();
  //
  // });

    //TODO: Needs mock backend to create the cards to select
  // it('should load the detail page when selecting a card', () => {
  //   masterListPage.getMasterListComponent().selectFirstCard();
  //
  //   detailPage.getDetailComponent().getRootElement().isPresent()
  //     .then(isOnDetailPage => {
  //       expect(isOnDetailPage).toBe(true);
  //     });
  // });

});
