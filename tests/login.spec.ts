import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import credentials from '../data/credentials.json'; 

test.use({ storageState: { cookies: [], origins: [] } });


test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.navigateToLoginPage();

});

test('login fails', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginWithValidCredentials(credentials.invalidUser.email, credentials.invalidUser.password);
  await loginPage.verifyErrorMessageWhenLoginFails();
});

test('login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginWithValidCredentials(credentials.validUser.email, credentials.validUser.password);
});

test('login successfully 2', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginWithValidCredentials(credentials.validUser.email, credentials.validUser.password);
});



