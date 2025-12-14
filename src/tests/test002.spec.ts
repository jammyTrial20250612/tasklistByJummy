import { test, expect } from '@playwright/test';
import { BASE_URL } from './config/constants';
import { Tag } from '../types';

const tags: Tag[] = ['coding', 'plans', 'kintone', 'servermanagement', 'slack', 'tips'];
  tags.forEach((tags,i) => {
  test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL+'/'+tags);
  await expect(page.getByTestId(tags.toUpperCase())).toHaveText(tags.toUpperCase());
  });
  test(`00${i+8} ${tags}画面が表示され、createボタンをクリックし、ローカルストレージに保存されたことを確認し、タスクが表示される。`, async ({ page }) => {
  const defaulttask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(defaulttask).toBeNull();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  const createdtask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(createdtask).not.toBeNull();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
  }); 
  test(`00${i+14} ${tags}画面が表示され、createボタンをクリックし、できたタスクをdeleteボタンで削除できる。`, async ({ page }) => {
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
  await page.getByTestId('delete-button').nth(0).click();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  });
});