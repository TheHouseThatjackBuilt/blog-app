/* eslint-disable */
import { Dispatch } from 'redux';
// types defs:
import { Thunk, IUserArticleState, IUserArticlesActionsTypes } from '../../types/redux/index.d';
import { ICreateNewArticle } from '../../types/service/index.d';
// actions:
import { createNewArticleAction, newArticleErrorAction, newArticleLoadAction } from '../actions/newArticleActions';
// service:
import { createArticle } from '../../service/api';

export const getArticleThunk: Thunk<IUserArticlesActionsTypes, IUserArticleState> = (data: ICreateNewArticle, token: string) => (
  dispatch: Dispatch<IUserArticlesActionsTypes>
) => {
  dispatch(newArticleLoadAction(true));
  return createArticle(data, token)
    .then((response) => dispatch(createNewArticleAction(response)))
    .catch((error) => dispatch(newArticleErrorAction(error)));
};
