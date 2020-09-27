const { percySnapshot } = require('@percy/webdriverio')

describe('webdriver.io page', () => {
    it('should see google maps page', async () => {
        await browser.url('http://localhost:8080/Map.html')
        await percySnapshot(browser, 'Google maps page', { widths: [480, 768, 992, 1200] })
    })
})