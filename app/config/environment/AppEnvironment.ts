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
  apiKey: string;
  shouldLogNetworkRequestResponse: boolean;
  shouldLogNetworkErrors: boolean;
}

export const devEnvironment: AppEnvironment = {
  displayAppName: "App (DEV)",
  baseUrl: "https://reqres.in/api/",
  apiKey: "reqres-free-v1",
  shouldLogNetworkRequestResponse: true,
  shouldLogNetworkErrors: true,
};

export const stagingEnvironment: AppEnvironment = {
  displayAppName: "App (Staging)",
  baseUrl: "https://reqres.in/api/",
  apiKey: "reqres-free-v1",
  shouldLogNetworkRequestResponse: true,
  shouldLogNetworkErrors: true,
};

export const prodEnvironment: AppEnvironment = {
  displayAppName: "App",
  baseUrl: "https://reqres.in/api/",
  apiKey: "reqres-free-v1",
  shouldLogNetworkRequestResponse: false,
  shouldLogNetworkErrors: true,
};
