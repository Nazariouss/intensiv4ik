import { expect, type Locator, type Page } from '@playwright/test';

export class PromPage {
    readonly page: Page;
    readonly promLogo: Locator;
    readonly trackBanner: Locator;
    readonly miliCategory: Locator;
    readonly miliBanner: Locator;
    readonly miliFirstHeader: Locator;
    readonly beautyAndHealth: Locator;
    readonly houseAndGarden: Locator;
    readonly clothesAndShoes: Locator;
    readonly searchInput: Locator;
    readonly iphoneMidnight: Locator;
    readonly buttonBuy: Locator;
    readonly buttonChat: Locator;
    readonly imgWave: Locator;

    constructor(page: Page) {
        this.page = page;
        this.promLogo = page.getByRole('link', { name: 'prom' })
        this.trackBanner = page.getByRole('link', { name: 'Відстеження замовлення' })
        this.miliCategory = page.getByText("Military")
        this.miliBanner = page.getByRole('img', { name: 'Military Prom' }).first()
        this.miliFirstHeader = page.getByText('Необхідне в холодну пору')
        this.beautyAndHealth = page.getByText("Краса та здоров'я")
        this.houseAndGarden = page.getByText("Дім і сад")
        this.clothesAndShoes = page.getByText("Одяг та взуття")
        this.searchInput = page.getByPlaceholder('Я шукаю...')
        this.iphoneMidnight = page.getByRole('link', { name: 'Смартфон Apple iPhone 14 128GB Midnight (MPUF3)' })
        this.buttonBuy = page.getByRole('button', { name: 'Купити' })
        this.buttonChat = page.getByText('Чат')
        this.imgWave = page.getByRole('img', { name: ':wave:' })
    }

    async goto() {
        await this.page.goto("https://prom.ua/ua/");
    }
}

