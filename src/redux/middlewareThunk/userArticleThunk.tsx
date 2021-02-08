/* eslint-disable consistent-return */
import { Dispatch } from 'redux';
// types defs:
import { Thunk, IUserArticleState, IUserArticlesActionsTypes } from '../../types/redux/index.d';
import { ICreateNewArticle } from '../../types/service/index.d';
// actions:
import {
  createNewArticleAction,
  newArticleErrorAction,
  newArticleLoadAction,
  // articleGuardAction,
} from '../actions/newArticleActions';
// service:
import { createArticle, requestArticle, udpateArticle } from '../../service';

type UserThunk = Thunk<IUserArticlesActionsTypes, IUserArticleState>;
type UserDispatch = Dispatch<IUserArticlesActionsTypes>;

export const createArticleThunk: UserThunk = (data: ICreateNewArticle, tagList: string[], token: string) => (
  dispatch: UserDispatch
) => {
  dispatch(newArticleLoadAction(true));
  return createArticle({ ...data, tagList }, token).catch((error) => dispatch(newArticleErrorAction(error)));
};

export const initUserArticleStateThunk: UserThunk = (id: string, owner: string) => (dispatch: UserDispatch) => {
  dispatch(newArticleLoadAction(true));

  return requestArticle(id)
    .then((response) => {
      const { article } = response;
      if (article.author.username === owner) dispatch(createNewArticleAction({ ...article }));
      else throw new Error('401 error, access denied');
    })
    .catch((error) => dispatch(newArticleErrorAction(error)));
};

export const updateUserArticleThunk: UserThunk = (
  data: Partial<ICreateNewArticle>,
  tagList: string[],
  token: string,
  id: string
) => (dispatch: UserDispatch) => {
  dispatch(newArticleLoadAction(true));
  return udpateArticle({ ...data, tagList }, token, id).catch((error) => dispatch(newArticleErrorAction(error)));
};
