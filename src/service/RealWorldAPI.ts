// URL constants
import { IArticleList, IArticle } from '../redux/types';

export const BASE_URL = 'https://conduit.productionready.io/api/';
export const ARTICLES = 'articles';
export const LIMIT = 'limit';
export const OFFSET = 'offset';

const http = async <T>(params: string): Promise<T> => {
  const response = await fetch(`${BASE_URL}${params}`);
  if (!response.ok) throw new Error('something going wrong');
  return response.json();
};

const requestArticleList = async (
  offsetPage: number,
): Promise<IArticleList> => {
  const link = `${ARTICLES}?${LIMIT}=10&${OFFSET}=${offsetPage}`;
  return http<IArticleList>(link);
};

const requestArticle = async (id: string): Promise<IArticle> => {
  const link = `${ARTICLES}/${id}`;
  return http<IArticle>(link);
};

export { requestArticleList, requestArticle };
