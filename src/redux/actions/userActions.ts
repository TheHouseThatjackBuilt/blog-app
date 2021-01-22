import { EActions, IResponseUser } from '../../types/redux/index.d';

export const setUser = (payload: Omit<IResponseUser, 'token'>) => ({
  type: EActions.newUser,
  payload,
});
