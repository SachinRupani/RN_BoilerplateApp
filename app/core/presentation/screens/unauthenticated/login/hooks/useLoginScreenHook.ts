import {useMemo} from 'react';
import {useLoginValidationUseCase} from '../../../../../domain/usecase/login/useLoginValidationUseCase';

export const useLoginScreenHook = () => {
  const {loginEntity, areAllInputsValid, updateEmail, updatePassword} =
    useLoginValidationUseCase();

  const shouldEnableLoginButton = areAllInputsValid;

  const shouldDisplayPasswordRules = useMemo(() => {
    return loginEntity.password.length > 0;
  }, [loginEntity.password]);

  return {
    loginEntity,
    shouldEnableLoginButton,
    shouldDisplayPasswordRules,
    updateEmail,
    updatePassword,
  };
};
