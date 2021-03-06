import {
  IArticle,
  ICreateNewArticleAction,
  IEmptyTheStateAction,
  INewArticleErrorAction,
  INewArticleLoadAction,
  ISetArticleTagsAction,
  IArticleGuardAction,
} from '../../types/redux/index.d';
import { EUserArticles } from '../constants';

export const createNewArticleAction = (payload: IArticle): ICreateNewArticleAction => ({
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

export const articleSetTagsAction = (payload: string[]): ISetArticleTagsAction => ({ type: EUserArticles.setTags, payload });

export const emptyTheStateAction = (): IEmptyTheStateAction => ({ type: EUserArticles.emptyTheState });

export const articleGuardAction = (): IArticleGuardAction => ({ type: EUserArticles.articleGuard });
