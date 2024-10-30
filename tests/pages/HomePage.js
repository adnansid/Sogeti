
class HomePage {
  constructor(page) {
      this.page = page;
  }

  async navigateToHomePage() {
      await this.page.goto('https://www.sogeti.com/');
  }
  async byPassCookies() {

      const acceptCookieButton = this.page.locator('.acceptCookie');
      await acceptCookieButton.first().click();
  }

  get openServiceTab() {
      return this.page.locator("li.has-children.level2.focus-style");
  }

  get getAutomationLink() {
      return this.page.getByRole('link', { name: 'Automation' });
  }

  async openProfile() {
      await this.profileLink.click();
  }

  async waitUntilPageLoad() {
      await this.page.waitForLoadState()
  }

}

module.exports = { HomePage };
