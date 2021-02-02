/* eslint-disable */
import { Dispatch } from 'redux';
// types defs:
import { Thunk, IUserArticleState, IUserArticlesActionsTypes } from '../../types/redux/index.d';
import { ICreateNewArticle } from '../../types/service/index.d';
// actions:
import { createNewArticleAction, newArticleErrorAction, newArticleLoadAction } from '../actions/newArticleActions';
// service:
import { createArticle, requestArticle, editArticle } from '../../service/api';

type UserThunk = Thunk<IUserArticlesActionsTypes, IUserArticleState>;
type UserDispatch = Dispatch<IUserArticlesActionsTypes>;

export const createArticleThunk: UserThunk = (data: ICreateNewArticle, tagList: string[], token: string) => (
  dispatch: UserDispatch
) => {
  dispatch(newArticleLoadAction(true));
  return createArticle({ ...data, tagList }, token).catch((error) => dispatch(newArticleErrorAction(error)));
};

export const initUserArticleStateThunk: UserThunk = (id: string) => (dispatch: UserDispatch) => {
  dispatch(newArticleLoadAction(true));
  return requestArticle(id)
    .then((response) => {
      const { article } = response;
      dispatch(createNewArticleAction({ ...article }));
    })
    .catch((error) => dispatch(newArticleErrorAction(error)));
};

export const updateUserArticleThunk: UserThunk = (data: Partial<ICreateNewArticle>, token: string, id: string) => (
  dispatch: UserDispatch
) => {
  dispatch(newArticleLoadAction(true));
  return editArticle(data, token, id).catch((error) => dispatch(newArticleErrorAction(error)));
};
