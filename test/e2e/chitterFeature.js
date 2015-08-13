describe('Chitter', function() {

  beforeEach(function() {
    browser.get('/');
    username = element(by.id('username'));
    password = element(by.id('password'));
    addMessage = element(by.id('message'));
    loginButton = element(by.id('login-button'));
    submitMessage = element(by.buttonText('Cheep!'));
    cheeps = element.all(by.repeater('post in posts'));
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Chitter');
  });

  it('should let a user login', function() {
    element(by.css('.login-link')).click();
    username.sendKeys('kevin');
    password.sendKeys('lanzon');
    loginButton.click();
    expect(element(by.binding('current_user')).getText()).toBe('Logged in as @kevin');
  });

  it('should let a user post a cheep', function() {
    element(by.css('.login-link')).click();
    username.sendKeys('kevin');
    password.sendKeys('lanzon');
    loginButton.click();
    addMessage.sendKeys('Hello!');
    submitMessage.click();
    expect(element(by.id('posted-by')).getText()).toEqual('Posted by @kevin');
    expect(element(by.id('post')).getText()).toEqual('Hello!');
  });
});
