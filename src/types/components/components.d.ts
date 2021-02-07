import { ChangeEvent, MouseEvent } from 'react';
import { Ref, DeepMap, FieldError } from 'react-hook-form';
import { ISetArticleTagsAction } from '../redux/index.d';
import { ISetUser, IHandleArticleData } from './index.d';

export interface IPaginator {
  totalPages: number;
  handler: Function;
  currentPage: number;
}

export interface IArticleConstructor {
  article: IHandleArticleData;
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
  onSubmit: () => void;
  load?: boolean;
}

export interface ICreateArticle extends IForm {
  tags: string[];
  setTags: (value: string[]) => ISetArticleTagsAction;
}

export interface IUserArticleTagsContainer {
  tags: string[];
  setTags: (value: string[]) => ISetArticleTagsAction;
}

export interface IFormUserArticle {
  inputRef: typeof Ref;
  errors: DeepMap<IUserArticle, FieldError>;
  onSubmit: () => void;
  load?: boolean;
}

export interface IHeader {
  user: ISetUser | null;
  load: boolean;
  logOut: () => void;
}

export interface IUserHeader {
  user: ISetUser;
  logOut: any;
}

interface IEditInputHandlers {
  editInputValue: string;
  editInputIndex: number;
  handleEditInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  handleEditInputConfirm: () => void;
}

interface IInputHandlers {
  inputValue: string;
  handleInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  handleInputConfirm: () => void;
}

export interface IUserArticleTags {
  getArgsFromTag: (evt: MouseEvent<HTMLSpanElement>, index: number, tag: string) => void;
  handleClose: (tag: string) => void;
  showInput: () => void;
  editInputHandlers: IEditInputHandlers;
  inputHandlers: IInputHandlers;
  tags: string[];
  inputVisible: boolean;
}

export interface IUserArticle {
  title: string;
  description: string;
  body: string;
}
