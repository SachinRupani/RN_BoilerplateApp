import {AppStorageKey} from '../entity/appStorage/AppStorageKeys';

export interface AppStorage {
  setValue: <T extends string | number | boolean>(
    strKey: AppStorageKey,
    value: T,
  ) => void;
  getStringValue: (strKey: AppStorageKey) => string | undefined;
  getNumberValue: (strKey: AppStorageKey) => number | undefined;
  getBooleanValue: (strKey: AppStorageKey) => boolean | undefined;
  deleteValue: (strKey: AppStorageKey) => void;
  clearStorage: () => void;
}
