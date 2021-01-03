export interface IUser {
  image: string;
  username: string;
}

export interface IArticleHeader {
  author: IUser;
  date: string;
  slug: string;
  tagList: string[];
  favoritesCount: number;
  title: string;
}

export interface IArticleBody {
  body: string;
  description: string;
}

export interface IHandleArticleData {
  header: IArticleHeader;
  body: IArticleBody;
}
