import {
  REQUEST_ARTICLE_LIST,
  REQUEST_ARTICLE,
  ERROR_HANDLER,
} from '../redux/constants';

// interface for typing a response from the server
export interface IAutorArticle {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
}

export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: IAutorArticle;
}

export interface IArticleList {
  articles: IArticle[];
  articlesCount: number;
}

// interface for async actions
interface IGetArticleList {
  type: typeof REQUEST_ARTICLE_LIST;
  payload: IArticleList;
}

interface IGetArticle {
  type: typeof REQUEST_ARTICLE;
  payload: IArticle;
}

export interface IError {
  type: typeof ERROR_HANDLER;
  payload: any;
}

export type PromiseType = string | number;
export type ArticleActionsForReduce = IGetArticleList | IGetArticle;
export type ArticleActions = IGetArticleList | IGetArticle | IError;

export type RequestActions =
  | typeof REQUEST_ARTICLE_LIST
  | typeof REQUEST_ARTICLE
  | typeof ERROR_HANDLER;

export interface IArticleState extends IArticleList {
  currentArticle: null | IArticle;
}

export interface IState {
  articleState: IArticleState;
}
