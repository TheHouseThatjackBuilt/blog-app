import {
  IArticleList,
  IArticle,
  IError,
  EActions,
  ArticleActions,
} from '../../types/index.d';

const requestListAction = (payload: IArticleList): ArticleActions => ({
  type: EActions.getArticlesList,
  payload,
});

const requestArticleAction = (payload: IArticle): ArticleActions => ({
  type: EActions.getArticle,
  payload,
});

const requestErrorHandler = (payload: IError): ArticleActions => ({
  type: EActions.hasError,
  payload,
});

export { requestListAction, requestArticleAction, requestErrorHandler };
