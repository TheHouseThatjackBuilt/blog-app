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
  articles: IArticle[];
  articlesCount: number;
}

export interface IError {
  response: any;
}
