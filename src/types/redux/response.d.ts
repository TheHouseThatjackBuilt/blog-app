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

export interface IUserReg {
  user: {
    username: string;
    email: string;
    password: String;
  };
}
