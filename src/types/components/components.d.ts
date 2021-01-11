import { IArticle } from '../redux/index.d';

export interface IArticleList {
  articles: IArticle[];
}

export interface IPaginator {
  totalPages: number;
  handler: Function;
  currentPage: number;
}

export interface IArticleTags {
  tag: string;
}

export interface ISingleArticle {
  article: IArticle | null;
  load: boolean;
}

export interface IParams {
  slug: string;
}

// export type IArticleConstructor = IArticle;
export interface IArticleConstructor {
  article: IArticle;
}
