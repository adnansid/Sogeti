const { test, expect } = require('@playwright/test');
const { PageObjectsFixture } = require('../fixtures/PageObjectsFixture');

test.beforeEach(async ({ page }) => {
 
    global.pageObjects = new PageObjectsFixture(page);
});

test('Test Case 3: Verify that all the web links are working properly', async ({ page }) => {
    const worldwidePage = pageObjects.getPageObject('worldwidePage');
    const homePage = pageObjects.getPageObject('homePage');

    await homePage.navigateToHomePage();
    await homePage.byPassCookies();
    await homePage.waitUntilPageLoad();
    await worldwidePage.openCountriesLinks();
});
