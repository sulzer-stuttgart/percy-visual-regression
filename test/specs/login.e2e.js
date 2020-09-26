
const rootFolder = __dirname.replace('test/specs', '');
const { percySnapshot } = require('@percy/webdriverio')

describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url(`file:///${rootFolder}src/DE/LoginPage.html`)
        await percySnapshot(browser, 'My login page')
        //expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
})