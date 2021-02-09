import { IArticle, IArticleList, IResponseUser } from './index.d';
import { EArticleActions, EUserActions, ESingleArticle, EUserArticles } from '../../redux/constants';

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

export interface IArticlesEmptyAction {
  type: typeof EArticleActions.emptyListState;
}

export interface ISetFavoriteAction {
  type: typeof EArticleActions.setFavorite;
  payload: { favorite: boolean; favCount: number; id: string };
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

// new article:
export interface ICreateNewArticleAction {
  type: typeof EUserArticles.newArticle;
  payload: IArticle;
}

export interface INewArticleLoadAction {
  type: typeof EUserArticles.dataLoad;
  payload: boolean;
}

export interface INewArticleErrorAction {
  type: typeof EUserArticles.dataError;
  payload: any;
}

export interface ISetArticleTagsAction {
  type: typeof EUserArticles.setTags;
  payload: string[];
}

export interface IEmptyTheStateAction {
  type: typeof EUserArticles.emptyTheState;
}

export interface IArticleGuardAction {
  type: typeof EUserArticles.articleGuard;
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

export interface IDeleteArticleAction {
  type: typeof EUserActions.deleteArticle;
  payload: string;
}

export type INewUserActionsTypes = ISetNewUserAction | INewUserLoadAction | INewUserErrorAction;

export type ISingleArticleActionsTypes =
  | IGetSingleArticleAction
  | ISingleArticleLoadAction
  | ISingleArticleErrorAction
  | ISetFavoriteAction
  | IDeleteArticleAction;

export type IArticleListActionsTypes =
  | IGetArticlesAction
  | IArticlesErrorAction
  | IArticlesLoadAction
  | IArticlesEmptyAction
  | ISetFavoriteAction
  | IDeleteArticleAction;

export type IUserArticlesActionsTypes =
  | ICreateNewArticleAction
  | INewArticleLoadAction
  | INewArticleErrorAction
  | ISetArticleTagsAction
  | IEmptyTheStateAction
  | IArticleGuardAction;
