import { IArticle, IArticleList } from './response.d';

export interface IArticleState extends IArticleList {
  currentArticle: null | IArticle;
}

export interface IState {
  articleState: IArticleState;
}
