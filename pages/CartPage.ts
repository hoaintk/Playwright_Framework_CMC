import { Page, expect } from '@playwright/test';

export default class LoginPage {
  readonly page: Page;
  
  private itemInCart = '//td[@class="cart_description"]/h4';
  private proceedToCheckoutButton = '//a[@class="btn btn-default check_out"]';
  private firstNameLastNameInfo = '(//li[@class="address_firstname address_lastname"])[1]';
  private countryInfo = '(//li[@class="address_country_name"])[1]';
  private phoneNumberInfo = '(//li[@class="address_phone"])[1]';
  private placeOrderButton = '//a[@class="btn btn-default check_out"]';
  private nameOnCard = '//input[@data-qa="name-on-card"]';
  private numberCard = '//input[@data-qa="card-number"]';
  private cvc = '//input[@data-qa="cvc"]';
  private expiryMonth = '//input[@data-qa="expiry-month"]';
  private expiryYear = '//input[@data-qa="expiry-year"]';
  private payAndConfirmOrder = '//button[@data-qa="pay-button"]';
  private successfulOrder = '//h2[@data-qa="order-placed"]';

  constructor(page: Page) {
    this.page = page;
  }

  async checkOutSuccessfully(itemName: string, firstLastName: string, country: string, phoneNumber: string, nameOnCard: string, 
    numberCard: string, cvc: string, expiryMonth: string, expiryYear: string) 
    {
  await expect(this.page.locator(this.itemInCart)).toContainText(itemName);
  await this.page.click(this.proceedToCheckoutButton);
  await expect(this.page.locator(this.firstNameLastNameInfo)).toHaveText(firstLastName);
  await expect(this.page.locator(this.countryInfo)).toHaveText(country);
  await expect(this.page.locator(this.phoneNumberInfo)).toHaveText(phoneNumber);
  await expect(this.page.locator(this.itemInCart)).toHaveText(itemName);
  await this.page.click(this.placeOrderButton);

  await this.page.fill(this.nameOnCard, nameOnCard);
  await this.page.fill(this.numberCard, numberCard);
  await this.page.fill(this.cvc, cvc);
  await this.page.fill(this.expiryMonth, expiryMonth);
  await this.page.fill(this.expiryYear, expiryYear);
  await this.page.click(this.payAndConfirmOrder);
  await expect(this.page.locator(this.successfulOrder)).toBeVisible();

  }
  
}
// view cart

// proceed to checkout