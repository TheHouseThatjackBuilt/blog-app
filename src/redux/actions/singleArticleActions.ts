/* eslint-disable*/
import {
  ISingleArticleErrorAction,
  ISingleArticleLoadAction,
  IGetSingleArticleAction,
  IArticle,
} from '../../types/redux/index.d';
import { ESingleArticle } from '../constants';

export const getArticleAction = (payload: IArticle): IGetSingleArticleAction => ({ type: ESingleArticle.getArticle, payload });

export const aticleLoadAction = (payload: boolean): ISingleArticleLoadAction => ({ type: ESingleArticle.articleLoad, payload });

export const articleErrorAction = (payload: any): ISingleArticleErrorAction => ({ type: ESingleArticle.dataError, payload });
