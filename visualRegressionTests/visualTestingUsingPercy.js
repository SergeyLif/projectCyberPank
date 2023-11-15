const percySnapShot = require('@percy/webdriverio');


describe('visual test with percy', () => {

    it('should be able to validate title and compare Home Page', async () =>{
     await browser.url('https://serdsj.github.io/projectCyberPank/')
     await expect(browser).toHaverUrl('https://serdsj.github.io/projectCyberPank/')
     await expect(browser).toHaveUrlContaining('Cyber Punk WebPage')
   
    await percySnapShot('https://serdsj.github.io/projectCyberPank/')
   
    })
})