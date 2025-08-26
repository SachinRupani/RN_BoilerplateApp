import {renderHook} from '@testing-library/react-native';
import {act} from 'react';
import {useLoginScreenHook} from '../../../../../app/core/presentation/screens/unauthenticated/login/hooks/useLoginScreenHook';

describe('test useLoginScreenHook', () => {
  it('should disable login button and hide password rules initially', () => {
    const {result} = renderHook(() => useLoginScreenHook());

    expect(result.current.shouldEnableLoginButton).toBe(false);

    expect(result.current.shouldDisplayPasswordRules).toBe(false);
  });

  it('should enable login button if email and password are valid', () => {
    const {result} = renderHook(() => useLoginScreenHook());

    expect(result.current.shouldEnableLoginButton).toBe(false);

    act(() => {
      result.current.updateEmail('sach@sach.co.in');
    });

    act(() => {
      result.current.updatePassword('Sachin@123');
    });

    expect(result.current.shouldEnableLoginButton).toBe(true);
  });

  it('should disable login button if email is invalid', () => {
    const {result} = renderHook(() => useLoginScreenHook());

    expect(result.current.shouldEnableLoginButton).toBe(false);

    act(() => {
      result.current.updateEmail('sach@s.c');
    });

    act(() => {
      result.current.updatePassword('Sachin@123');
    });

    expect(result.current.shouldEnableLoginButton).toBe(false);
  });

  it('should disable login button if password is invalid', () => {
    const {result} = renderHook(() => useLoginScreenHook());

    expect(result.current.shouldEnableLoginButton).toBe(false);

    act(() => {
      result.current.updateEmail('sach@sss.co.in');
    });

    act(() => {
      result.current.updatePassword('S@123');
    });

    expect(result.current.shouldEnableLoginButton).toBe(false);
  });

  it('should disable login button if email and password are invalid', () => {
    const {result} = renderHook(() => useLoginScreenHook());

    expect(result.current.shouldEnableLoginButton).toBe(false);

    act(() => {
      result.current.updateEmail('sach@s.c');
    });

    act(() => {
      result.current.updatePassword('S@123');
    });

    expect(result.current.shouldEnableLoginButton).toBe(false);
  });

  it('should display the password rules if password is non-empty', () => {
    const {result} = renderHook(() => useLoginScreenHook());

    act(() => {
      result.current.updatePassword('S');
    });

    expect(result.current.shouldDisplayPasswordRules).toBe(true);
  });

  it('should hide the password rules if password is empty', () => {
    const {result} = renderHook(() => useLoginScreenHook());

    act(() => {
      result.current.updatePassword('');
    });

    expect(result.current.shouldDisplayPasswordRules).toBe(false);
  });
});
