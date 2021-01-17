import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type ThunkActionType<T, S> = ActionCreator<
  ThunkAction<Promise<Action>, S, null, T>
>;

export type DispatchType<T> = Dispatch<T>;

// export type ThunkActionType = ActionCreator<
//   ThunkAction<Promise<Action>, IArticleState, null, ArticleActions>
// >;

// export type DispatchType = Dispatch<ArticleActions>;
