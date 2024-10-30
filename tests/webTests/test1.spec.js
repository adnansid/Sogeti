const { test, expect } = require('@playwright/test');
const { PageObjectsFixture } = require('../fixtures/PageObjectsFixture');
// const { CookieHelper } = require('../../helpers/cookieHelper');


// test.beforeEach(async ({ page }) => {
//     // Initialize PageObjectsFixture for each test
//     global.pageObjects = new PageObjectsFixture(page);
// });

test('Test Case 1 Navigate and hover services', async ({ page, context }) => {

    const homePage = pageObjects.getPageObject('homePage');
    const automationPage = pageObjects.getPageObject('automationPage');


    await homePage.navigateToHomePage()
    await homePage.byPassCookies()
    await homePage.waitUntilPageLoad()

    // await homePage.openServiceTab.waitFor({ state: 'visible', timeout: 2000 });

    await homePage.openServiceTab.hover({ timeout: 5000 });

    await expect(homePage.openServiceTab).toBeVisible(); // Example assertion


    // Locator using page.locator for an anchor tag with class "subMenuLink" and text "Automation"
    const automationLink = page.locator('a.subMenuLink', { hasText: 'Automation' });
    automationLink.click();
    await automationPage.waitUntilPageLoad()

    await expect(automationPage.page.getByRole('link', { name: 'Automation' })).toBeVisible({ timeout: 5000 });

    await expect(
        automationPage.page.locator('.page-heading', { hasText: 'Automation' })
    ).toBeVisible({ timeout: 5000 });

    await automationPage.openServiceTab.hover({ timeout: 5000 });

    await expect(
        automationPage.servicesTab
    ).toBeVisible({ timeout: 5000 });

    await expect(
        automationPage.automationTab
    ).toBeVisible({ timeout: 5000 });

    // await expect(
    //     automationPage.page.locator('.selected.has-children.expanded.level2.focus-style', { hasText: 'Services' })
    // ).toBeVisible({ timeout: 5000 });

    // await expect(
    //     automationPage.page.locator('.selected.current.expanded', { hasText: 'Automation' }).nth(0)
    // ).toBeVisible({ timeout: 5000 });



});
