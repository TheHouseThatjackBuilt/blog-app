import { IArticle, IArticleList, IResponseUser } from './index.d';
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

export interface ISetUser {
  type: typeof EActions.newUser;
  payload: Pick<IResponseUser, 'username' | 'image'>;
}

export interface ICurrentUser {
  type: typeof EActions.currentUser;
  payload: Pick<IResponseUser, 'username' | 'image'>;
}

export type ArticleActions = IGetArticleList | IGetArticle | IError;
export type ArticleActionsForReduce = IGetArticleList | IGetArticle;
export type UserActionsForReduce = ISetUser | ICurrentUser;
