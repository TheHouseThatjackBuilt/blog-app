import { IResponseUser } from '../redux/index.d';

export interface IUser {
  image: string;
  username: string;
}

export interface IArticleHeader {
  author: IUser;
  owner: boolean;
  date: string;
  slug: string;
  tagList: string[];
  favoritesCount: number;
  title: string;
  description: string;
}

export interface IHandleArticleData {
  header: IArticleHeader;
  body: string;
}
export type ISetUser = Omit<IResponseUser, 'createdAt' | 'updatedAt' | 'id' | 'bio'>; // под вопросом
