import { test, expect } from '@playwright/test';
import { BASE_URL } from './config/constants';
import { Tag } from '../types';

const tags: Tag[] = ['coding', 'plans', 'kintone', 'servermanagement', 'slack', 'tips'];
  tags.forEach((tags,i) => {
  test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL+'/'+tags);
  await expect(page.getByTestId(tags.toUpperCase())).toHaveText(tags.toUpperCase());
  });
  test(`00${i+8} ${tags}画面が表示され、inputタグのtitleとcontentに、テキストを入力し、createボタンをクリックし、ローカルストレージに保存されたことを確認し、タスクが表示される。`, async ({ page }) => {
　console.log("●"+tags);
// titleとcontentにテキストを入力
　const inputTitle = page.getByTestId(`input-title`).locator('textarea');
  await inputTitle.fill(`Input ${tags} Title Test`);
  await expect(inputTitle).toHaveValue(`Input ${tags} Title Test`);
  const inputContent = page.getByTestId(`input-content`).locator('textarea');
  await inputContent.fill(`Input ${tags} Content Test`);
  await expect(inputContent).toHaveValue(`Input ${tags} Content Test`);
  // localstorage がnullを確認
  const defaulttask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(defaulttask).toBeNull();
  // taskが表示されていないことを確認
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  // createボタンをクリックし、localstorageに保存されたことを確認、taskが表示されることを確認
  await page.getByTestId('create-button').click();
  const createdtask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(createdtask).not.toBeNull();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
  }); 
  test(`0${i+14} ${tags}画面が表示され、createボタンをクリックし、できたタスクをdeleteボタンで削除できる。`, async ({ page }) => {
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
  await page.getByTestId('delete-button').nth(0).click();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  });
});