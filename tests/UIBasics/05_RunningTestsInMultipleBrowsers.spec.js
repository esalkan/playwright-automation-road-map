const {test,expect} = require('@playwright/test');

/*

    playwright.config.js
    
    Configure projects for major browsers
    Projects Configuration: Defines projects for different browsers (Chromium, Firefox, WebKit).
    Projeler Konfigürasyonu: Farklı tarayıcılar (Chromium, Firefox, WebKit) için projeler tanımlar.
  
    projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

*/

test('Running Tests in different browsers and setup headless browser', async ({page})=>
{
    await page.goto("https:/www.google.com");
    await expect(page).toHaveTitle("Google");
    await page.close();
});
