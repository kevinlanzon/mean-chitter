describe('Homepage', function() {
  it('should have a title', function() {
    browser.get('/app/main.html');

    expect(browser.getTitle()).toEqual('Chitter');
  });
});
