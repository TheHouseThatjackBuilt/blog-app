/* eslint-disable */
import { IUserArticleState, IUserArticlesActionsTypes } from '../../types/redux/index.d';
import { EUserArticles } from '../constants';

const init: IUserArticleState = {
  article: null,
  errors: null,
  load: false,
};

export const userArticleState = (state = init, action: IUserArticlesActionsTypes): IUserArticleState => {
  switch (action.type) {
    case EUserArticles.newArticle:
      return { errors: null, load: false, article: action.payload };
    case EUserArticles.dataError:
      return { ...state, errors: action.payload };
    case EUserArticles.dataLoad:
      return { ...state, load: action.payload };
    default:
      return state;
  }
};
