import {
  IArticleList,
  IArticlesEmptyAction,
  IArticlesErrorAction,
  IArticlesLoadAction,
  IGetArticlesAction,
  ISetFavoriteAction,
  IDeleteArticleAction,
} from '../../types/redux/index.d';

import { EArticleActions, EUserActions } from '../constants';

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

export const articlesEmptyListAction = (): IArticlesEmptyAction => ({
  type: EArticleActions.emptyListState,
});

export const setFavoriteAction = (payload: { favorite: boolean; favCount: number; id: string }): ISetFavoriteAction => ({
  type: EArticleActions.setFavorite,
  payload,
});

export const deleteArticleAction = (payload: string): IDeleteArticleAction => ({
  type: EUserActions.deleteArticle,
  payload,
});
