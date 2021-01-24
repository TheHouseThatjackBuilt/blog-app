import { IArticleList, IArticle, IUser, IUpdateUser } from '../types/redux/index.d';

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
  if (!response.ok) throw new Error('YOU SHALL NOT PASS') && (await response.json()); // O_o
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

export const requestNewUser = async (newUser: IUser): Promise<any> => {
  const user = serviceUserFabric(newUser);
  const options = serviceHttpFabric(Methods.post, { body: user });
  const response = await http<any>(USERS, options);
  return response;
};

export const requestCurrentUser = async (token: string) => {
  const options = serviceHttpFabric(Methods.get, { headers: { Authorization: `Token ${token}` } });
  const response = await http<any>(USER, options);
  return response;
};

export const authUser = async (data: Omit<IUser, 'username'>) => {
  const user = serviceUserFabric(data);
  const options = serviceHttpFabric(Methods.post, { body: user });
  const response = await http<any>(`${USERS}/${LOGIN}`, options);
  return response;
};

export const updateUser = async (data: IUpdateUser, token: string) => {
  const user = serviceUserFabric(data);
  const options = serviceHttpFabric(Methods.put, { headers: { Authorization: `Token ${token}` }, body: user });
  const response = await http<any>(USER, options);
  return response;
};
// username: warflop2
// email: warflop2@notYandex.ru
// pass: 123456789
