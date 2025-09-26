import { Page, expect } from '@playwright/test';
import CartPage from './CartPage';

export default class ProductsPage {
  readonly page: Page;

    private searchBox = '//input[@id="search_product"]';
    private searchButton = '//button[@id="submit_search"]';
    private viewProductLink = '//a[contains(text(),"View Product")]';
    private addToCartButton = '//button[@class="btn btn-default cart"]';
    private addToCartSuccessMessage = '(//p[@class="text-center"])[1]';
    private viewCartLink = '//u[text()="View Cart"]/parent::a';
    private cartLink = '//a[contains(text()," Cart")]';
    private deleteItemButton = '//a[@class="cart_quantity_delete"]';

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToCart(product: string): Promise<CartPage> {
    await this.page.fill(this.searchBox, product);
    await this.page.click(this.searchButton);
    await this.page.click(this.viewProductLink);
    await this.page.click(this.addToCartButton);
    await expect(this.page.locator(this.addToCartSuccessMessage)).toHaveText('Your product has been added to cart.');
    await this.page.click(this.viewCartLink);
    return new CartPage(this.page);
  }

  async clearCart() {
    await this.page.click(this.cartLink);
    await this.page.click(this.deleteItemButton);
  }

}


// search for product

// view product details

// add to cart