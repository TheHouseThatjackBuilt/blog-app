import { IArticle, IArticleList, IResponseUser } from './index.d';
import { EArticleActions, EUserActions, ESingleArticle } from '../../redux/constants';

// articles list actions:
export interface IGetArticlesAction {
  type: typeof EArticleActions.getArticlesList;
  payload: IArticleList;
}

export interface IArticlesLoadAction {
  type: typeof EArticleActions.articleLoad;
  payload: boolean;
}

export interface IArticlesErrorAction {
  type: typeof EArticleActions.dataError;
  payload: any;
}

// single article actions:
export interface IGetSingleArticleAction {
  type: typeof ESingleArticle.getArticle;
  payload: IArticle;
}

export interface ISingleArticleLoadAction {
  type: typeof ESingleArticle.articleLoad;
  payload: boolean;
}

export interface ISingleArticleErrorAction {
  type: typeof ESingleArticle.dataError;
  payload: any;
}

// user actions:
export interface ISetNewUserAction {
  type: typeof EUserActions.newUser;
  payload: IResponseUser | null;
}

export interface INewUserLoadAction {
  type: typeof EUserActions.userLoad;
  payload: boolean;
}

export interface INewUserErrorAction {
  type: typeof EUserActions.userError;
  payload: any;
}

export type INewUserActionsTypes = ISetNewUserAction | INewUserLoadAction | INewUserErrorAction;
export type ISingleArticleActionsTypes = IGetSingleArticleAction | ISingleArticleLoadAction | ISingleArticleErrorAction;
export type IArticleListActionsTypes = IGetArticlesAction | IArticlesErrorAction | IArticlesLoadAction;
