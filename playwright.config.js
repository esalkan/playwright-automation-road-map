// @ts-check
// import necessary modules from playwright 
// Gerekli modülleri playwrightten ekleme
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */

// Define Configuration
// Yapılandırmayı Tanımlama
module.exports = defineConfig({
  // Test Directory: Specifies the directory where test files are located.
  // Test Dizini: Test dosyalarının bulunduğu dizini belirtir.
  testDir: './tests',
  
  /* Run tests in files in parallel */
  // Parallel Execution: Enables running tests in parallel.
  // Paralel Yürütme: Testlerin paralel olarak çalışmasını sağlar.
  fullyParallel: true,
  
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // Forbid test.only on CI: Fails the build if test.only is found in the code on CI.
  // CI'da test.only Kullanımını Yasakla:  CI'da kodda test.only bulunursa build'in başarısız olmasını sağlar
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only */
  // Retries: Retries failed tests twice on CI, none locally.
  // Yeniden Denemeler: CI'da başarısız testleri iki kez yeniden dener, yerelde denemez.
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  // Workers: Disables parallel execution on CI by using only one worker.
  // İşçiler (Workers): CI ortamında paralel çalışmayı devre dışı bırakır ve sadece bir işçi (worker) kullanır.
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // Reporter: Sets the test reporter to generate an HTML report.
  // Raporlayıcı: Test sonuçlarını HTML formatında raporlayan bir raporlayıcı ayarlar.
  reporter: 'html',


  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  // Global use settings: Configures global settings, such as collecting trace on the first retry of a failed test.
  // Global Kullanım Ayarları: Başarısız olan testlerin ilk yeniden denemesinde izleme (trace) toplama ayarını yapar.
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    /* `await page.goto('/')` gibi eylemlerde kullanılacak temel URL. */
    // baseURL: 'http://127.0.0.1:3000',
    browserName : 'chromium', // Yeni eklendi - added new.

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    /* Başarısız testi yeniden denerken iz toplayın. Bkz. https://playwright.dev/docs/trace-viewer */

    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  // Projects Configuration: Defines projects for different browsers (Chromium, Firefox, WebKit).
  // Projeler Konfigürasyonu: Farklı tarayıcılar (Chromium, Firefox, WebKit) için projeler tanımlar.

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

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  // Web Sunucusu (Opsiyonel): (Opsiyonel) Testlerden önce yerel geliştirme sunucusunu başlatır.
  // Web Server (Optional): (Optional) Starts the local development server before tests.
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

