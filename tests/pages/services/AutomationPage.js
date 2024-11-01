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

    async waitUntilPageLoad() {
        await this.page.waitForLoadState('load')
    }

    async selectRandomCountry(countryDropdown) {
        // Open the dropdown (optional, depending on your implementation)
        await countryDropdown.click();
    
        // Get all the options available in the dropdown
        const options = await countryDropdown.locator('option').all();
    
        // Ensure there are options available
        if (options.length === 0) {
            console.warn('No country options available in the dropdown.');
            return;
        }
    
        // Select a random option from the available options
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomOptionValue = await options[randomIndex].getAttribute('value'); // Get the value of the selected option
    
        // Select the random option using selectOption
        await countryDropdown.selectOption(randomOptionValue);
    }
    
    async scrollToElement(locator) {
        if (await locator.count() > 0) {
            await locator.scrollIntoViewIfNeeded({ behavior: 'smooth', block: 'center' });
        } else {
            console.warn(`Element not found.`);
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

        await this.scrollToElement(this.getFirstName); 

        await this.getFirstName.fill(userData.firstName);        
       await this.getLastName.fill(userData.lastName);
       await this.getEmail.fill(userData.email);
        await this.getPhone.fill(userData.phoneNumber);
        await this.getCompany.fill(userData.company);


        await this.getCountry.click()
        await this.selectRandomCountry(this.getCountry);

        await this.getMessage.fill(userData.message)
        await this.getAgreeCheckbox.click()

        await this.page.locator(".recaptcha-checkbox > div:nth-of-type(3)", { timeout: 5000 });
        await this.page.locator(".recaptcha-checkbox > div:nth-of-type(3)").first().click({ force: true })


       /* The form submission is failed by CAPTCHA, 
        which is specifically designed to block automated
        interactions. To address this in testing,
        you can utilize test keys provided by the CAPTCHA service,
        or disable CAPTCHA in your test environment to allow seamless form submissions. 
        Alternatively, if neither option is feasible,
        you may need to implement manual intervention to complete the CAPTCHA
        challenge during your testing process.
        */
        
    }
}

module.exports = { AutomationPage };