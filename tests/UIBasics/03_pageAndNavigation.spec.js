const {test} = require('@playwright/test');

// The test function is defined as asynchronous and destructures the page object from the test context.
// Test fonksiyonu, asenkron olarak tanımlanır ve test bağlamından page nesnesini ayrıştırır.
test('First Navigation Test', async ({page})=>{

    // page object to navigate to "https://google.com".
    // page nesnesini kullanarak "https://google.com" adresine gider.
    await page.goto("https://google.com");
});