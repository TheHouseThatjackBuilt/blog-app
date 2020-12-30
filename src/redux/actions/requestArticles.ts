import {
  REQUEST_ARTICLE_LIST,
  REQUEST_ARTICLE,
  REQUEST_ERROR_HANDLER,
} from '../constants';

import {
  IArticleList,
  IArticle,
  IError,
  ArticleActions,
} from '../../types/index.d';

const requestListAction = (payload: IArticleList): ArticleActions => ({
  type: REQUEST_ARTICLE_LIST,
  payload,
});

const requestArticleAction = (payload: IArticle): ArticleActions => ({
  type: REQUEST_ARTICLE,
  payload,
});

const requestErrorHandler = (payload: IError): ArticleActions => ({
  type: REQUEST_ERROR_HANDLER,
  payload,
});

export { requestListAction, requestArticleAction, requestErrorHandler };
