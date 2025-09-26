import { test, expect } from '@playwright/test';
import { genEmail } from '../utils/data';
import SignUpPage from '../pages/SignUpPage';
import HomePage from '../pages/HomePage';

test.use({ storageState: { cookies: [], origins: [] } }); 

test('signup with dynamic email', async ({ page }) => {
  const email = genEmail(); 
  const password = 'Secret123!';
  
  const homePage = new HomePage(page);
  const signUpPage = new SignUpPage(page);

  await homePage.goto();
  await homePage.navigateToLoginPage();
  await signUpPage.signUp('Tester', email, password, 'First', 'Last', '123 Main', 'CA', 'LA', '90001', '123456789');
});
