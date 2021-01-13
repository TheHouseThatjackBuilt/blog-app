import { IArticle } from '../redux/index.d';

export interface IArticleList {
  articles: IArticle[] | null;
  load: boolean;
  totalPages: number;
  page: number;
  pageHandler: Function;
}

export interface IPaginator {
  totalPages: number;
  handler: Function;
  currentPage: number;
}

export interface IArticleTags {
  tag: string;
}

export interface IArticleContainer {
  article: IArticle | null;
  load: boolean;
}

export interface IParams {
  slug: string;
}

export interface IArticleConstructor {
  article: IArticle;
}
