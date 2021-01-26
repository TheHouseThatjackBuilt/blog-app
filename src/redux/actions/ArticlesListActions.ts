/* eslint-disable*/
import { IArticleList, IArticlesErrorAction, IArticlesLoadAction, IGetArticlesAction } from '../../types/redux/index.d';
import { EArticleActions } from '../constants';

export const articlesListAction = (payload: IArticleList): IGetArticlesAction => ({
  type: EArticleActions.getArticlesList,
  payload,
});

export const articlesLoadAction = (payload: boolean): IArticlesLoadAction => ({
  type: EArticleActions.articleLoad,
  payload,
});

export const articlesErrorAction = (payload: any): IArticlesErrorAction => ({
  type: EArticleActions.dataError,
  payload,
});
