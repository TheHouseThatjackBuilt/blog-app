// types & constants:
import { IArticleList, IArticle } from '../types/redux/index.d';
import { ARTICLES, LIMIT, OFFSET, FAVORITE } from './constants';
import { ICreateNewArticle } from '../types/service/index.d';
import { Methods } from '../redux/constants';
// fabrics & base http:
import { serviceHttpFabric, serviceDataWrapper } from '../tools/dataFabric';
import { http } from './api';

// articles block:
export const requestArticleList = (offsetPage: number, token?: string) => {
  const options = token
    ? serviceHttpFabric(Methods.get, { headers: { Authorization: `Token ${token}` } })
    : serviceHttpFabric(Methods.get);
  console.log(options);
  return http<IArticleList>(`${ARTICLES}?${LIMIT}=10&${OFFSET}=${offsetPage}`, options);
};

export const requestArticle = (id: string, token?: string) => {
  const options = token
    ? serviceHttpFabric(Methods.get, { headers: { Authorization: `Token ${token}` } })
    : serviceHttpFabric(Methods.get);
  return http<{ article: IArticle }>(`${ARTICLES}/${id}`, options);
};

export const requestUserArticleList = (offsetPage: number, author: string, token: string) => {
  const options = serviceHttpFabric(Methods.get, { headers: { Authorization: `Token ${token}` } });
  return http<IArticleList>(`${ARTICLES}?${LIMIT}=10&${OFFSET}=${offsetPage}&author=${author}`, options);
};
// user actions article block:
export const createArticle = (data: ICreateNewArticle, token: string) => {
  const article = serviceDataWrapper(data, 'article');
  const options = serviceHttpFabric(Methods.post, { headers: { Authorization: `Token ${token}` }, body: article });
  return http<{ article: IArticle }>(ARTICLES, options);
};

export const udpateArticle = (data: Partial<ICreateNewArticle>, token: string, id: string) => {
  const article = serviceDataWrapper(data, 'article');
  const options = serviceHttpFabric(Methods.put, { headers: { Authorization: `Token ${token}` }, body: article });
  return http<{ article: IArticle }>(`${ARTICLES}/${id}`, options);
};

export const deleteArticle = (id: string, token: string) => {
  const options = serviceHttpFabric(Methods.del, { headers: { Authorization: `Token ${token}` } });
  return http<any>(`${ARTICLES}/${id}`, options);
};
// user favorite block:
export const deleteFavoriteArticle = (id: string, token: string) => {
  const options = serviceHttpFabric(Methods.del, { headers: { Authorization: `Token ${token}` } });
  return http<any>(`${ARTICLES}/${id}/${FAVORITE}`, options);
};

export const setFavoriteArticle = (id: string, token: string) => {
  const options = serviceHttpFabric(Methods.post, { headers: { Authorization: `Token ${token}` } });
  return http<any>(`${ARTICLES}/${id}/${FAVORITE}`, options);
};
