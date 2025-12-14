import { test, expect } from '@playwright/test';
import { BASE_URL } from './config/constants';

test('008 coding画面で、createボタンをクリックし、ローカルストレージに保存されたことを確認し、タスクが表示される。', async ({ page }) => {
  await page.goto(BASE_URL+'/coding');
  const defaulttask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(defaulttask).toBeNull();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  const createdtask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(createdtask).not.toBeNull();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
}); 
test('009 coding画面で、createボタンをクリックし、できたタスクを削除できる。', async ({ page }) => {
  await page.goto(BASE_URL+'/coding');
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
  await page.getByTestId('delete-button').nth(0).click();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
});
test('010 plans画面で、createボタンをクリックし、ローカルストレージに保存されたことを確認し、タスクが表示される。', async ({ page }) => {
  await page.goto(BASE_URL+'/plans');
  const defaulttask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(defaulttask).toBeNull();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  const createdtask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(createdtask).not.toBeNull();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
}); 
test('011 plans画面で、createボタンをクリックし、できたタスクを削除できる。', async ({ page }) => {
  await page.goto(BASE_URL+'/plans');
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
  await page.getByTestId('delete-button').nth(0).click();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
});
test('012 kintone画面で、createボタンをクリックし、ローカルストレージに保存されたことを確認し、タスクが表示される。', async ({ page }) => {
  await page.goto(BASE_URL+'/kintone');
  const defaulttask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(defaulttask).toBeNull();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  const createdtask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(createdtask).not.toBeNull();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
}); 
test('013 kintone画面で、createボタンをクリックし、できたタスクを削除できる。', async ({ page }) => {
  await page.goto(BASE_URL+'/kintone');
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
  await page.getByTestId('delete-button').nth(0).click();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
});
test('014 servermanagement画面で、createボタンをクリックし、ローカルストレージに保存されたことを確認し、タスクが表示される。', async ({ page }) => {
  await page.goto(BASE_URL+'/servermanagement');
  const defaulttask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(defaulttask).toBeNull();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  const createdtask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(createdtask).not.toBeNull();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
}); 
test('015 servermanagement画面で、createボタンをクリックし、できたタスクを削除できる。', async ({ page }) => {
  await page.goto(BASE_URL+'/servermanagement');
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
  await page.getByTestId('delete-button').nth(0).click();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
});
test('016 slack画面で、createボタンをクリックし、ローカルストレージに保存されたことを確認し、タスクが表示される。', async ({ page }) => {
  await page.goto(BASE_URL+'/slack');
  const defaulttask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(defaulttask).toBeNull();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  const createdtask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(createdtask).not.toBeNull();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
}); 
test('017 slack画面で、createボタンをクリックし、できたタスクを削除できる。', async ({ page }) => {
  await page.goto(BASE_URL+'/slack');
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
  await page.getByTestId('delete-button').nth(0).click();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
});
test('018 tips画面で、createボタンをクリックし、ローカルストレージに保存されたことを確認し、タスクが表示される。', async ({ page }) => {
  await page.goto(BASE_URL+'/tips');
  const defaulttask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(defaulttask).toBeNull();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  const createdtask = await page.evaluate(() => localStorage.getItem('tasks'));
  expect(createdtask).not.toBeNull();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
}); 
test('019 tips画面で、createボタンをクリックし、できたタスクを削除できる。', async ({ page }) => {
  await page.goto(BASE_URL+'/tips');
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
  await page.getByTestId('create-button').click();
  await expect(page.getByTestId('task').nth(1)).toBeVisible();
  await page.getByTestId('delete-button').nth(0).click();
  await expect(page.getByTestId('task').nth(1)).not.toBeVisible();
});