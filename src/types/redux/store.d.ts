import { IArticle, IArticleList } from './index.d';
import { ISetUser } from '../components/index.d';

export interface IArticleState extends IArticleList {
  currentArticle: null | IArticle;
}

export interface IErrorState {
  error: any;
}

export interface IUserState {
  user: null | ISetUser;
}

export interface IState {
  articleState: IArticleState;
  errorState: IErrorState;
  userState: IUserState;
}
