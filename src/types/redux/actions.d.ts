import {
  REQUEST_ARTICLE_LIST,
  REQUEST_ARTICLE,
  ERROR_HANDLER,
} from '../../redux/constants';

import { IArticle, IArticleList } from './response.d';

interface IGetArticleList {
  type: typeof REQUEST_ARTICLE_LIST;
  payload: IArticleList;
}

interface IGetArticle {
  type: typeof REQUEST_ARTICLE;
  payload: IArticle;
}

export interface IError {
  type: typeof ERROR_HANDLER;
  payload: any;
}

export type PromiseType = string | number;
export type ArticleActionsForReduce = IGetArticleList | IGetArticle;
export type ArticleActions = IGetArticleList | IGetArticle | IError;

export type RequestActions =
  | typeof REQUEST_ARTICLE_LIST
  | typeof REQUEST_ARTICLE
  | typeof ERROR_HANDLER;
