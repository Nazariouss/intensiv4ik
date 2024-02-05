import { test, expect } from '../fixtures/my-fixtures'

test('header testing', async ({ geekPage }) => {
    await expect(geekPage.geekLogo).toBeVisible()
    await expect(geekPage.geekNumbers).toBeVisible()
    await expect(geekPage.geekSchedule).toBeVisible()
    await expect(geekPage.geekBasket).toBeVisible()
});

test('check categories', async ({ geekPage }) => {
    await expect(geekPage.category1).toHaveText("Настільні ігри")
    await expect(geekPage.category2).toHaveText("Рольові ігри")
    await expect(geekPage.category3).toHaveText("Жанри")
    await expect(geekPage.category4).toHaveText("Серії та світи")
    await expect(geekPage.category5).toHaveText("Аксесуари")
    await expect(geekPage.category6).toHaveText("Комікси")
    await expect(geekPage.category7).toHaveText("Книги")

})

test('another options', async ({ geekPage }) => {
    await expect(geekPage.geekNew).toBeVisible()
    await expect(geekPage.geekSale).toBeVisible()
    await expect(geekPage.geekHot).toBeVisible()
});

test('testing searching', async ({ geekPage }) => {
    let search = geekPage.searchInput
    await search.fill('the witcher')
    await search.press('Enter')
    await geekPage.VesemirDiceSet.click()
    await expect(geekPage.inStock).toBeVisible();
});

test('try to sign in', async ({ geekPage }) => {
    await geekPage.signInBtnHeader.click();
    await geekPage.emailInput.fill('new_chel@gmail.com');
    await geekPage.passwordInput.fill('12345678');
    await geekPage.signInBtnMain.click();
    await expect(geekPage.invalidInput).toBeVisible();
});

//------------------------------------------prom->
test('check visability', async ({ promPage }) => {
    await expect(promPage.promLogo).toBeVisible()
    await expect(promPage.trackBanner).toBeVisible()
});

test('check military category', async ({ promPage }) => {
    await expect(promPage.miliCategory).toBeVisible()
    await promPage.miliCategory.click()
    await expect(promPage.miliBanner).toBeVisible()
    await expect(promPage.miliFirstHeader).toHaveText("Необхідне в холодну пору")
});

test('check first 3 categories', async ({ promPage }) => {
    await expect(promPage.beautyAndHealth).toBeVisible()
    await expect(promPage.houseAndGarden).toBeVisible()
    await expect(promPage.clothesAndShoes).toBeVisible()
});

test('test available iphone', async ({ promPage }) => {
    let search = promPage.searchInput
    await search.fill("iphone 14")
    await search.press("Enter")
    await expect(promPage.iphoneMidnight).toBeVisible()
    await promPage.iphoneMidnight.click()
    await expect(promPage.buttonBuy).toBeVisible()
});

test('testing oportunity to chat', async ({ promPage }) => {
    await expect(promPage.buttonChat).toBeVisible()
    await promPage.buttonChat.click()
    await expect(promPage.imgWave).toBeVisible()
});