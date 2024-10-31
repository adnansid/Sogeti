
const { HomePage } = require('../pages/HomePage');
const { AutomationPage } = require('../pages/services/AutomationPage');
const { WorldWidePage } = require('../pages/countries/WorldWidePage');


class PageObjectsFixture {
    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.automationPage = new AutomationPage(this.page);
        this.worldwidePage = new WorldWidePage(this.page);

    }

    getPageObject(objectName) {
        switch (objectName) {
            case 'homePage':
                return this.homePage;

            case 'automationPage':
                return this.automationPage;

            case 'worldwidePage':
                return this.worldwidePage

            default:
                throw new Error(`Page object ${objectName} is not available.`);
        }
    }
}

module.exports = { PageObjectsFixture };
