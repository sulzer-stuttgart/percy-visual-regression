const { percySnapshot } = require('@percy/webdriverio')

describe('webdriver.io page', () => {
    it('should see google maps page', async () => {
        await browser.url('http://localhost:8080/Map.html')
        await browser.pause(3000);
        await percySnapshot(browser, 'Google maps page', { widths: [480, 768, 992, 1200] })

        // with percyCSS we can exclude elements from snapshot
        //await percySnapshot(browser, 'Google maps page', { widths: [480, 768, 992, 1200], percyCSS: `#map { display: none; }` }) 
    })
})