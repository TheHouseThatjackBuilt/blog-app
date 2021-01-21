import { ArticleActionsForReduce, IError, ArticleActions } from './actions.d';
import {
  IAutorArticle,
  IArticle,
  IArticleList,
  INewUser,
  IUser,
  IUserError,
} from './response.d';

import { IArticleState, IErrorState, IState } from './store.d';
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
  INewUser,
  IUser,
  IUserError,
};
