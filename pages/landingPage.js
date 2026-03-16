class LandingPage {

    constructor(page) {
        this.page = page;

        this.userIcon = page.locator('#menuUser');
        this.createAccountLink = page.locator('a.create-new-account');
    }

    async navigate() {
        await this.page.goto('https://www.advantageonlineshopping.com/');
    }

    async openRegistrationPage() {
        await this.userIcon.click();
        await this.createAccountLink.click();
    }
}

module.exports = { LandingPage };