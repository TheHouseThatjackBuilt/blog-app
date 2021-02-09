/* eslint-disable no-case-declarations */
/* eslint-disable no-confusing-arrow  */
/* eslint-disable function-paren-newline */
import { ISingleArticleActionsTypes, ISingleArticleState } from '../../types/redux/index.d';
import { ESingleArticle, EArticleActions, EUserActions } from '../constants';

const init: ISingleArticleState = {
  article: null,
  errors: null,
  load: false,
};

export const singleArtileState = (state = init, action: ISingleArticleActionsTypes): ISingleArticleState => {
  switch (action.type) {
    case ESingleArticle.getArticle:
      return { errors: null, load: false, article: action.payload };
    case ESingleArticle.dataError:
      return { ...state, errors: action.payload };
    case ESingleArticle.articleLoad:
      return { ...state, load: action.payload };
    case EUserActions.deleteArticle:
      return { ...state, article: state.article?.slug === action.payload ? null : state.article };
    case EArticleActions.setFavorite:
      const { favCount, favorite, id } = action.payload;
      const { article } = state;
      return {
        ...state,
        article: article?.slug === id ? { ...article, favorited: favorite, favoritesCount: favCount } : article,
      };
    default:
      return state;
  }
};
