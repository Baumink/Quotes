import { BauminkQuotesPage } from './app.po';

describe('baumink-quotes App', function() {
  let page: BauminkQuotesPage;

  beforeEach(() => {
    page = new BauminkQuotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
