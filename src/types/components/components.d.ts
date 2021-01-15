import { Ref } from 'react-hook-form';
import { IArticle } from '../redux/index.d';
import { IArticleBody } from './index.d';

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
}

export interface IFormCheckbox {
  label: string;
}

export interface IForm {
  inputRef: typeof Ref;
}
