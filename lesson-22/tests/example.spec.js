const { test, expect } = require('@playwright/test');
const MainPage = require('../page-objects/mainPage')

test.describe(`test website`, async function () {
  test('has title', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright123/);
  });

  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro123/);
  });
})

