import { test, expect } from '@playwright/test';

test('Comfy', async ({ page }) => {
  await page.goto("https://comfy.ua/ua/")
  await page.getByPlaceholder("Пошук товарів").click()
  await page.getByPlaceholder("Пошук товарів").fill("iphone12")
  await page.getByPlaceholder("Пошук товарів").press("Enter")
  // далі комфі не пускає(((
  const error = page.getByText('Request unsuccessful.').locator('internal:control=enter-frame').getByText('Error')
  await expect(error).toHaveText(/Error 15/)
});

test('Engineering Club', async({ page }) => {
  await page.goto("https://engineering-club.com/")
  await expect(page).toHaveTitle(/Engineering Club/)
  await page.getByRole('banner').getByRole('link', { name: 'Наші послуги' }).click()
  const button1 = page.getByRole('link', { name: 'хочу вміти в комʼютер та мережі' })
  await expect(button1).toHaveText(/хочу вміти в комʼютер та мережі/)
});

test('github', async({ page }) => {
  await page.goto("https://guthib.com/")
  const rofl = page.getByRole('heading')
  await expect(rofl).toHaveText(/You spelled it wrong./);
});