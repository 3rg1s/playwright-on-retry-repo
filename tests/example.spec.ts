import { test, expect } from '@playwright/test';

test('Choosing a language should persist', async ({ page, baseURL }) => {
  await page.goto('/')
  // 1. Open the language selector menu
  await page.locator('[aria-label="Select Language"]').click();
  // 2. Select the Arabic language and make sure we are navigated to /ar
  await page.locator('text=العربية').click();
  await page.waitForURL('**/ar');
  // 3. Navigate again to /
  await page.goto('/');
  // 4. Make sure the user is redirected to /ar
  expect(page.url()).toBe(`${baseURL}/ar`);
});
