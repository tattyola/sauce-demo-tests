export default class SignInPage {
    constructor(page) {
        this.page = page
        this.usernameInput = page.getByTestId('username')
        this.passwordInput = page.getByTestId('password')
        this.loginBtn = page.getByTestId('login-button')
    }
    async open() {
        return this.page.goto('/')
    }
}

