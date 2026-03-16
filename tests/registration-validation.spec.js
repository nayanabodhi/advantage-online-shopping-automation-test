const { test, expect } = require('@playwright/test');
const { LandingPage } = require('../pages/landingPage');
const { RegistrationPage } = require('../pages/registrationPage');
const { validUser } = require('../user-data/userData');

test('LOG001 - Mandatory field error messages display & clear', async ({ page }) => {

    const landingPage = new LandingPage(page);
    const registrationPage = new RegistrationPage(page);

    await landingPage.navigate();

    await landingPage.openRegistrationPage();

    // Trigger validation
    await registrationPage.triggerValidationErrors();

    // Verify errors appear
    await expect(registrationPage.usernameError).toBeVisible();
    await expect(registrationPage.emailError).toBeVisible();
    await expect(registrationPage.passwordError).toBeVisible();
    await expect(registrationPage.confirmPasswordError).toBeVisible();

    // Enter valid data
    await registrationPage.enterRegistrationDetails(validUser);

    // Verify errors cleared
    await expect(registrationPage.usernameError).toBeHidden();
    await expect(registrationPage.emailError).toBeHidden();
    await expect(registrationPage.passwordError).toBeHidden();
    await expect(registrationPage.confirmPasswordError).toBeHidden();
});