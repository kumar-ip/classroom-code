const { remote } = require('webdriverio');

let browser

;(async () => {
    browser = await remote({
        capabilities: { browserName: 'chrome' }
    })

    await browser.navigateTo('https://uiprogrammer.com')

    const loginButton = await browser.$('#loginButton')
    await loginButton.click()

    console.log(await browser.getTitle()) // outputs "WebdriverIO - Google Search"

    await browser.deleteSession()
})().catch((err) => {
    console.error(err)
    return browser.deleteSession()
})