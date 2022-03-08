const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://uiprogrammer.com');
      await (await driver.findElement(By.id('loginButton'))).click();
      await driver.wait(until.titleIs('Test'), 100000);
    } finally {
      await driver.quit();
    }
  })();