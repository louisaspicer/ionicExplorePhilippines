import { DefaultPage } from './pages/app.po';

describe('App', function() {
  let page: DefaultPage;

  beforeAll(() => {
    page = new DefaultPage();
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
      })
    });
  })
});
