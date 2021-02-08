import { IArticle, IResponseUser } from './index.d';

export interface IArticlesListState {
  articlesList: IArticle[] | null;
  articlesCount: number;
  load: boolean;
  errors: any;
}

export interface ISingleArticleState {
  article: IArticle | null;
  load: boolean;
  errors: any;
}

export interface IUserState {
  user: IResponseUser | null;
  load: boolean;
  errors: any;
}

export interface IUserArticleState {
  article: IArticle | null;
  load: boolean;
  errors: any;
  owner: boolean;
  userTags: string[];
}

export interface IState {
  articlesListState: IArticlesListState;
  singleArtileState: ISingleArticleState;
  userState: IUserState;
  userArticleState: IUserArticleState;
}
