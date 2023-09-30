import { test as base, expect } from '@playwright/test';
import SignInPage from '../pages/sign-in'
import ProductPage from "../pages/products";

const test = base.extend({
    signInPage: async ({page}, use) => {
        await use(new SignInPage(page))
    },
    productPage: async ({page}, use) => {
        await use(new ProductPage(page))
    },
})

export { test, expect }
