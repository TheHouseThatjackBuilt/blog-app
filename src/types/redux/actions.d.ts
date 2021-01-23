import { IArticle, IArticleList } from './index.d';
import { ISetUser } from '../components/index.d';
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

export interface ISetUserAction {
  type: typeof EActions.newUser;
  payload: ISetUser | null;
}

export interface ICurrentUserAction {
  type: typeof EActions.currentUser;
  payload: ISetUser | null;
}

export type ArticleActions = IGetArticleList | IGetArticle | IError;
export type ArticleActionsForReduce = IGetArticleList | IGetArticle;
export type UserActionsForReduce = ISetUserAction | ICurrentUserAction;
