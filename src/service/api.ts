import { IArticleList, IArticle, IUser } from '../types/redux/index.d';

import { serviceHttpFabric, serviceUserFabric } from '../tools/dataFabric';
import { Methods } from '../redux/constants';
import { Imethod, IOptions } from '../types/service/index.d';

const BASE_URL = 'https://conduit.productionready.io/api/';
const ARTICLES = 'articles';
const LIMIT = 'limit';
const OFFSET = 'offset';
const USERS = 'users';
const USER = 'user';

const http = async <T, M extends string>(url: string, method: M, options?: IOptions): Promise<T> => {
  const link = new URL(url, BASE_URL);
  const requestOption = serviceHttpFabric<M>(method, options);
  const response = await fetch(link.toString(), requestOption);

  if (!response.ok) throw new Error('god damn guys, god damn.') && (await response.json()); // O_o
  return response.json();
};

const requestArticleList = (offsetPage: number): Promise<IArticleList> => {
  const link = `${ARTICLES}?${LIMIT}=5&${OFFSET}=${offsetPage}`;
  return http<IArticleList, Imethod>(link, Methods.get);
};

const requestArticle = (id: string): Promise<IArticle> => {
  const link = `${ARTICLES}/${id}`;
  return http<IArticle, Imethod>(link, Methods.get);
};

const requestNewUser = async (newUser: IUser): Promise<any> => {
  const link = USERS;
  const user = serviceUserFabric(newUser);
  const options = { body: user };
  const response = await http<any, Imethod>(link, Methods.post, options);
  return response;
};

const requestCurrentUser = async () => {
  const link = USER;
  // const aasd = document.cookie;
  // const options = { headers: { withCredentials: true } };
  const response = await http<any, Imethod>(link, Methods.get);
  return response;
};

export { requestArticleList, requestArticle, requestNewUser, requestCurrentUser };
