import {
  REQUEST_ARTICLE_LIST,
  REQUEST_ARTICLE,
  REQUEST_ERROR_HANDLER,
} from '../../redux/constants';

import { IArticle, IArticleList } from '../index.d';

interface IGetArticleList {
  type: typeof REQUEST_ARTICLE_LIST;
  payload: IArticleList;
}

interface IGetArticle {
  type: typeof REQUEST_ARTICLE;
  payload: IArticle;
}

export interface IError {
  type: typeof REQUEST_ERROR_HANDLER;
  payload: any;
}

// export type PromiseType = string | number;
export type ArticleActionsForReduce = IGetArticleList | IGetArticle;
export type ArticleActions = IGetArticleList | IGetArticle | IError;
