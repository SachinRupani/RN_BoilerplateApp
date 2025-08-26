import {AppAllowedRegex} from '../../../../utils/ValidationUtils';

export interface PasswordRuleEntity {
  allowedRegex: RegExp;
  textString: string;
  isSatisfied: boolean;
}

export const defaultPasswordRules: Array<PasswordRuleEntity> = [
  {
    allowedRegex: AppAllowedRegex.Uppercase,
    textString: '- have at least 1 Uppercase character',
    isSatisfied: false,
  },
  {
    allowedRegex: AppAllowedRegex.Lowercase,
    textString: '- have at least 1 Lowercase character',
    isSatisfied: false,
  },
  {
    allowedRegex: AppAllowedRegex.SpecialChar,
    textString: '- have at least 1 special character',
    isSatisfied: false,
  },
  {
    allowedRegex: AppAllowedRegex.Digit,
    textString: '- have at least 1 digit',
    isSatisfied: false,
  },
  {
    allowedRegex: AppAllowedRegex.MinLength6,
    textString: '- be at least 6 characters in length',
    isSatisfied: false,
  },
];
