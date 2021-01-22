import { ArticleActionsForReduce, IError, ArticleActions, ISetUser } from './actions.d';
import { IAutorArticle, IArticle, IArticleList, IUser, IUserError, IResponseUser } from './response.d';

import { IArticleState, IErrorState, IState, IUserState } from './store.d';
import { ThunkActionType, DispatchType } from './thunk.d';
import { EActions } from '../../redux/constants';

export {
  ArticleActionsForReduce,
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
  ISetUser,
};
