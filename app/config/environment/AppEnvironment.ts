/**
 * In a private organisation's code repository
 * I guess this way is simpler to maintain, when merging in
 * dev branch / staging branch / prod branch
 * --IMPORTANT--
 * selectedEnvironment should always point to the correct env object based on the branch we are merging to
 */

interface AppEnvironment {
  displayAppName: string;
  baseUrl: string;
  secretKey: string;
}

export const devEnvironment: AppEnvironment = {
  displayAppName: "App (DEV)",
  baseUrl: "https://dev.com",
  secretKey: "12345",
};

export const stagingEnvironment: AppEnvironment = {
  displayAppName: "App (Staging)",
  baseUrl: "https://staging.com",
  secretKey: "123456",
};

export const prodEnvironment: AppEnvironment = {
  displayAppName: "App",
  baseUrl: "https://prod.com",
  secretKey: "1234567",
};
