import { GoliaFePage } from './app.po';

describe('golia-fe App', function() {
  let page: GoliaFePage;

  beforeEach(() => {
    page = new GoliaFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
