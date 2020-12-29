import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
  REQUEST_ARTICLE_LIST,
  REQUEST_ARTICLE,
  ERROR_HANDLER,
} from '../constants';

import { ArticleActions, IArticleList } from '../../types/types';
import { requestArticleList, requestArticle } from '../../service/RealWorldAPI';

const getArticleList: ActionCreator<
  ThunkAction<Promise<Action>, IArticleList, null, ArticleActions>
> = (offsetPage: number) => (
  dispatch: Dispatch<ArticleActions>,
): Promise<Action> => requestArticleList(offsetPage)
  .then((response) => dispatch({ type: REQUEST_ARTICLE_LIST, payload: response }))
  .catch((error) => dispatch({ type: ERROR_HANDLER, payload: error }));

const getArticle: ActionCreator<
  ThunkAction<Promise<Action>, IArticleList, null, ArticleActions>
> = (id: string) => (dispatch: Dispatch<ArticleActions>): Promise<Action> => requestArticle(id)
  .then((response) => dispatch({ type: REQUEST_ARTICLE, payload: response }))
  .catch((error) => dispatch({ type: ERROR_HANDLER, payload: error }));

export { getArticleList, getArticle };
