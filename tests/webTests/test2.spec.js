const { test, expect } = require('@playwright/test');
const { PageObjectsFixture } = require('../fixtures/PageObjectsFixture');

test.beforeEach(async ({ page }) => {
    // Initialize PageObjectsFixture for each test
    global.pageObjects = new PageObjectsFixture(page);
});

test('Test Case 2 Fill the form data', async ({ page, context }) => {
    onst homePage = pageObjects.getPageObject('homePage');
    const automationPage = pageObjects.getPageObject('automationPage');


    await homePage.navigateToHomePage()
    await homePage.byPassCookies()
    await homePage.waitUntilPageLoad()
});