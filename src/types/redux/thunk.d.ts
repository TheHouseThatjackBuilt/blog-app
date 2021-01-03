import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ArticleActions, IArticleState } from './index.d';

export type ThunkActionType = ActionCreator<
  ThunkAction<Promise<Action>, IArticleState, null, ArticleActions>
>;

export type DispatchType = Dispatch<ArticleActions>;
