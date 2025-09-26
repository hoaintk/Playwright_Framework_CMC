import { Page } from '@playwright/test';
import LoginPage from './LoginPage';
import ProductsPage from './ProductsPage';


export default class HomePage {
  readonly page: Page;
  
  private loginLink = '//a[contains(text(),"Signup / Login")]';
  private productsLink = '//a[contains(text()," Products")]';

  constructor(page: Page) {
    this.page = page;
  }

    async goto() {
    await this.page.goto('/');
  }

   async navigateToLoginPage(): Promise<LoginPage> {
    await this.page.click(this.loginLink);
    await this.page.waitForURL('**/login');
    return new LoginPage(this.page);
  }

     async navigateToProductPage(): Promise<ProductsPage> {
    await this.page.click(this.productsLink);
    await this.page.waitForURL('**/products');
    return new ProductsPage(this.page);
  }

}
