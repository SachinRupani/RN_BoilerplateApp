import {PasswordRuleEntity, defaultPasswordRules} from './PasswordRuleEntity';

export interface LoginEntity {
  email: string;
  password: string;
  passwordRules: Array<PasswordRuleEntity>;
}

export const defaultLoginEntity: LoginEntity = {
  email: '',
  password: '',
  passwordRules: defaultPasswordRules,
};
