import {
  IArticlesErrorAction,
  IArticlesLoadAction,
  IGetArticlesAction,
  IArticleListActionsTypes,
  IGetSingleArticleAction,
  ISingleArticleLoadAction,
  ISingleArticleErrorAction,
  ISingleArticleActionsTypes,
  ICurrentUserAction,
  INewUserErrorAction,
  INewUserLoadAction,
  ISetNewUserAction,
  INewUserActionsTypes,
} from './actions.d';
import { IAutorArticle, IArticle, IArticleList, IUser, IUserError, IResponseUser, IUpdateUser } from './response.d';

import { IArticlesListState, IUserState, ISingleArticleState, IState } from './store.d';
import { Thunk } from './thunk.d';

export {
  // actions types & interfaces:
  // article's list action interfaces:
  IArticlesErrorAction,
  IArticlesLoadAction,
  IGetArticlesAction,
  // union article's list type:
  IArticleListActionsTypes,
  // Single article actions interfaces:
  IGetSingleArticleAction,
  ISingleArticleLoadAction,
  ISingleArticleErrorAction,
  // union sigle article type:
  ISingleArticleActionsTypes,
  // New user actions interfaces:
  ICurrentUserAction,
  INewUserErrorAction,
  INewUserLoadAction,
  ISetNewUserAction,
  // union new user type:
  INewUserActionsTypes,
  // response types & interfaces:
  IAutorArticle,
  IArticle,
  IArticleList,
  IUser,
  IUserError,
  IResponseUser,
  IUpdateUser,
  // store types & interfaces
  IArticlesListState,
  ISingleArticleState,
  IUserState,
  IState,
  // thunk type:
  Thunk,
};
