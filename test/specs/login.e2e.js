
const { percySnapshot } = require('@percy/webdriverio')

describe('Login page', () => {
    it('should see login page', async () => {
        await browser.url('http://localhost:8080/LoginPage.html')
        await browser.pause(1000)
        await percySnapshot(browser, 'My login page')
    });

    it('Failed login without password and email typing', async () => {
        await browser.url('http://localhost:8080/LoginPage.html')
        let button = await browser.$('.button')
        await button.click()
        await browser.pause(1000)
        await percySnapshot(browser, 'Failed login without password and email typing')
    });
    
    it('Failed login', async () => {
        await browser.url('http://localhost:8080/LoginPage.html')
        let email = await browser.$('#email')
        let password = await browser.$('#password')
        let button = await browser.$('.button')
        await email.setValue('mustafa@sulzer.de')
        await password.setValue('ksjdfhkjdfsdf')
        await button.click()
        await browser.pause(1000)
        await percySnapshot(browser, 'Failed login')
    });
    
    it('Successful login', async () => {
        await browser.url('http://localhost:8080/LoginPage.html')
        let email = await browser.$('#email')
        let password = await browser.$('#password')
        let button = await browser.$('.button')
        await email.setValue('mustafa@sulzer.de')
        await password.setValue('Password1!')
        await button.click()
        await browser.pause(1000)
        await percySnapshot(browser, 'Successful login')
    });
    
})