import { IArticle } from '../index.d';

export interface ListTypes {
  articles: IArticle[];
  articlesCount: number;
  article: IArticle;
  getArticleList: Promise;
  getArticle: Promise;
}
