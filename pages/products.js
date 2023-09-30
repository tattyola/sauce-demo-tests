export default class ProductPage {
    constructor(page) {
        this.page = page
        this.title = page.locator('.title', {hasText: 'Product'})
    }
}
