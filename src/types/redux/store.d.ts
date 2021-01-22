import { IArticle, IArticleList, IResponseUser } from './index.d';

export interface IArticleState extends IArticleList {
  currentArticle: null | IArticle;
}

export interface IErrorState {
  error: any;
}

export interface IUserState {
  user: Pick<IResponseUser, 'username' | 'image'> | null;
}

export interface IState {
  articleState: IArticleState;
  errorState: IErrorState;
  userState: IUserState;
}
