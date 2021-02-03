// types & constants:
import { IUser, IUpdateUser, IResponseUser } from '../types/redux/index.d';
import { LOGIN, USER, USERS } from './constants';
import { Methods } from '../redux/constants';
// fabrics & base http:
import { serviceHttpFabric, serviceDataWrapper } from '../tools/dataFabric';
import { http } from './api';

export const requestNewUser = (newUser: IUser) => {
  const user = serviceDataWrapper(newUser, 'user');
  const options = serviceHttpFabric(Methods.post, { body: user });
  return http<{ user: IResponseUser }>(USERS, options);
};

export const requestCurrentUser = (token: string) => {
  const options = serviceHttpFabric(Methods.get, { headers: { Authorization: `Token ${token}` } });
  return http<{ user: IResponseUser }>(USER, options);
};

export const authUser = (data: Omit<IUser, 'username'>) => {
  const user = serviceDataWrapper(data, 'user');
  const options = serviceHttpFabric(Methods.post, { body: user });
  return http<{ user: IResponseUser }>(`${USERS}/${LOGIN}`, options);
};

export const updateUser = (data: IUpdateUser, token: string) => {
  const user = serviceDataWrapper(data, 'user');
  const options = serviceHttpFabric(Methods.put, { headers: { Authorization: `Token ${token}` }, body: user });
  return http<{ user: IResponseUser }>(USER, options);
};
