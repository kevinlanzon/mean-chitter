describe('Homepage', function() {

  beforeEach(function() {
    browser.get('/');
    addName = element(by.id('name'));
    addMessage = element(by.id('message'));
    submitMessage = element(by.id('submit-chirp'));
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Chitter');
  });

  it('can add a user name and post a chirp', function() {
    addName.sendKeys('kev');
    addMessage.sendKeys('This is my first post!');
    submitMessage.click();
    expect(element(by.id('posted-by')).getText()).toEqual('Posted by @kev');
    expect(element(by.id('post')).getText()).toEqual('This is my first post!');
  });
});
