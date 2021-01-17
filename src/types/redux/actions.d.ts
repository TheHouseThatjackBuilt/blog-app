import { IArticle, IArticleList } from './index.d';
import { EActions } from '../../redux/constants';

interface IGetArticleList {
  type: typeof EActions.getArticlesList;
  payload: IArticleList;
}

interface IGetArticle {
  type: typeof EActions.getArticle;
  payload: IArticle;
}

interface IError {
  type: typeof EActions.hasError;
  payload: any;
}

export type ArticleActions = IGetArticleList | IGetArticle | IError;
export type ArticleActionsForReduce = IGetArticleList | IGetArticle;
