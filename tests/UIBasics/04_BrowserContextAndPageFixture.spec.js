// What is Browser context and page fixtures in playwright?

/* 
    In the context of automated testing with Playwright, fixtures are used to set up the environment before tests run 
    and clean it up afterward. 
    Fixtures can help initialize browser contexts and pages, 
    which are fundamental components in browser automation.

    Playwright ile otomatik testler yaparken, fixtures testlerin çalıştırılmasından önce ortamı kurmak 
    ve testlerden sonra temizlemek için kullanılır. 
    Fixtures, tarayıcı bağlamları (browser contexts) ve sayfaları (pages) başlatmaya yardımcı olur; 
    bunlar tarayıcı otomasyonunun temel bileşenleridir.
*/


const {test} = require('@playwright/test');

/*
    Browser Context
        Bir tarayıcı bağlamı, bir tarayıcı örneği içinde izole edilmiş bir ortamdır. 
        Kendi çerezleri, yerel depolaması ve diğer ayarları olan yeni bir tarayıcı profili gibi düşünülebilir. 
        Tarayıcı bağlamları, aynı tarayıcı örneği içinde birden fazla bağımsız oturum çalıştırmanıza olanak tanır.

        A browser context is an isolated environment within a browser instance. 
        It can be thought of as a new browser profile with its own cookies, local storage, and other settings. 
        Browser contexts allow you to run multiple independent sessions within the same browser instance.

    Neden Tarayıcı Bağlamları Kullanılır?
        Testleri birbirinden izole etmek için, böylece bir testin başka bir testi etkilememesini sağlar.
        Aynı anda birden fazla kullanıcının uygulama ile etkileşimini simüle etmek için.
        Aynı tarayıcı örneğini yeniden kullanarak testleri daha verimli çalıştırmak için.

        To isolate tests from each other, ensuring that one test does not affect another.
        To simulate multiple users interacting with the application simultaneously.
        To run tests more efficiently by reusing the same browser instance.
*/


/*
    Page
        Bir sayfa, bir tarayıcı bağlamı içinde tek bir sekme veya penceredir. 
        Her sayfa, tek bir tarama oturumunu temsil eder ve farklı URL'lere gitmek, 
        web elemanlarıyla etkileşimde bulunmak ve ekran görüntüleri almak için kullanılabilir.

        A page is a single tab or window within a browser context. 
        Each page represents a single browsing session and can be used to navigate to different URLs, 
        interact with web elements, and capture screenshots.

    Neden Sayfalar Kullanılır?
        Tek bir oturum içinde belirli işlemleri gerçekleştirmek için.
        Testleri, her sayfanın bir görev veya kullanıcı etkileşimi üzerine odaklanarak organize etmek için.

        To perform specific actions within a single session.
        To keep the tests organized by focusing on one task or user interaction per page.
*/


// async (browser)   = evaluated normal browser string value
// async ({browser}) = evaluated browser fixture 
test('Browser Context fixture and Page Fixture', async ({browser})=>
{
    // Browser context fixture: creating a new browser context (new isolated session)
    // Tarayıcı bağlamı fixture'ı: yeni bir tarayıcı bağlamı oluşturma (yeni izole oturum)
    const context = await browser.newContext();
    
    // Page fixture: creating a new page (tab) within the browser context
    // Sayfa fixture'ı: tarayıcı bağlamı içinde yeni bir sayfa (sekme) oluşturma
    const page = await context.newPage();

    // Navigating to a URL within the page
    // Sayfa içinde bir URL'ye gitme
    await page.goto("https:/www.google.com");


    // Test logic here.
    // Test mantığını buraya eklenir.


    // Closing the browser context after the test
    // Testten sonra tarayıcı bağlamını kapatma
    await page.close();
});

// async (browser)   = evaluated normal browser string value
// async ({browser}) = evaluated browser fixture 
test('Page Fixture', async ({page})=>
    {
        // Browser context fixture: creating a new browser context (new isolated session)
        // Tarayıcı bağlamı fixture'ı: yeni bir tarayıcı bağlamı oluşturma (yeni izole oturum)
        // const context = await browser.newContext();
        
        // Page fixture: creating a new page (tab) within the browser context
        // Sayfa fixture'ı: tarayıcı bağlamı içinde yeni bir sayfa (sekme) oluşturma
        // const page = await context.newPage();
    
        // Navigating to a URL within the page
        // Sayfa içinde bir URL'ye gitme
        await page.goto("https:/www.google.com");
    
    
        // Test logic here.
        // Test mantığını buraya eklenir.
    
    
        // Closing the browser context after the test
        // Testten sonra tarayıcı bağlamını kapatma
        await page.close();
    });