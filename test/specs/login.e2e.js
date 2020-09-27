
const { percySnapshot } = require('@percy/webdriverio')

describe('webdriver.io page', () => {
    it('should see login page', async () => {
        await browser.url('http://localhost:8080/LoginPage.html')
        await percySnapshot(browser, 'My login page')
    })
})