import {by, element, expect} from 'detox';

export const loginTest = async () => {
  // Assertion to check if login title is visible
  await expect(element(by.id('idTitle'))).toBeVisible();

  // Inputs
  await element(by.id('idEmailInput')).typeText('sachin@gmail.com');
  await element(by.id('idEmailInput')).tapReturnKey();

  await element(by.id('idPasswordInput')).typeText('Sach@123');
  await element(by.id('idPasswordInput')).tapReturnKey();

  // Button Tap
  await element(by.id('idLoginButton')).tap();

  // Assertion to check if now dashboard tabs are visible
  await expect(element(by.id('idDashboardTabs'))).toBeVisible();
};
