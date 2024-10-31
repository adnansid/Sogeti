const { test, expect } = require('@playwright/test');
const { PageObjectsFixture } = require('../fixtures/PageObjectsFixture');

test.beforeEach(async ({ page }) => {
   
    global.pageObjects = new PageObjectsFixture(page);
});

test('Test Case 2: Fill the form data', async ({ page }) => {
    const homePage = pageObjects.getPageObject('homePage');
    const automationPage = pageObjects.getPageObject('automationPage');

    await homePage.navigateToHomePage();
    await homePage.byPassCookies();

    await homePage.openServiceTab.hover();
    await homePage.clickAutomationLink();

    await automationPage.waitUntilPageLoad();
    await expect(automationPage.page).toHaveURL(/.*services\/automation\/.*/);

    await automationPage.scrollToContactSection();
    await automationPage.fillContactData();
});
