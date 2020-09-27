
const { percySnapshot } = require('@percy/webdriverio')

describe('Login page', () => {
    it('should see login page', async () => {
        await browser.url('http://localhost:8080/LoginPage.html')
        await percySnapshot(browser, 'My login page')
    });

    it('Failed login without password and email typing', async () => {
        await browser.url('http://localhost:8080/LoginPage.html')
        await browser.elementClick('.button');
        await percySnapshot(browser, 'Failed login without password and email typing')
    });
    
    it('Failed login', async () => {
        await browser.url('http://localhost:8080/LoginPage.html')
        await browser.setValue('#email', 'mustafa@sulzer.de');
        await browser.setValue('#password', 'ksjdfhkjdfsdf');
        await browser.elementClick('.button')
        await percySnapshot(browser, 'Failed login')
    });
    
    it('Successful login', async () => {
        await browser.url('http://localhost:8080/LoginPage.html')
        $('#email').setValue('mustafa@sulzer.de')
        $('#password').setValue('Password1!')
        await browser.elementClick('.button');
        await percySnapshot(browser, 'Successful login')
    });
    
})