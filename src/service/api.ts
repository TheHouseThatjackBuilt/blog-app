/* eslint-disable*/
import { IArticleList, IArticle } from '../types/redux/index.d';
import { Methods } from '../redux/constants';
import { Imethod } from '../types/service/index.d';

export const BASE_URL = 'https://conduit.productionready.io/api/';
export const ARTICLES = 'articles';
export const LIMIT = 'limit';
export const OFFSET = 'offset';

const http = async <T, Imethod extends string, R>(
  url: string,
  method: Imethod,
  body?: R,
): Promise<T> => {
  const link = `${BASE_URL}${url}`;
  const requestHeaders = { 'Content-Type': 'application/json' };
  const requestMethod = method;
  const requestBody = JSON.stringify(body);

  const requestOption = {
    method: requestMethod,
    headers: requestHeaders,
    body: requestBody,
  };

  const response = await fetch(link, requestOption);
  if (!response.ok) throw new Error('something going wrong');
  return response.json();
};

const requestArticleList = async (
  offsetPage: number,
): Promise<IArticleList> => {
  const link = `${ARTICLES}?${LIMIT}=5&${OFFSET}=${offsetPage}`;
  return http<IArticleList, Imethod, null>(link, Methods.get);
};

const requestArticle = async (id: string): Promise<IArticle> => {
  const link = `${ARTICLES}/${id}`;
  return http<IArticle, Imethod, null>(link, Methods.get);
};

// const requestUser = async()

export { requestArticleList, requestArticle };
