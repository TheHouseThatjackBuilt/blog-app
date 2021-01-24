export interface IAutorArticle {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
}

export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: IAutorArticle;
}

export interface IArticleList {
  articles: IArticle[] | null;
  articlesCount: number;
}

export interface IError {
  response: any;
}

export interface IUser {
  username: string;
  email: string;
  password: string;
}

export interface IUpdateUser {
  email?: string;
  bio?: string;
  image?: string;
  username?: string;
  password?: string;
}

export interface IUserError {
  username?: string[];
  email?: string[];
  password?: string[];
}

export interface IResponseUser {
  bio: null;
  createdAt: string;
  email: string;
  id: number;
  image: string | null;
  token: string;
  updatedAt: string;
  username: string;
}
