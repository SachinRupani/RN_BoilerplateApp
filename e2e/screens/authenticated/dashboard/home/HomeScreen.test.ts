import {by, device, element, expect} from 'detox';
import {loginTest} from '../../../../helpers/loginHelper';

describe('Test HomeScreen', () => {
  beforeAll(async () => {
    await device.launchApp();
    await loginTest();
  });

  it('should output home title and user list on Home Screen', async () => {
    await expect(element(by.id('idTitleHome'))).toBeVisible();
    await expect(element(by.id('idUserList'))).toBeVisible();
  });

  it('should navigate to user details on list item click', async () => {
    await expect(element(by.id('idUserList'))).toBeVisible();

    await expect(element(by.id('idUserItem1'))).toBeVisible();
    await element(by.id('idUserItem1')).tap();

    await expect(element(by.id('idTitleUserDetails'))).toBeVisible();
    await expect(element(by.id('userInfoTitle1'))).toBeVisible();
  });
});
