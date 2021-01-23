import { Ref, DeepMap, FieldError } from 'react-hook-form';
import { IArticle } from '../redux/index.d';
import { IArticleBody, ISetUser } from './index.d';

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
  flag: boolean;
}

export interface IArticleBodyContainer {
  article: IArticleBody;
  flag: boolean;
}

export interface IFormInput {
  label: string;
  name: string;
  type: string;
  error: boolean;
  helperText: string | undefined;
}

export interface IFormCheckbox {
  label: string;
}

export interface IForm {
  inputRef: typeof Ref;
  errors: DeepMap<Record<string, any>, FieldError>;
}

export interface IForm2 {
  inputRef: typeof Ref;
  errors: DeepMap<Record<string, any>, FieldError>;
  onSubmit: any;
  load: boolean;
}

export interface IHeader {
  user: ISetUser | null;
  load: boolean;
  logOut: Function;
}

export interface IUserHeader {
  user: ISetUser;
  logOut: any;
}
