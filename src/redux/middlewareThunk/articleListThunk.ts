import { Dispatch } from 'redux';
// types def:
import { Thunk, IArticleListActionsTypes, IArticlesListState } from '../../types/redux/index.d';
// actions:
import {
  articlesListAction,
  articlesLoadAction,
  articlesErrorAction,
  setFavoriteAction,
  deleteArticleAction,
} from '../actions/ArticlesListActions';
// service:
import {
  requestArticleList,
  requestUserArticleList,
  deleteFavoriteArticle,
  setFavoriteArticle,
  deleteArticle,
} from '../../service';

type UserThunkType = Thunk<IArticleListActionsTypes, IArticlesListState>;
type UserDispatch = Dispatch<IArticleListActionsTypes>;

export const getArticleListThunk: UserThunkType = (data: number, token?: string | undefined) => (dispatch: UserDispatch) => {
  dispatch(articlesLoadAction(true));
  const page = (data - 1) * 10;
  return requestArticleList(page, token)
    .then(response => dispatch(articlesListAction(response)))
    .catch(error => dispatch(articlesErrorAction(error)));
};

export const getArticleListByAuthorThunk: UserThunkType = (page: number, author: string, token: string) => (
  dispatch: UserDispatch
) => {
  dispatch(articlesLoadAction(true));
  return requestUserArticleList(page, author, token)
    .then(response => dispatch(articlesListAction(response)))
    .catch(error => dispatch(articlesErrorAction(error)));
};

export const setFavoriteStatusThunk: UserThunkType = (id: string, token: string, favorite: boolean, favCounter: number) => (
  dispatch: UserDispatch
) => {
  const counter = favorite ? favCounter + 1 : favCounter - 1;
  dispatch(setFavoriteAction({ favorite, favCount: counter, id }));
  if (favorite) return setFavoriteArticle(id, token);
  return deleteFavoriteArticle(id, token);
};

export const deleteArticleThunk = (id: string, token: string) => (dispatch: UserDispatch) => {
  dispatch(deleteArticleAction(id));
  return deleteArticle(id, token);
};
