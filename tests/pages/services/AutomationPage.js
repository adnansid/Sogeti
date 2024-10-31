const { faker } = require('@faker-js/faker');

class AutomationPage {
    constructor(page) {
        this.page = page;
        this.tabSelected = "selected has-children expanded level2 focus-style hover";
    }

    async navigateToHomePage() {
        await this.page.goto('/');
    }

    async navigateToAutomationPage() {
        await this.page.goto('services/automation/');
    }

    get servicesTab() {
        return this.page.locator('li', { hasText: 'Services' }).nth(0)
    }

    get automationTab() {
        return this.page.locator('li', { hasText: 'Automation' }).nth(0)
    }

    get getAutomationLink() {
        return this.page.getByRole('link', { name: 'Automation' })
    }

    get getHeadingContact() {
        return this.page.getByRole('heading', { name: 'Contact us:' })
    }
    get getFirstName() {
        return this.page.locator("input[name='__field_123927']")
    }

    get getLastName() {
        return this.page.locator("input[name='__field_123938']")
    }

    get getEmail() {
        return this.page.locator("input[name='__field_123928']")
    }

    get getPhone() {
        return this.page.locator("input[name='__field_123929']")
    }

    get getCompany() {
        return this.page.locator("input[name='__field_132738']")
    }

    get getCountry() {
        return this.page.locator("select[name='__field_132596']")
    }

    get getMessage() {
        return this.page.locator("textarea[name='__field_123931']")
    }

    get getAgreeCheckbox() {
        return this.page.locator(" label[for='__field_1239350']")
    }

    // async openProfile() {
    //     await this.profileLink.click();
    // }

    async waitUntilPageLoad() {
        await this.page.waitForLoadState('load')
    }

    async contactUs() {


    }
    async scrollToElement(page, locator) {
        const elementHandle = await page.locator(locator);

        if (await elementHandle.count() > 0) {
            await elementHandle.scrollIntoViewIfNeeded({ behavior: 'smooth', block: 'center' });
        } else {
            console.warn(`Element with locator ${locator} not found.`);
        }
    }

    async generateFakeUser() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.number(),
            company: faker.company.name(),
            country: faker.location.country(),
            message: faker.lorem.sentence()
        }
    }

    async fillContactData() {
        const userData = await this.generateFakeUser()
        console.log(userData)

        this.getFirstName.fill(userData.firstName)
        this.getLastName.fill(userData.lastName)
        this.getEmail.fill(userData.email)
        this.getPhone.fill(userData.phoneNumber)
        this.getCompany.fill(userData.company)

        // this.getCountry.click()
        // this.getCountry.selectOption((await userData).country)

        this.getMessage.fill(userData.message)
        this.getAgreeCheckbox.click()
        await this.page.waitForTimeout(1000000);
    }
}

module.exports = { AutomationPage };