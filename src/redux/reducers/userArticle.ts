/* eslint-disable */
import { IUserArticleState, IUserArticlesActionsTypes } from '../../types/redux/index.d';
import { EUserArticles } from '../constants';

const init: IUserArticleState = {
  article: null,
  errors: null,
  load: false,
  userTags: [],
};

export const userArticleState = (state = init, action: IUserArticlesActionsTypes): IUserArticleState => {
  switch (action.type) {
    case EUserArticles.newArticle:
      return { ...state, errors: null, load: false, article: action.payload };
    case EUserArticles.dataError:
      return { ...state, load: false, errors: action.payload };
    case EUserArticles.dataLoad:
      return { ...state, load: action.payload };
    case EUserArticles.setTags:
      return { ...state, userTags: action.payload };
    case EUserArticles.deleteTag:
      return { ...state, userTags: state.userTags.filter((key) => key !== action.payload) };
    case EUserArticles.pushTag:
      return { ...state, userTags: [...state.userTags, action.payload] };
    default:
      return state;
  }
};
