import {prodEnvironment} from "./AppEnvironment";

/**
 * --IMPORTANT--
 * selectedEnvironment should always point to the correct env object based on the branch we are merging to
 */
export const selectedEnvironment = prodEnvironment;
