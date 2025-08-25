export interface UserEntity {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly avatarUrl: string;
}

export const defaultUserEntity: UserEntity = {
  id: 0,
  avatarUrl: '',
  email: '',
  firstName: '',
  lastName: '',
};
