export const AppAllowedRegex = {
  Email: /^[^\s@]{2,}@[^\s@]{2,}(\.[^\s@]{2,})+$/,
  Password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/,
  Uppercase: /[A-Z]/,
  Lowercase: /[a-z]/,
  Digit: /[0-9]/,
  SpecialChar: /[!@#$%^&*(),.?":{}|<>]/,
  MinLength6: /^.{6,}$/,
};

export const isValidEmail = (input: string): boolean => {
  return AppAllowedRegex.Email.test(input.trim());
};

export const isValidPassword = (input: string): boolean => {
  return AppAllowedRegex.Password.test(input);
};

export const isValidStringWithRegex = (
  input: string,
  regexType: RegExp,
): boolean => {
  return regexType.test(input);
};
