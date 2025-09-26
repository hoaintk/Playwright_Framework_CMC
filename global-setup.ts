// global-setup.ts
import { chromium } from '@playwright/test';
import creds from './data/credentials.json';

export default async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://automationexercise.com/login');
  await page.fill('input[data-qa="login-email"]', creds.validUser.email);   
  await page.fill('input[data-qa="login-password"]', creds.validUser.password);
  await page.click('button[data-qa="login-button"]');
  await page.waitForLoadState('networkidle');
  await page.context().storageState({ path: 'storage/auth.json' });
  await browser.close();
};