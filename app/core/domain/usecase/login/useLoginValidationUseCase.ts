import {useEffect, useMemo, useState} from 'react';
import {
  isValidEmail,
  isValidPassword,
  isValidStringWithRegex,
} from '../../../../utils/ValidationUtils';
import {defaultLoginEntity, LoginEntity} from '../../entity/login/LoginEntity';

export const useLoginValidationUseCase = () => {
  const [loginEntity, setLoginEntity] =
    useState<LoginEntity>(defaultLoginEntity);

  const areAllInputsValid = useMemo(() => {
    return (
      isValidPassword(loginEntity.password) && isValidEmail(loginEntity.email)
    );
  }, [loginEntity.email, loginEntity.password]);

  useEffect(() => {
    const newRulesState = loginEntity.passwordRules.map(rule => {
      return {
        ...rule,
        isSatisfied: isValidStringWithRegex(
          loginEntity.password,
          rule.allowedRegex,
        ),
      };
    });

    setLoginEntity({
      ...loginEntity,
      passwordRules: newRulesState,
    });
  }, [loginEntity.password]);

  const updateEmail = (input: string) => {
    setLoginEntity({
      ...loginEntity,
      email: input,
    });
  };

  const updatePassword = (input: string) => {
    setLoginEntity({
      ...loginEntity,
      password: input,
    });
  };

  return {
    loginEntity,
    areAllInputsValid,
    updateEmail,
    updatePassword,
  };
};
