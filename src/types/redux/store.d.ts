import { IArticle, IArticleList, IResponseUser } from './index.d';

export interface IArticlesListState {
  articlesList: IArticle[] | null;
  articlesCount: number;
  load: boolean;
  error: any;
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

export interface IState {
  articlesState: IArticleList;
  singleArtileState: ISingleArticleState;
  userState: IUserState;
}
