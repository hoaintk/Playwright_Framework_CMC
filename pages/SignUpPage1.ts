import { Page, expect, Locator } from '@playwright/test';

export default class SignUpPage {
  readonly page: Page;

  // 1) Khai báo type của locator
  private readonly nameTextbox: Locator;
  private readonly emailTextbox: Locator;
  private readonly signUpButton: Locator;
  private readonly passwordTextbox: Locator;
  private readonly firstNameTextbox: Locator;
  private readonly lastNameTextbox: Locator;
  private readonly addressTextbox: Locator;
  private readonly stateTextbox: Locator;
  private readonly cityTextbox: Locator;
  private readonly zipCodeTextbox: Locator;
  private readonly mobileNumberTextbox: Locator;
  private readonly createAccountButton: Locator;
  private readonly accountCreatedMessage: Locator;


  // 2) Khởi tạo locator trong constructor
  constructor(page: Page) {
    this.page = page;

    this.nameTextbox = page.locator('//input[@data-qa="signup-name"]');
    this.emailTextbox = page.locator('//input[@data-qa="signup-email"]');
    this.signUpButton = page.locator('//button[@data-qa="signup-button"]');
    this.passwordTextbox = page.locator('//input[@data-qa="password"]');
    this.firstNameTextbox = page.locator('//input[@data-qa="first_name"]');
    this.lastNameTextbox = page.locator('//input[@data-qa="last_name"]');
    this.addressTextbox = page.locator('//input[@data-qa="address"]');
    this.stateTextbox = page.locator('//input[@data-qa="state"]');
    this.cityTextbox = page.locator('//input[@data-qa="city"]');
    this.zipCodeTextbox = page.locator('//input[@data-qa="zipcode"]');
    this.mobileNumberTextbox = page.locator('//input[@data-qa="mobile_number"]');
    this.createAccountButton = page.locator('//button[@data-qa="create-account"]');
    this.accountCreatedMessage = page.locator('(//h2[@data-qa="account-created"]/parent::div//p)[1]');
  }

  // 3) Actions sử dụng locators đã define + return type rõ ràng


  async enterSignupInfo(name: string, email: string): Promise<void> {
    await this.nameTextbox.fill(name);
    await this.emailTextbox.fill(email);
  }

  async clickSignUp(): Promise<void> {
    await this.signUpButton.click();
  }

  async fillAccountDetails(
    password: string,
    firstName: string,
    lastName: string,
    address: string,
    state: string,
    city: string,
    zipCode: string,
    mobileNumber: string
  ): Promise<void> {
    await this.passwordTextbox.fill(password);
    await this.firstNameTextbox.fill(firstName);
    await this.lastNameTextbox.fill(lastName);
    await this.addressTextbox.fill(address);
    await this.stateTextbox.fill(state);
    await this.cityTextbox.fill(city);
    await this.zipCodeTextbox.fill(zipCode);
    await this.mobileNumberTextbox.fill(mobileNumber);
  }

  async submitCreateAccount(): Promise<void> {
    await this.createAccountButton.click();
  }

  async expectAccountCreated(): Promise<void> {
    await expect(this.accountCreatedMessage)
      .toHaveText('Congratulations! Your new account has been successfully created!');
  }

  async signUp(
    name: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    address: string,
    state: string,
    city: string,
    zipCode: string,
    mobileNumber: string
  ): Promise<void> {
    await this.enterSignupInfo(name, email);
    await this.clickSignUp();
    await this.fillAccountDetails(password, firstName, lastName, address, state, city, zipCode, mobileNumber);
    await this.submitCreateAccount();
    await this.expectAccountCreated();
  }

  // (optional) Lấy nội dung message nếu cần kiểm tra linh hoạt
  async getAccountCreatedText(): Promise<string | null> {
    return this.accountCreatedMessage.textContent();
  }
}
