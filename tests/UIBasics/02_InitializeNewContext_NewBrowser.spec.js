const {test} = require('@playwright/test');

// Initialize newContext() 
// async ({ browser }) => browser object is passed to the test block as a parameter to use it.
// async ({ browser }) => browser nesnesi, test bloğunda kullanılmak üzere bir parametre olarak aktarılır.
test('Initialize newContext', async ({ browser }) => {

    // Creates a new browser context, essentially a new, isolated browser session.
    // Each context has its own session and storage, isolated from other contexts.
    // Useful for scenarios where you need to simulate multiple independent users.

    const context = await browser.newContext();

    // Yeni bir tarayıcı bağlamı oluşturur, bu da temelde yeni ve izole bir tarayıcı oturumu anlamına gelir.
    // Her bağlam, diğer bağlamlardan izole edilmiş kendi oturumu ve depolamasına sahiptir.
    // Birden fazla bağımsız kullanıcıyı simüle etmeniz gereken senaryolar için kullanışlıdır.


    // Default chromium
    // Varsayılan chromium
});

