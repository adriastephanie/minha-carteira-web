import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('./');
  const name = await page.innerText('#minha-carteira-title');
  expect(name).toBe('Minha carteira');
});