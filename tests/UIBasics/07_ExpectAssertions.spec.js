const {test,expect} = require('@playwright/test');
/*
    Playwright includes test assertions in the form of expect function. 
    To make an assertion, call expect(value) and choose a matcher that reflects the expectation. 
    There are many generic matchers like toEqual, toContain, toBeTruthy that can be used to assert any conditions.

    Playwright, expect işlevi biçiminde test ifadeleri içerir. 
    Bir assertion oluşturmak için expect(value) çağrısı yapılır ve beklentiyi yansıtan bir eşleştirici seçilir. 
    Herhangi bir koşulu belirtmek için kullanılabilecek toEqual, toContain, toBeTruthy gibi birçok genel eşleştirici vardır.

    Api Response Assertions : https://playwright.dev/docs/api/class-apiresponseassertions
    Generic Assertions      : https://playwright.dev/docs/api/class-genericassertions
    Locator Assertions      : https://playwright.dev/docs/api/class-locatorassertions
        Methods
            - toBeAttached
            - toBeChecked
            - toBeDisabled
            - toBeEditable
            - toBeEmpty
            - toBeEnabled
            - toBeFocused
            - toBeHidden
            - toBeInViewport
            - toBeVisible
            - toContainText
            - toHaveAccessibleDescription
            - toHaveAccessibleName
            - toHaveAttribute(name, value)
            - toHaveAttribute(name)
            - toHaveClass
            - toHaveCount
            - toHaveCSS
            - toHaveId
            - toHaveJSProperty
            - toHaveRole
            - toHaveScreenshot(name)
            - toHaveScreenshot()
            - toHaveText
            - toHaveValue
            - toHaveValues
        Properties
            - not
    Page Assertions         : https://playwright.dev/docs/api/class-pageassertions
    Snapshot Assertions     : https://playwright.dev/docs/api/class-snapshotassertions

 */
test.only('Expect Assertions', async ({page})=>
{
    await page.goto("https:/www.google.com");
    await expect(page).toHaveTitle("Google");
        
    // page.getByRole() 
    await page.getByRole('combobox').fill("getByRole() Test");
       
    // page.getByText() 
    await page.keyboard.press('Enter');
    
    console.log(await page.getByRole('link', { name: 'ByRole Testing Library https' }).textContent()); // textContent() Generic Assertion Method
    await expect(page.getByRole('link', { name: 'ByRole Testing Library https' })).toContainText('ByRole'); // toContainText() Locator Assertion Method

    // page.close();
});

test('Multiple web elements in page', async ({page})=>
{

    const url= "https://www.google.com";
    const searchBox = page.getByRole('combobox');
    const searchResult = page.getByRole('link', { name: 'ByRole Testing Library https' });

    await page.goto(url);
    await expect(page).toHaveTitle("Google");
        
    // page.getByRole() 
    await searchBox.fill("getByRole() Test");
       
    // page.getByText() 
    await page.keyboard.press('Enter');
    
    console.log(await page.getByRole('link', { name: 'ByRole Testing Library https' }).textContent()); // textContent() Generic Assertion Method
    await expect(searchResult).toContainText('ByRole'); // toContainText() Locator Assertion Method

    // page.close();
});