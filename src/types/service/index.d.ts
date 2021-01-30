export type Imethod = 'GET' | 'PUT' | 'POST';

export interface IOptions {
  headers?: object;
  body?: object;
}

export interface IApiError<T> {
  item: { errors: T };
}

export interface ICreateNewArticle {
  title: string;
  description: string;
  body: string;
  tagList?: string[];
}
