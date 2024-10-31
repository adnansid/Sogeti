
const { browser, chromium, expect, page } = require('@playwright/test');

async function globalSetup(defineConfig) {

    const baseURL = defineConfig.projects[0].use.baseURL

    console.log(baseURL)

    const browser = await chromium.launch();
    const context = await browser.newContext()
    const page = await browser.newPage();

    await page.goto(baseURL);

    await browser.close();
}

module.exports = globalSetup;
