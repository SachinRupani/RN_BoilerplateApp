import {AppStorageKey} from '../../domain/entity/appStorage/AppStorageKeys';
import {AppStorage} from '../../domain/interface/AppStorage';

import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export const appStorageImpl: AppStorage = {
  setValue: function (
    strKey: AppStorageKey,
    value: string | number | boolean,
  ): void {
    storage.set(strKey, value);
  },

  getStringValue: function (strKey: AppStorageKey): string | undefined {
    return storage.getString(strKey);
  },

  getNumberValue: function (strKey: AppStorageKey): number | undefined {
    return storage.getNumber(strKey);
  },

  getBooleanValue: function (strKey: AppStorageKey): boolean | undefined {
    return storage.getBoolean(strKey);
  },

  deleteValue: function (strKey: AppStorageKey): void {
    storage.delete(strKey);
  },

  clearStorage: function (): void {
    storage.clearAll();
  },
};
