import {act, renderHook} from '@testing-library/react-native';
import {useLoginValidationUseCase} from '../../../../app/core/domain/usecase/login/useLoginValidationUseCase';

describe('test useLoginValidationUseCase', () => {
  it('should initialize with empty email & password with disabled button', () => {
    const {result} = renderHook(() => useLoginValidationUseCase());
    const {loginEntity, areAllInputsValid} = result.current;

    expect(loginEntity.email).toBe('');
    expect(loginEntity.password).toBe('');
    expect(areAllInputsValid).toBe(false);
  });

  it('should set areAllInputsValid - false when email is invalid', () => {
    const {result} = renderHook(() => useLoginValidationUseCase());

    expect(result.current.areAllInputsValid).toBe(false);

    act(() => {
      result.current.updateEmail('sa.rup@.co');
    });

    act(() => {
      result.current.updatePassword('Sach@123');
    });

    expect(result.current.areAllInputsValid).toBe(false);
  });

  it('should set areAllInputsValid - false when password is invalid', () => {
    const {result} = renderHook(() => useLoginValidationUseCase());

    expect(result.current.areAllInputsValid).toBe(false);

    act(() => {
      result.current.updateEmail('sa.rup@.co');
    });

    act(() => {
      result.current.updatePassword('123S');
    });

    expect(result.current.areAllInputsValid).toBe(false);
  });

  it('should set areAllInputsValid - false when both email and password are invalid', () => {
    const {result} = renderHook(() => useLoginValidationUseCase());

    expect(result.current.areAllInputsValid).toBe(false);

    act(() => {
      result.current.updateEmail('sa.rup@.co');
    });

    act(() => {
      result.current.updatePassword('123S');
    });

    expect(result.current.areAllInputsValid).toBe(false);
  });

  it('should set areAllInputsValid - true when email and password are valid', () => {
    const {result} = renderHook(() => useLoginValidationUseCase());

    expect(result.current.areAllInputsValid).toBe(false);

    act(() => {
      result.current.updateEmail('sach.rup@flash.co');
    });

    act(() => {
      result.current.updatePassword('Sach@123');
    });

    expect(result.current.areAllInputsValid).toBe(true);
  });
});
