import { IArticle } from '../redux/index.d';

export interface IArticleList {
  articles: IArticle[];
}

export interface IPaginator {
  totalPages: number;
  handler: Function;
}

export interface IArticleTags {
  tag: string;
}

export type IArticlePreview = IArticle;
