const {remote} = require('webdriverio');

describe("Home Page Test", () => {

    let browser = null;

    beforeAll("Intialise browser", async () => {
        browser = await remote({
            logLevel: 'trace',
            capabilities: {
                browserName: 'chrome'
            }
        });

    });
    


    it("Open Home Page", async () => {

        await browser.url("http://whiteboxqa.com/");
        await browser.pause(2000);
    });



});

















// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(SecurePage.flashAlert).toBeExisting();
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });


