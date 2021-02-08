/* eslint-disable */
import { IUserArticleState, IUserArticlesActionsTypes } from '../../types/redux/index.d';
import { EUserArticles } from '../constants';

const init: IUserArticleState = {
  article: null,
  errors: null,
  load: false,
  owner: true,
  userTags: [],
};

export const userArticleState = (state = init, action: IUserArticlesActionsTypes): IUserArticleState => {
  switch (action.type) {
    case EUserArticles.emptyTheState:
      return { article: null, load: false, owner: true, errors: null, userTags: [] };
    case EUserArticles.newArticle:
      return { ...state, errors: null, load: false, article: action.payload };
    case EUserArticles.dataError:
      return { ...state, load: false, errors: action.payload };
    case EUserArticles.articleGuard:
      return { ...state, load: false, owner: false };
    case EUserArticles.setTags:
      return { ...state, userTags: action.payload };
    case EUserArticles.dataLoad:
      return { ...state, load: action.payload };

    default:
      return state;
  }
};
