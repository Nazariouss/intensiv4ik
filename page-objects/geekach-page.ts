import { expect, type Locator, type Page } from '@playwright/test';

export class GeekPage {
    readonly page: Page;
    readonly geekLogo: Locator;
    readonly geekNumbers: Locator;
    readonly geekSchedule: Locator;
    readonly geekBasket: Locator;
    readonly category1: Locator;
    readonly category2: Locator;
    readonly category3: Locator;
    readonly category4: Locator;
    readonly category5: Locator;
    readonly category6: Locator;
    readonly category7: Locator;
    readonly geekNew: Locator;
    readonly geekSale: Locator;
    readonly geekHot: Locator;
    readonly searchInput: Locator;
    readonly VesemirDiceSet: Locator;
    readonly inStock: Locator;
    readonly signInBtnHeader: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInBtnMain: Locator;
    readonly invalidInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.geekLogo = page.getByRole('img', { name: 'Настільні ігри | Купити настільну гру в Україні, Києві за низькою ціною | інтернет магазин Geekach Shop' }).first()
        this.geekNumbers = page.getByText('097 610-59-21, 050 987-68-89')
        this.geekSchedule = page.locator('.header__layout > div:nth-child(3) > div').first()
        this.geekBasket = page.getByText('0 Мій кошик')
        this.category1 = page.locator(`//ul[@class='products-menu__container']/li[1]/div/a`)
        this.category2 = page.locator(`//ul[@class='products-menu__container']/li[2]/div/a`)
        this.category3 = page.locator(`//ul[@class='products-menu__container']/li[3]/div/a`)
        this.category4 = page.locator(`//ul[@class='products-menu__container']/li[4]/div/a`)
        this.category5 = page.locator(`//ul[@class='products-menu__container']/li[5]/div/a`)
        this.category6 = page.locator(`//ul[@class='products-menu__container']/li[6]/div/a`)
        this.category7 = page.locator(`//ul[@class='products-menu__container']/li[7]/div/a`)
        this.geekNew = page.getByRole('link', { name: 'Новинки' })
        this.geekSale = page.getByRole('link', { name: 'Розпродаж' })
        this.geekHot = page.getByRole('link', { name: 'Хіти продажу'})
        this.searchInput = page.getByPlaceholder('пошук товарів')
        this.VesemirDiceSet = page.getByText('Набір кубиків The Witcher Dice Set. Vesemir - The Wise Witcher (7)')
        this.inStock = page.getByText('В наявності')
        this.signInBtnHeader = page.getByRole('link', { name: 'Вхід', exact: true })
        this.emailInput = page.locator('#login_form_id input[name="user\\[email\\]"]')
        this.passwordInput = page.locator('#login_form_id input[name="user\\[pass\\]"]')
        this.signInBtnMain = page.getByRole('button', { name: 'Увійти' })
        this.invalidInput = page.getByText('Неправильна комбінація е-пошти та паролю')
    }

    async goto() {
        await this.page.goto("https://geekach.com.ua/");
    }
}