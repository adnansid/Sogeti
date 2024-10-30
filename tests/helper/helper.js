// helpers/CookieBouncer.js

class Helper {
    constructor(page) {
        this.page = page; // Playwright page instance
    }

    async acceptCookies() {
        // Locate the shadow host element
        const shadowHost = this.page.locator('css-selector-of-shadow-host'); // Replace with the actual CSS selector of the shadow host

        // Wait for the shadow host to be visible
        await shadowHost.waitFor({ state: 'visible' });

        // Get the shadow root
        const shadowRoot = await shadowHost.evaluateHandle(host => host.shadowRoot);

        // Now, use locator within the shadow root
        const cookieButton = await shadowRoot.locator('css-selector-of-cookie-button'); // Replace with the actual CSS selector of the cookie button

        // Wait for the button to be visible and click it
        await cookieButton.waitFor({ state: 'visible' });
        await cookieButton.click();
    }
}

module.exports = { Helper };
