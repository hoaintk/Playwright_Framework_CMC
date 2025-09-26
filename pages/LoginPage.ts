import { Page, expect } from '@playwright/test';
import HomePage from './HomePage';

export default class LoginPage {
  readonly page: Page;

    private emailTextbox = '//input[@data-qa="login-email"]';
    private passwordTextbox = '//input[@data-qa="login-password"]';
    private loginButton = '//button[@data-qa="login-button"]';
    private loginFailMessage = '//p[text()="Your email or password is incorrect!"]';

  constructor(page: Page) {
    this.page = page;
  }

  
  async loginWithValidCredentials(user: string, pass: string): Promise<HomePage> {
    await this.page.fill(this.emailTextbox, user);
    await this.page.fill(this.passwordTextbox, pass);
    await this.page.click(this.loginButton);
    return new HomePage(this.page);
  }

  async verifyErrorMessageWhenLoginFails() {
    await expect(this.page.locator(this.loginFailMessage)).toBeVisible();
  }
}



