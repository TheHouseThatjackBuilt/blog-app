import { ICreateNewArticle } from '../../types/service/index.d';
import { ICreateNewArticleAction, INewArticleErrorAction, INewArticleLoadAction } from '../../types/redux/index.d';
import { EUserArticles } from '../constants';

export const createNewArticleAction = (payload: ICreateNewArticle): ICreateNewArticleAction => ({
  type: EUserArticles.newArticle,
  payload,
});

export const newArticleLoadAction = (payload: boolean): INewArticleLoadAction => ({
  type: EUserArticles.dataLoad,
  payload,
});

export const newArticleErrorAction = (payload: any): INewArticleErrorAction => ({
  type: EUserArticles.dataError,
  payload,
});
