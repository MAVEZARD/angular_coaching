import { AngularCoachingPage } from './app.po';

describe('angular-coaching App', () => {
  let page: AngularCoachingPage;

  beforeEach(() => {
    page = new AngularCoachingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
