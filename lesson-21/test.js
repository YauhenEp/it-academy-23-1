const puppeteer = require('puppeteer');
const  { expect } = require('chai');

(async function() {
    const browser = await puppeteer.launch({headless: false,
        args:[
            '--start-maximized' // you can also use '--start-fullscreen'
        ]});
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1020});

    await page.goto('https://pptr.dev/');
    // await page.setViewport({ width: 500, height: 300});
    await page.click('.clean-btn.toggleButton_gllP');
    const title = await page.evaluate(() => {
        return document.querySelector(".clean-btn.toggleButton_gllP").getAttribute("title");
    })
    console.log(title);
    await expect(title).to.equal('Switch between dark and light mode (currently dark mode)')
    await browser.close();
})()