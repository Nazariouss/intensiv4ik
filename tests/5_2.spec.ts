import { test, expect } from '@playwright/test'
import { PromPage } from '../page-objects/prom-page'
import { GeekPage } from '../page-objects/geekach-page'

test('check visability', async ({ page }) => {
  let prompage = new PromPage(page)
  await prompage.goto()
  await expect(prompage.promLogo).toBeVisible()
  await expect(prompage.trackBanner).toBeVisible()
});

test('check military category', async ({ page }) => {
  let prompage = new PromPage(page)
  await prompage.goto()
  await expect(prompage.miliCategory).toBeVisible()
  await prompage.miliCategory.click()
  await expect(prompage.miliBanner).toBeVisible()
  await expect(prompage.miliFirstHeader).toHaveText("Необхідне в холодну пору")
});

test('check first 3 categories', async ({ page }) => {
  let prompage = new PromPage(page)
  await prompage.goto()
  await expect(prompage.beautyAndHealth).toBeVisible()
  await expect(prompage.houseAndGarden).toBeVisible()
  await expect(prompage.clothesAndShoes).toBeVisible()
});

test('test available iphone', async ({ page }) => {
  let prompage = new PromPage(page)
  await prompage.goto()
  let search = prompage.searchInput
  await search.fill("iphone 14")
  await search.press("Enter")
  await expect(prompage.iphoneMidnight).toBeVisible()
  await prompage.iphoneMidnight.click()
  await expect(prompage.buttonBuy).toBeVisible()
});

test('testing oportunity to chat', async ({ page }) => {
  let prompage = new PromPage(page)
  await prompage.goto()

  await expect(prompage.buttonChat).toBeVisible()
  await prompage.buttonChat.click()
  await expect(prompage.imgWave).toBeVisible()
});

// prom
// ------------------------------------------------------------------------------------------
// geekach

test('header testing', async ({ page }) => {
  let geekpage = new GeekPage(page)
  await geekpage.goto()
  await expect(geekpage.geekLogo).toBeVisible()
  await expect(geekpage.geekNumbers).toBeVisible()
  await expect(geekpage.geekSchedule).toBeVisible()
  await expect(geekpage.geekBasket).toBeVisible()
});

// test('check categories', async ({ page }) => {
//   await page.goto('https://geekach.com.ua/')
//   let i = 1
//   let names_of_categories = ["Настільні ігри", "Рольові ігри", "Жанри", "Серії та світи", "Аксесуари", "Комікси", "Книги"]
//   while (i < 8) {
//     await expect(page.locator(`//ul[@class='products-menu__container']/li[${i}]/div/a`)).toHaveText(names_of_categories[i - 1])
//     i += 1
//   }
// })

test('check categories', async ({ page }) => {
  let geekpage = new GeekPage(page)
  await geekpage.goto()
  await expect(geekpage.category1).toHaveText("Настільні ігри")
  await expect(geekpage.category2).toHaveText("Рольові ігри")
  await expect(geekpage.category3).toHaveText("Жанри")
  await expect(geekpage.category4).toHaveText("Серії та світи")
  await expect(geekpage.category5).toHaveText("Аксесуари")
  await expect(geekpage.category6).toHaveText("Комікси")
  await expect(geekpage.category7).toHaveText("Книги")

})

test('another options', async ({ page }) => {
  let geekpage = new GeekPage(page)
  await geekpage.goto()
  await expect(geekpage.geekNew).toBeVisible()
  await expect(geekpage.geekSale).toBeVisible()
  await expect(geekpage.geekHot).toBeVisible()
});


test('testing searching', async ({ page }) => {
  let geekpage = new GeekPage(page)
  await geekpage.goto()
  let search = geekpage.searchInput
  await search.fill('the witcher')
  await search.press('Enter')
  await geekpage.VesemirDiceSet.click()
  await expect(geekpage.inStock).toBeVisible();
});

test('try to sign in', async ({ page }) => {
  let geekpage = new GeekPage(page)
  await geekpage.goto()
  await geekpage.signInBtnHeader.click();
  await geekpage.emailInput.fill('new_chel@gmail.com');
  await geekpage.passwordInput.fill('12345678');
  await geekpage.signInBtnMain.click();
  await expect(geekpage.invalidInput).toBeVisible();
});



