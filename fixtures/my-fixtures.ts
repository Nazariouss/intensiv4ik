import { test as base } from '@playwright/test';
import { GeekPage } from '../page-objects/geekach-page'
import { PromPage } from '../page-objects/prom-page'

type MyFixtures = {
    geekPage: GeekPage,
    promPage: PromPage
}

export const test = base.extend<MyFixtures>({
    geekPage: async ({ page }, use) => {
        const geekPage = new GeekPage(page)
        await geekPage.goto()
        await use(geekPage)
    },

    promPage: async ({ page }, use) => {
        const promPage = new PromPage(page)
        await promPage.goto()
        await use(promPage)
    }
})

export { expect } from '@playwright/test';