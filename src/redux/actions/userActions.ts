import { EActions, IResponseUser } from '../../types/redux/index.d';

export const registerNewUser = (payload: Omit<IResponseUser, 'token'>) => ({
  type: EActions.newUser,
  payload,
});
