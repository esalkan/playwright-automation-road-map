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
    const page = await context.newPage();
    await page.goto("https://google.com");
});

// Initialize browser 
// async ({ browser }) => browser object is passed to the test block as a parameter to use it.
// async ({ browser }) => browser nesnesi, test bloğunda kullanılmak üzere bir parametre olarak aktarılır.
test('Initialize newPage', async ({ page }) => {

    // Creates a new browser tab or page in an existing browser context. 
    // Shares the same session and storage (cookies, local storage) with other pages in the same context. 
    
    // const page = await browser.newPage();
    
    // Mevcut bir tarayıcı bağlamında yeni bir tarayıcı sekmesi veya sayfası oluşturur.
    // Aynı bağlamdaki diğer sayfalarla aynı oturumu ve depolamayı (çerezler, yerel depolama) paylaşır.

    // Default chromium
    // Varsayılan chromium

    await page.goto("https://google.com");
});

/*
    - browser.newPage() creates a new tab within the same session, while browser.
    - newContext() creates a completely isolated browser session, 
    - useful for testing scenarios that require separate user sessions.

    - browser.newPage() aynı oturum içinde yeni bir sekme oluştururken, browser.
    - newContext() tamamen yalıtılmış bir tarayıcı oturumu oluşturur, 
    - ayrı kullanıcı oturumları gerektiren senaryoları test etmek için kullanışlıdır.
*/