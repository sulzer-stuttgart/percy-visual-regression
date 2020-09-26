
const { percySnapshot } = require('@percy/webdriverio')

describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url('http://localhost:8080/LoginPage.html')
        browser.pause(3000)
        await percySnapshot(browser, 'My login page')
        //expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
})