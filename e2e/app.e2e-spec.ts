import { NgFoundationPatternLibPage } from './app.po';

describe('ng-foundation-pattern-lib App', () => {
  let page: NgFoundationPatternLibPage;

  beforeEach(() => {
    page = new NgFoundationPatternLibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
