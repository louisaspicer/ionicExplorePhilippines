import { Page } from './app.po';

describe('App', function() {
  let page: Page;

  beforeEach(() => {
    page = new Page();
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
  })
});
