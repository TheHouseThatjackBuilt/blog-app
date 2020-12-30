import { IArticle, IArticleList } from '../index.d';

export interface IArticleState extends IArticleList {
  currentArticle: null | IArticle;
}

export interface IErrorState {
  error: any;
}

export interface IState {
  articleState: IArticleState;
  error: IErrorState;
}
