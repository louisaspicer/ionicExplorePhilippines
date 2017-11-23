import { MasterListPage } from "./pages/master-list.po";
import { DefaultPage } from "./pages/app.po";

describe('Master List', function() {
  let page: DefaultPage;
  let masterListPage: MasterListPage;

  beforeAll(() => {
    page = new DefaultPage();
    masterListPage = new MasterListPage();

    page.navigateTo('/');
    page.getSignInComponent().navigateToMasterList();
  });

  // it('should show a card list of destinations', () => {
  //   let destinationCards = masterListPage.getMasterListComponent().getAllDestinationCards();
  //
  //   //TODO: Needs a mock backend to connect to, or maybe could use json-server
  //   //https://paucls.wordpress.com/2017/01/03/developing-with-a-stub-backend-on-angular-2/
  //   //https://www.npmjs.com/package/json-server
  // });

});
