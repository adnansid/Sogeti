
class AutomationPage {
    constructor(page) {
        this.page = page;
        this.servicesTab = page.locator('li', { hasText: 'Services' }).nth(0);
        this.automationTab = page.locator('li', { hasText: 'Automation' }).nth(0);


        // this.automationTab = this.page.locator('.selected.current.expanded')


    }

    async navigateToHomePage() {
        await this.page.goto('/');
    }

    async navigateToAutomationPage() {
        await this.page.goto('services/automation/');
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
        await this.page.waitForLoadState('load')
    }

    //      public createNewCredentials() {
    //     this.#firstNameData = faker.person.firstName();
    //     this.#lastNameData = faker.person.lastName();
    //     this.#emailData = faker.internet.email({
    //       firstName: this.#firstNameData,
    //       lastName: `${this.#lastNameData}+pw`,
    //       
    //     });
    //     this.#passwordData = "abc123!!";
    //   }

}

module.exports = { AutomationPage };
