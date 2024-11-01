const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests', 
    globalSetup: require.resolve('./global-setup'),
    fullyParallel: false,
    timeout: 300000, 
    retries: 0, 
 //   reporter: 'html', 
    use: {
        headless: true, 
        viewport: { width: 1280, height: 720 }, 
        actionTimeout: 1000,
        baseURL: 'https://www.sogeti.com/', 
        screenshot: 'only-on-failure', 
      //  video: 'retain-on-failure', 
    },
    projects: [
        {
            name: 'chromium', 
            use: { browserName: 'chromium' },
        }
    ],
});
