import {useMemo} from 'react';
import {AppStorage} from '../../../../../domain/interface/AppStorage';
import {useLoginValidationUseCase} from '../../../../../domain/usecase/login/useLoginValidationUseCase';

export const useLoginScreenHook = (appStorage: AppStorage) => {
  const {loginEntity, areAllInputsValid, updateEmail, updatePassword} =
    useLoginValidationUseCase();

  const shouldEnableLoginButton = areAllInputsValid;

  const shouldDisplayPasswordRules = useMemo(() => {
    return loginEntity.password.length > 0;
  }, [loginEntity.password]);

  const saveUserEmailToStorage = () => {
    appStorage.setValue('user.email', loginEntity.email);
  };

  return {
    loginEntity,
    shouldEnableLoginButton,
    shouldDisplayPasswordRules,
    updateEmail,
    updatePassword,
    saveUserEmailToStorage,
  };
};
