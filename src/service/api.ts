// types & constants:
import { IArticleList, IArticle, IUser, IUpdateUser, IUserError, IResponseUser } from '../types/redux/index.d';
import { ARTICLES, BASE_URL, LIMIT, LOGIN, OFFSET, USER, USERS } from './constants';
import { ICreateNewArticle } from '../types/service/index.d';
import { Methods } from '../redux/constants';
// fabrics & custom error:
import { serviceHttpFabric, serviceDataWrapper } from '../tools/dataFabric';
import { ResponseApiError } from './ResponseApiError';

const http = async <T>(url: string, options: any): Promise<T> => {
  const link = new URL(url, BASE_URL);
  const response = await fetch(link.toString(), options);

  if (response.status === 422) throw new ResponseApiError<IUserError>(await response.json());
  if (!response.ok) throw new Error('some unexpected error');
  return response.json();
};
// articles block */
export const requestArticleList = (offsetPage: number) => {
  const options = serviceHttpFabric(Methods.get);
  return http<IArticleList>(`${ARTICLES}?${LIMIT}=5&${OFFSET}=${offsetPage}`, options);
};

export const requestArticle = (id: string) => {
  const options = serviceHttpFabric(Methods.get);
  return http<{ article: IArticle }>(`${ARTICLES}/${id}`, options);
};

export const createArticle = (data: ICreateNewArticle, token: string) => {
  const article = serviceDataWrapper(data, 'article');
  const options = serviceHttpFabric(Methods.post, { headers: { Authorization: `Token ${token}` }, body: article });
  return http<{ article: IArticle }>(ARTICLES, options);
};
// user block */
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
