import { test, expect } from '@playwright/test';

test('001 ホームページが表示される', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('#root >> div').nth(0)).toHaveText("Task List By Jummy");
});
