import {useMemo, useState} from "react";

export const useLoginValidationUseCase = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function areInputsValid(): boolean {
    return email.trim().length > 0 && password.trim().length > 0;
  }

  const shouldEnableLoginButton = useMemo(() => {
    return areInputsValid();
  }, [email, password]);

  const updateEmail = (input: string) => {
    setEmail(input);
  };

  const updatePassword = (input: string) => {
    setPassword(input);
  };

  return {
    email,
    password,
    shouldEnableLoginButton,
    updateEmail,
    updatePassword,
  };
};
