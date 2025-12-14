import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

test('001 Home画面が表示される', async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('#root >> div').nth(0)).toHaveText("Task List By Jummy");
});
test('002 Coding画面が表示される', async ({ page }) => {
  await page.goto(BASE_URL + '/coding');
  await expect(page.locator('#root >> section').nth(1).locator('h4').nth(1)).toHaveText("CODING");
});
test('003 plans画面が表示される', async ({ page }) => {
  await page.goto(BASE_URL + '/plans');
  await expect(page.locator('#root >> section').nth(1).locator('h4').nth(1)).toHaveText("PLANS");
});
test('004 Kintone画面が表示される', async ({ page }) => {
  await page.goto(BASE_URL + '/kintone');
  await expect(page.locator('#root >> section').nth(1).locator('h4').nth(1)).toHaveText("KINTONE");
});
test('005 Slack画面が表示される', async ({ page }) => {
  await page.goto(BASE_URL + '/slack');
  await expect(page.locator('#root >> section').nth(1).locator('h4').nth(1)).toHaveText("SLACK");
});
test('006 Servermanagement画面が表示される', async ({ page }) => {
  await page.goto(BASE_URL + '/servermanagement');
  await expect(page.locator('#root >> section').nth(1).locator('h4').nth(1)).toHaveText("SERVERMANAGEMENT");
});
test('007 Tips画面が表示される', async ({ page }) => {
  await page.goto(BASE_URL + '/tips');
  await expect(page.locator('#root >> section').nth(1).locator('h4').nth(1)).toHaveText("TIPS");
});