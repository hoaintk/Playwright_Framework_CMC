import { Page, expect } from '@playwright/test';

export default class SignUpPage {
  readonly page: Page;

    private nameTextbox = '//input[@data-qa="signup-name"]';
    private emailTextbox = '//input[@data-qa="signup-email"]';
    private signUpButton = '//button[@data-qa="signup-button"]';
    private passwordTextbox = '//input[@data-qa="password"]';
    private firstNameTextbox = '//input[@data-qa="first_name"]';
    private lastNameTextbox = '//input[@data-qa="last_name"]';
    private addressTextbox = '//input[@data-qa="address"]';
    private stateTextbox = '//input[@data-qa="state"]';
    private cityTextbox = '//input[@data-qa="city"]';
    private zipCodeTextbox = '//input[@data-qa="zipcode"]';
    private mobileNumberTextbox = '//input[@data-qa="mobile_number"]';
    private createAccountButton = '//button[@data-qa="create-account"]';
    private accountCreatedMessage = '(//h2[@data-qa="account-created"]/parent::div//p)[1]';

  constructor(page: Page) {
    this.page = page;
  }
  
  async signUp(name: string, email: string, password: string, firstName: string, lastName: string, address: string,
    state: string, city: string, zipCode: string, mobileNumber: string) {
    await this.page.fill(this.nameTextbox, name);
    await this.page.fill(this.emailTextbox, email);
    await this.page.click(this.signUpButton);
    await this.page.fill(this.passwordTextbox, password);
    await this.page.fill(this.firstNameTextbox, firstName);
    await this.page.fill(this.lastNameTextbox, lastName);
    await this.page.fill(this.addressTextbox, address);
    await this.page.fill(this.stateTextbox, state);
    await this.page.fill(this.cityTextbox, city);
    await this.page.fill(this.zipCodeTextbox, zipCode);
    await this.page.fill(this.mobileNumberTextbox, mobileNumber);
    await this.page.click(this.createAccountButton);
    await expect(this.page.locator(this.accountCreatedMessage)).toHaveText('Congratulations! Your new account has been successfully created!');

  }
}



