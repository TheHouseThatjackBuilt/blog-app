import omit from 'lodash.omit';

import { formatedDate } from './utils';
import { IArticle, IResponseUser } from '../types/redux/index.d';
import { IHandleArticleData } from '../types/components/index.d';
import { IOptions } from '../types/service/index.d';

export const serviceDataWrapper = <T>(data: T, wrapper: string) => ({ [wrapper]: { ...data } });
export const handlerEmptyData = <T>(data: T) => Object.fromEntries(Object.entries(data).filter(([, value]) => value !== ''));
export const handlerUserData = (user: IResponseUser, exclude: string[]) => omit(user, exclude);

export const errorDataFabric = <T>(data: T): Map<keyof T, string> =>
  Object.entries(data).reduce((acc, [name, value]) => acc.set(name, value.toString()), new Map());

export const serviceHttpFabric = <M extends string>(method: M, options?: IOptions) => {
  const defaultParams = { 'content-type': 'application/json; charset=utf-8' };
  return {
    method,
    headers: options?.headers ? { ...defaultParams, ...options.headers } : defaultParams,
    body: options?.body && JSON.stringify(options.body),
  };
};

export const articlePreviewDataFabric = (data: IArticle, user: string | null): IHandleArticleData => {
  const {
    author: { image, username },
    body,
    createdAt,
    description,
    favorited,
    favoritesCount,
    slug,
    tagList,
    title,
  } = data;

  const owner = user === username;
  const date = formatedDate(new Date(createdAt), 'MMMMd,y');
  return {
    header: {
      author: { image, username },
      date,
      slug,
      tagList,
      favorited,
      favoritesCount,
      title,
      owner,
      description,
    },
    body,
  };
};
