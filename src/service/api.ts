import { IArticleList, IArticle, IUser, IUpdateUser, IUserError } from '../types/redux/index.d';
import { ResponseApiError } from './ResponseApiError';
import { serviceHttpFabric, serviceUserFabric } from '../tools/dataFabric';
import { Methods } from '../redux/constants';

const BASE_URL = 'https://conduit.productionready.io/api/';
const ARTICLES = 'articles';
const LIMIT = 'limit';
const OFFSET = 'offset';
const USERS = 'users';
const USER = 'user';
const LOGIN = 'login';

const http = async <T>(url: string, options: any): Promise<T> => {
  const link = new URL(url, BASE_URL);
  const response = await fetch(link.toString(), options);

  if (response.status === 422) throw new ResponseApiError<IUserError>(await response.json());
  if (!response.ok) throw new Error('some unexpected error');
  return response.json();
};

export const requestArticleList = (offsetPage: number): Promise<IArticleList> => {
  const options = serviceHttpFabric(Methods.get);
  return http<IArticleList>(`${ARTICLES}?${LIMIT}=5&${OFFSET}=${offsetPage}`, options);
};

export const requestArticle = (id: string): Promise<IArticle> => {
  const options = serviceHttpFabric(Methods.get);
  return http<IArticle>(`${ARTICLES}/${id}`, options);
};

export const requestNewUser = (newUser: IUser): Promise<any> => {
  const user = serviceUserFabric(newUser);
  const options = serviceHttpFabric(Methods.post, { body: user });
  return http<any>(USERS, options);
};

export const requestCurrentUser = (token: string) => {
  const options = serviceHttpFabric(Methods.get, { headers: { Authorization: `Token ${token}` } });
  return http<any>(USER, options);
};

export const authUser = (data: Omit<IUser, 'username'>) => {
  const user = serviceUserFabric(data);
  const options = serviceHttpFabric(Methods.post, { body: user });
  return http<any>(`${USERS}/${LOGIN}`, options);
};

export const updateUser = (data: IUpdateUser, token: string) => {
  const user = serviceUserFabric(data);
  const options = serviceHttpFabric(Methods.put, { headers: { Authorization: `Token ${token}` }, body: user });
  return http<any>(USER, options);
};
