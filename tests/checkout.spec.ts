import { test, expect } from '@playwright/test';
import product from '../data/product.json'; 
import cardInfo from '../data/cardInfo.json'; 
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';

test('checkout successfully', async ({ page }) => {

  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await homePage.goto();
  await homePage.navigateToProductPage();
  await productsPage.addProductToCart(product.productName);
  await cartPage.checkOutSuccessfully(product.productName, '. First Last', 'India', '01283474938', cardInfo.name, cardInfo.cardNumber,
    cardInfo.CVC, cardInfo.Month, cardInfo.Year);
  await cartPage.checkOutSuccessfully(product.productName, '. First Last', 'India', '01283474938', cardInfo.name, cardInfo.cardNumber,
    cardInfo.CVC, cardInfo.Month, cardInfo.Year);
});
