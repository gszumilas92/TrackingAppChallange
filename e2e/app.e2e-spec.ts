import { TrackingAppChallangePage } from './app.po';

describe('tracking-app-challange App', () => {
  let page: TrackingAppChallangePage;

  beforeEach(() => {
    page = new TrackingAppChallangePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
