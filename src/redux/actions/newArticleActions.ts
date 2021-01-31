import {
  IArticle,
  ICreateNewArticleAction,
  INewArticleErrorAction,
  INewArticleLoadAction,
  IAddArticleTagsAction,
  IDelArticleTagsAction,
  ISetArticleTagsAction,
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
export const articleAddTagAction = (payload: string): IAddArticleTagsAction => ({ type: EUserArticles.pushTag, payload });
export const articleDelTagAction = (payload: string): IDelArticleTagsAction => ({ type: EUserArticles.deleteTag, payload });
