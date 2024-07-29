/*
    The code const { test } = require('@playwright/test') imports the test function from Playwright. 
    This function is used to define and run automated test cases, providing a structured way to verify web application functionality.

    
const { test } = require('@playwright/test') kodu, Playwright'tan test fonksiyonunu ekler. 
Bu fonksiyon, otomatik test durumlarını tanımlamak ve çalıştırmak için kullanılır, web uygulaması işlevselliğini doğrulamak için yapılandırılmış bir yol sağlar.
*/
const {test} = require('@playwright/test')


test('First Playwright Test', async function()
{
    // Test logic goes here
    // Test mantığı buraya yazılır.

    // Step-1 Open Browser - Tarayıcıyı Aç
    // Step-2 await .......
    // Step-3 await .......
    // Step-4 assertions - doğrulamalar

    // async: Indicates that the function is asynchronous and can perform asynchronous operations.
    // async: Fonksiyonun asenkron olduğunu ve asenkron işlemler gerçekleştirebileceğini belirtir.

    // await: Pauses the function execution until the asynchronous operation completes, ensuring sequential execution.
    // await: Fonksiyon yürütmesini, asenkron işlemin tamamlanmasına kadar duraklatır ve ardışık yürütmeyi sağlar.

    /*
    
        This code block defines a test case using Playwright:
            It creates a test named 'First Playwright Test' and provides a structure to write test logic for automating browser interactions.

        Bu kod bloğu, Playwright kullanarak bir test durumu tanımlar:
            'First Playwright Test' adında bir test oluşturur ve tarayıcı etkileşimlerini otomatikleştirmek için test mantığı yazma yapısı sağlar.
    */

});


test('Second Playwright Test', async () => {
    // Test logic goes here
    // Test mantığı buraya yazılır.

    // Step-1 Open Browser - Tarayıcıyı Aç
    const browser = await require('playwright').chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');

    // Step-2 await some operation - asenkron işlemi bekle
    await page.click('text=Some Link');

    // Step-3 await another operation - başka bir asenkron işlemi bekle
    const title = await page.title();
    console.log(title);

    // Step-4 assertions - doğrulamalar
    await expect(page).toHaveTitle('Expected Page Title');

    await browser.close();

    // async: Indicates that the function is asynchronous and can perform asynchronous operations.
    // async: Fonksiyonun asenkron olduğunu ve asenkron işlemler gerçekleştirebileceğini belirtir.

    // async () => ; JavaScriptte isimsiz bir asenkron ok fonksiyonu tanımlar. İsimsiz fonksiyon, bir adı olmayan fonksiyondur.
    // async () => ; defines an anonymous asynchronous arrow function in JavaScript. An anonymous function is a function without a name. 

    // await: Pauses the function execution until the asynchronous operation completes, ensuring sequential execution.
    // await: Fonksiyon yürütmesini, asenkron işlemin tamamlanmasına kadar duraklatır ve ardışık yürütmeyi sağlar.

    /*
        This code block defines a test case using Playwright:
            It creates a test named 'Second Playwright Test' and provides a structure to write test logic for automating browser interactions.

        Bu kod bloğu, Playwright kullanarak bir test durumu tanımlar:
            'Second Playwright Test' adında bir test oluşturur ve tarayıcı etkileşimlerini otomatikleştirmek için test mantığı yazma yapısı sağlar.
    */
});
