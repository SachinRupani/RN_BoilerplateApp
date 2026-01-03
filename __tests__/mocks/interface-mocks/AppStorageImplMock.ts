import {AppStorageKey} from '../../../app/core/domain/entity/appStorage/AppStorageKeys';
import {AppStorage} from '../../../app/core/domain/interface/AppStorage';

export const appStorageImplMock: AppStorage = {
  setValue: function (
    strKey: AppStorageKey,
    value: string | number | boolean,
  ): void {
    console.log('Setting value in AppStorageImplMock:', strKey, value);
  },

  getStringValue: function (strKey: AppStorageKey): string | undefined {
    return 'mocked_string_value';
  },

  getNumberValue: function (strKey: AppStorageKey): number | undefined {
    return 123;
  },

  getBooleanValue: function (strKey: AppStorageKey): boolean | undefined {
    return true;
  },

  deleteValue: function (strKey: AppStorageKey): void {
    console.log('Deleting value in AppStorageImplMock:', strKey);
  },

  clearStorage: function (): void {
    console.log('Clearing all values in AppStorageImplMock');
  },
};
