const {test,expect} = require('@playwright/test');


test('Running Tests in different browsers and setup headless browser', async ({page})=>
{
    await page.goto("https:/www.google.com");
    await expect(page).toHaveTitle("Google");
    await page.close();
});
