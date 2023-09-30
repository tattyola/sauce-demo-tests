import { test, expect } from '../common/test';

test.describe('Authorization & Authentication', () => {
  test.beforeEach(async ({ signInPage }) => {
    await signInPage.open();
  })

  test('sign in with valid credentials', async ({ signInPage, page, productPage }) => {
    await signInPage.usernameInput.fill(process.env.USERNAME)
    await signInPage.passwordInput.fill(process.env.PASSWORD)
    await signInPage.loginBtn.click()
    await expect(page).toHaveURL('/inventory.html')
    await expect(productPage.title).toBeVisible();
  });
});
