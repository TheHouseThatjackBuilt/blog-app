import {
  ArticleActionsForReduce,
  IError,
  ArticleActions,
} from './redux/actions.d';

import { IAutorArticle, IArticle, IArticleList } from './redux/response.d';
import { IArticleState, IErrorState, IState } from './redux/store.d';
import { ThunkActionType, DispatchType } from './redux/thunk.d';

import EActions from '../redux/constants';

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
};
