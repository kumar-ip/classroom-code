module.exports = {
    'Login Test' : function (browser) {
      browser
        .url('http://uiprogrammer.com')
        .waitForElementVisible('body')
        .assert.titleContains('UI/UX/AngularJS/NodeJS/MongoDB Training')
        .end();
    }
  };