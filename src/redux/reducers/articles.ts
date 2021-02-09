/* eslint-disable no-case-declarations */
/* eslint-disable no-confusing-arrow  */
/* eslint-disable function-paren-newline */
import { IArticlesListState, IArticleListActionsTypes } from '../../types/redux/index.d';
import { EArticleActions, EUserActions } from '../constants';

const initial: IArticlesListState = {
  articlesList: null,
  articlesCount: 0,
  errors: null,
  load: false,
};

export const articlesListState = (state = initial, action: IArticleListActionsTypes): IArticlesListState => {
  switch (action.type) {
    case EArticleActions.articleLoad:
      return { ...state, load: action.payload };
    case EArticleActions.dataError:
      return { ...state, load: false, errors: action.payload.error };
    case EArticleActions.emptyListState:
      return { ...state, articlesList: null, articlesCount: 0 };
    case EUserActions.deleteArticle:
      return {
        ...state,
        articlesList: state.articlesList?.filter(({ slug }) => slug !== action.payload) || null,
      };
    case EArticleActions.setFavorite:
      const { favCount, favorite, id } = action.payload;
      return {
        ...state,
        articlesList:
          state.articlesList?.map(item =>
            item.slug === id ? { ...item, favorited: favorite, favoritesCount: favCount } : item
          ) || null,
      };
    case EArticleActions.getArticlesList:
      return {
        ...state,
        load: false,
        errors: null,
        articlesList: action.payload.articles,
        articlesCount: action.payload.articlesCount,
      };
    default:
      return state;
  }
};
