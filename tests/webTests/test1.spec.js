const { test, expect } = require('@playwright/test');
const { PageObjectsFixture } = require('../fixtures/PageObjectsFixture');


test.beforeEach(async ({ page }) => {
    
    global.pageObjects = new PageObjectsFixture(page);
});

test('Test Case 1: Navigate and hover services', async ({ page, context }) => {

    const homePage = pageObjects.getPageObject('homePage');
    const automationPage = pageObjects.getPageObject('automationPage');

    await homePage.navigateToHomePage()
    await homePage.byPassCookies()
    await homePage.waitUntilPageLoad()

    await homePage.servicesTab.hover({ timeout: 5000 });

    await expect(homePage.servicesTab).toBeVisible(); 

    const automationLink = page.locator('a.subMenuLink', { hasText: 'Automation' });
    automationLink.click({ timeout: 5000 });
    await automationPage.waitUntilPageLoad()

    await expect(automationPage.page.getByRole('link', { name: 'Automation' })).toBeVisible({ timeout: 5000 });

    await expect(
        automationPage.page.locator('.page-heading', { hasText: 'Automation' })
    ).toBeVisible({ timeout: 5000 });

    await automationPage.servicesTab.hover({ timeout: 10000 });

    await expect(automationPage.servicesTab).toHaveClass(automationPage.tabSelected);

    await expect(automationPage.automationTab).toHaveClass(automationPage.tabSelected);

});
