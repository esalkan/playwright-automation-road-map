const {test,expect} = require('@playwright/test');

/*

    Locators are the central piece of Playwright's auto-waiting and retry-ability. 
    In a nutshell, locators represent a way to find element(s) on the page at any moment.

    Konum belirleyiciler Playwright'ın otomatik bekleme ve yeniden deneme özelliğinin merkezi parçasıdır. 
    Özetle, yer belirleyiciler sayfadaki öğeleri herhangi bir anda bulmanın bir yolunu temsil eder.

    These are the recommended built in locators.
    Bunlar önerilen yerleşik yer belirleyicilerdir.

        - page.getByRole() 
            -   to locate by explicit and implicit accessibility attributes.
            -   açık ve örtük erişilebilirlik özelliklerine göre konumlandırmak için.
        
        - page.getByText() 
            -   to locate by text content.
            -   metin içeriğine göre bulmak için.

        - page.getByLabel() 
            - to locate a form control by associated label's text.
            - Bir form denetimini ilişkili etiketin metnine göre bulmak için.

        - page.getByPlaceholder() 
            - to locate an input by placeholder.
            - yer tutucuya göre bir girdi bulmak için.

        - page.getByAltText() 
            - to locate an element, usually image, by its text alternative.
            - Bir öğeyi, genellikle görüntüyü, metin alternatifine göre bulmak için.

        - page.getByTitle() 
            - to locate an element by its title attribute.
            - bir öğeyi başlık niteliğine göre bulmak için.

        - page.getByTestId() 
            - to locate an element based on its data-testid attribute (other attributes can be configured).
            - data-testid özniteliğine dayalı olarak bir öğeyi bulmak için (diğer öznitelikler yapılandırılabilir).

        - CSS
            if Id is present
            css -> tagname#id (or) #id

            if class attribute is present
            css -> tagname.class (or) .class

            Write css based on any attribute
            css -> [attribute='value']

            Write Css with traversing from parent to child
            css -> parenttagname >> childtagname

            if needs to write the locator based on text
            test=''

        - XPath

        - Matching two locators simultaneously // İki konumlandırıcıyı aynı anda eşleştirme
*/ 



test('Locating Element with CSS', async ({page})=>
{
    await page.goto("https:/www.google.com");
    await expect(page).toHaveTitle("Google");
    
    // CSS
    await page.locator('textarea#APjFqb').click(); // css -> tagname#id (or) #id
    await page.locator('[name="q"]').click(); // css -> [attribute='value']
    await page.locator('textarea.gLFyf').click(); // css -> tagname.class (or) .class
    
    await page.locator('#APjFqb').fill("text");

    // page.getByRole() 
    await page.getByRole('combobox').fill("getByRole() Test");
    
    // getByLabel()
    await page.getByLabel('Ara', { exact: true }).clear();
    await page.frameLocator('iframe[name="callout"]').getByLabel('Oturum açma').click();
    
    // page.getByText() 
    await page.getByText("Kendimi Şanslı Hissediyorum").first().click();

    // page.close();
});