describe('Homepage', function() {

  beforeEach(function() {
    browser.get('/app/main.html');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Chitter');
  });
});
