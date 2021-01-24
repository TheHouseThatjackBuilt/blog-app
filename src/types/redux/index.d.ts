import { ArticleActionsForReduce, IError, ArticleActions, UserActionsForReduce } from './actions.d';
import { IAutorArticle, IArticle, IArticleList, IUser, IUserError, IResponseUser, IUpdateUser } from './response.d';

import { IArticleState, IErrorState, IUserState, IState } from './store.d';
import { ThunkActionType, DispatchType } from './thunk.d';
import { EActions } from '../../redux/constants';

export {
  ArticleActionsForReduce,
  UserActionsForReduce,
  ArticleActions,
  IAutorArticle,
  IArticle,
  IArticleList,
  IArticleState,
  IErrorState,
  IState,
  IError,
  ThunkActionType,
  DispatchType,
  EActions,
  IUser,
  IUserError,
  IResponseUser,
  IUserState,
  IUpdateUser,
};
