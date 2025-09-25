export const AppStorageKeys = {
  'user.email': null,
  'user.token': null,
  'app.theme': null,
} as const;

export type AppStorageKey = keyof typeof AppStorageKeys;
