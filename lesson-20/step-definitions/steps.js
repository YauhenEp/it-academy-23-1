const { Given, When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');

Given(/^I navigate to "(.*)"$/, async (url) => {
    await browser.url(url)
});

Given(/^I accept all cookies$/, async () => {
    await $$('.eom-buttons button.yt-spec-button-shape-next--size-m')[1].waitForClickable();
    await $$('.eom-buttons button.yt-spec-button-shape-next--size-m')[1].click()
})

When(/^I input (.*) to field (.*)$/, async function (text, selector) {
    const world = this;
    world.inputText = text;
    console.log('world --- ', world);
    await $(selector).waitForDisplayed();
    await $(selector).setValue(text);
});

When(/^I click search button$/, async () => {
    await $('button#search-icon-legacy').waitForClickable();
    await $('button#search-icon-legacy').click();
})

Then(/^I expect that element (.*) contain text (.*)$/, async function (selector, text) {
    const world = this;
    console.log('world --- ', world);
    await browser.pause(2000)
    await $$(selector)[0].waitForClickable();
    expect((await $$(selector)[0].getText()).toLowerCase()).to.contain(text)
});

When("I add value {string} to {locator}", async function (text, selector) {
    await $(selector).waitForDisplayed();
    await $(selector).addValue(text);
})

When("I wait for {int}", async function (seconds) {
    const pause = seconds * 1000;
    await browser.pause(pause);
})

When("I switch to frame {int}", async function(frameNumber) {
    const frame = frameNumber - 1
    console.log('frame ', frame)
    await browser.switchToFrame(frame);
})

When("I click {locator} {int} element", async function(selector, number) {
    const clickNumber = number - 1;
    console.log(selector)
    await $$(selector)[clickNumber].waitForClickable();
    await $$(selector)[clickNumber].click();
})

