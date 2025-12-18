import { test as base, expect, Page } from '@playwright/test';

// Extend the base test with a custom fixture
type MyFixtures = {
  irsPage: Page; // new fixture
};

export const test = base.extend<MyFixtures>({
  irsPage: async ({ page }, use) => {
    // Navigate automatically to IRS.gov
    await page.goto('https://www.irs.gov');
    
    // Provide the page object to the test
    await use(page);
  },
});

export { expect };
