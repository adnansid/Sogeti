class WorldWidePage {
    constructor(page) {
        this.page = page;
        this.countryListSelector = '#country-list-id > ul';
        this.listItemSelector = `${this.countryListSelector} > li`;

        // Define expected URL patterns for each country
        this.countryUrlPatterns = {
            'Belgium': 'https://www.sogeti.be/',
            'Finland': 'https://www.sogeti.fi/',
            'France' : 'https://www.fr.sogeti.com/',
            'Germany' : 'https://www.sogeti.de/',
            'Ireland': 'https://www.sogeti.ie/',
            'Luxembourg': 'https://www.sogeti.lu/',
            'Netherlands' :'https://www.sogeti.nl/',
            'Norway' : 'https://www.sogeti.no/',
            'Spain': 'https://www.sogeti.es/',
            'Sweden' :'https://www.sogeti.se/',
            'UK' : 'https://www.uk.sogeti.com/',
            'USA' :'https://www.us.sogeti.com/',
            'sogeti.com' : 'https://www.sogeti.com/',

            // Add more countries and their expected URL patterns as needed
        };
    }

    get openCountriesList() {
        return this.page.locator(".sprite-globe");
    }

    async getListSize() {
        this.openCountriesList.click();
        const locator = this.page.locator(this.listItemSelector);
        const size = await locator.count();
        console.log("The size of the list:", size);

        return size;
    }

    async openLinks() {
        const items = await this.getListSize();
        console.log("The item count is: " + items);

        for (let i = 1; i <= items; i++) {
            const currentItemSelector = `${this.countryListSelector} > li:nth-of-type(${i})`;
            const currentItem = await this.page.$(currentItemSelector);

            if (currentItem) {
                const countryName = await currentItem.textContent();
                const expectedPattern = this.countryUrlPatterns[countryName.trim()];

                const [newPage] = await Promise.all([
                    this.page.waitForEvent('popup'),
                    currentItem.click()
                ]);

                const url = newPage.url();
                console.log(`Opened link for ${countryName}: ${url}`);

                if (expectedPattern && url.includes(expectedPattern)) {
                    console.log(`URL verification successful for ${countryName}`);
                } else {
                    console.error(`URL verification failed for ${countryName}. Expected pattern: ${expectedPattern}`);
                }

                await this.page.waitForTimeout(1000);
                await newPage.close();

            } else {
                console.error(`Element not found for selector: ${currentItemSelector}`);
            }
        }
    }
}

module.exports = { WorldWidePage };
