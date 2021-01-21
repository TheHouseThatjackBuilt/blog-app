import {
  IArticleList,
  IArticle,
  IUser,
  INewUser,
} from '../types/redux/index.d';

import { serviceHttpFabric, serviceUserFabric } from '../tools/dataFabric';

import { Methods } from '../redux/constants';
import { Imethod } from '../types/service/index.d';

const BASE_URL = 'https://conduit.productionready.io/api/';
const ARTICLES = 'articles';
const LIMIT = 'limit';
const OFFSET = 'offset';
const USERS = 'users';

const setCookie = (token: string) => {
  document.cookie = `token=${token}`;
};

const http = async <T, M extends string, R>(
  url: string,
  method: M,
  body?: R,
): Promise<T> => {
  const link = new URL(url, BASE_URL);
  const requestOption = serviceHttpFabric<M, R>(method, body);
  const response = await fetch(link.toString(), requestOption);
  if (!response.ok) throw new Error('god damn guys, god damn.') && (await response.json()); // O_o
  return response.json();
};

const requestArticleList = (offsetPage: number): Promise<IArticleList> => {
  const link = `${ARTICLES}?${LIMIT}=5&${OFFSET}=${offsetPage}`;
  return http<IArticleList, Imethod, null>(link, Methods.get);
};

const requestArticle = (id: string): Promise<IArticle> => {
  const link = `${ARTICLES}/${id}`;
  return http<IArticle, Imethod, null>(link, Methods.get);
};

const requestNewUser = async (newUser: IUser): Promise<any> => {
  const link = USERS;
  const user = serviceUserFabric(newUser);
  const response = await http<any, Imethod, INewUser>(link, Methods.post, user);
  setCookie(response.token);
  return response;
};

export { requestArticleList, requestArticle, requestNewUser };
