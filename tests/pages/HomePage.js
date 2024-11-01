class HomePage {
    constructor(page) {
        this.page = page;
    }

    get servicesTab() {
        return this.page.locator("li.has-children.level2.focus-style")
    }

    async navigateToHomePage() {
        await this.page.goto('/');
    }

    async byPassCookies() {
        const acceptCookieButton = this.page.locator('.acceptCookie');
        if (await acceptCookieButton.count() > 0) {
            await acceptCookieButton.click();
        } else {
            console.warn("Accept Cookies button not found.");
        }
    }

    async waitUntilPageLoad() {
        await this.page.waitForLoadState('load');
    }

    async clickAutomationLink() {
        await this.page.locator('a.subMenuLink', { hasText: 'Automation' }).click({timeout: 5000 });
    }
}

module.exports = { HomePage };
