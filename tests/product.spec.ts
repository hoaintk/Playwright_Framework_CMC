import { test, expect } from '@playwright/test';
import product from '../data/product.json'; 
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';


test('add product into cart successfully', async ({ page }) => {
  
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);

  await homePage.goto();
  await homePage.navigateToProductPage();
  await productsPage.addProductToCart(product.productName);
  await productsPage.clearCart();
});

// search for a product

// add it to the cart

// assert that the cart contains the product