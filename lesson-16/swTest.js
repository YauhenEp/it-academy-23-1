const { Builder, By, until } = require('selenium-webdriver');

// (async function () {
//         let driver = await new Builder().forBrowser('chrome').build();
//         await driver.get('https://www.onliner.by/');
//         const menuItems = await driver.findElements(By.css('.b-main-navigation__text'));
//         await menuItems[0].click();
//         const superPrice = await driver.findElement(By.css('.catalog-navigation__bubble'));
//
//         await driver.switchTo().frame(await driver.findElement('.modal-iframe'));
//         await driver.sleep(3000);
//
//         console.log(await superPrice.getText());
//
//         await driver.quit();
//     }
// )();

// (async function () {
//         let driver = await new Builder().forBrowser('chrome').build();
//         await driver.get('https://www.onliner.by/');
//         const searchField = await driver.findElement(By.css('.fast-search__input'));
//         await searchField.sendKeys('робот пылесос');
//         await driver.sleep(5000);
//         //     console.log(await driver.wait(until.ableToSwitchToFrame(0)))
//         // let iframe = await driver.findElement(By.css('.modal-content iframe'));
//         // console.log('iframe --- ', iframe)
//         // await driver.wait(until.elementsLocated(iframe));
//         await driver.switchTo().frame(0);
//         console.log('START')
//         let title = await driver.findElements(By.css('.product__title > a'));
//         console.log(title[0])
//         console.log('START')
//         await driver.wait(until.elementIsEnabled(title[0]));
//         await title[0].click();
//         await driver.sleep(3000);
//         await driver.quit();
//     }
// )()