import {act, renderHook} from "@testing-library/react-native";
import {useLoginValidationUseCase} from "../../../../app/core/domain/usecase/login/useLoginValidationUseCase";

describe("hook useLoginValidationUseCase", () => {
  it("should initialize with empty email & password with disabled button", () => {
    const {result} = renderHook(() => useLoginValidationUseCase());
    const {email, password, shouldEnableLoginButton} = result.current;

    expect(email).toBe("");
    expect(password).toBe("");
    expect(shouldEnableLoginButton).toBe(false);
  });

  it("should enable login button when both email and password are valid", () => {
    const {result} = renderHook(() => useLoginValidationUseCase());

    expect(result.current.shouldEnableLoginButton).toBe(false);

    act(() => {
      result.current.updateEmail("ss@ss.com");
    });

    act(() => {
      result.current.updatePassword("password123");
    });

    expect(result.current.shouldEnableLoginButton).toBe(true);
  });
});
