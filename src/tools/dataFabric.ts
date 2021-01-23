import { formatedDate } from './utils';

import { IArticle } from '../types/redux/index.d';
import { IHandleArticleData } from '../types/components/index.d';
import { IOptions } from '../types/service/index.d';

export const articlePreviewDataFabric = (data: IArticle): IHandleArticleData => {
  const {
    author: { image, username },
    body,
    createdAt,
    description,
    favoritesCount,
    slug,
    tagList,
    title,
  } = data;

  const date = formatedDate(new Date(createdAt), 'MMMMd,y');
  return {
    header: {
      author: { image, username },
      date,
      slug,
      tagList,
      favoritesCount,
      title,
    },
    body: { body, description },
  };
};

export const serviceHttpFabric = <M extends string>(method: M, options?: IOptions) => ({
  method,
  headers: { 'content-type': 'application/json; charset=utf-8', ...options?.headers },
  body: JSON.stringify(options?.body),
});

export const serviceUserFabric = <T>(newUser: T) => ({ user: { ...newUser } });

export const errorDataFabric = <T>(data: T): Map<keyof T, string> =>
  Object.entries(data).reduce((acc, [name, value]) => acc.set(name, value.join()), new Map());
