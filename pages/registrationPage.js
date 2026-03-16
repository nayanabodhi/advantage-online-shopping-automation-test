class RegistrationPage {

    constructor(page) {
        this.page = page;
        
        // ELements
        this.usernameField = page.locator('input[name="usernameRegisterPage"]');
        this.emailField = page.locator('input[name="emailRegisterPage"]');
        this.passwordField = page.locator('input[name="passwordRegisterPage"]');
        this.confirmPasswordField = page.locator('input[name="confirm_passwordRegisterPage"]');

        // Errors
        this.usernameError = page.locator('#formCover').getByText('Username field is required', { exact: true });
        this.emailError = page.locator('#formCover').getByText('Email field is required', { exact: true });  
        this.passwordError = page.locator('#formCover').getByText('Password field is required', { exact: true });        
        this.confirmPasswordError = page.locator('#formCover').getByText('Confirm password field is required', { exact: true });
    }

    async triggerValidationErrors() {

        await this.usernameField.click();
        await this.page.locator('body').click();

        await this.emailField.click();
        await this.page.locator('body').click();

        await this.passwordField.click();
        await this.page.locator('body').click();

        await this.confirmPasswordField.click();
        await this.page.locator('body').click();
    }

    async enterRegistrationDetails(user) {

        await this.usernameField.fill(user.username);
        await this.emailField.fill(user.email);
        await this.passwordField.fill(user.password);
        await this.confirmPasswordField.fill(user.password);
    }
}

module.exports = { RegistrationPage };