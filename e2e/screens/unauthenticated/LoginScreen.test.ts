import {by, device, element, expect} from 'detox';
import {loginTest} from '../../helpers/loginHelper';

describe('Test LoginScreen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should output initial default login screen', async () => {
    await expect(element(by.id('idTitle'))).toBeVisible();
    await expect(element(by.id('idBlockTitle'))).toBeVisible();
    await expect(element(by.id('idEmailInput'))).toBeVisible();
    await expect(element(by.id('idPasswordInput'))).toBeVisible();
    await expect(element(by.id('idLoginButton'))).toBeVisible();
  });

  it('should navigate to dashboard on valid login inputs', async () => {
    await loginTest();
  });
});
