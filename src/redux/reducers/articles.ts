import { IArticlesListState, IArticleListActionsTypes } from '../../types/redux/index.d';
import { EArticleActions } from '../constants';

const initial: IArticlesListState = {
  articlesList: null,
  articlesCount: 0,
  error: null,
  load: false,
};

export const articlesListState = (state = initial, action: IArticleListActionsTypes): IArticlesListState => {
  switch (action.type) {
    case EArticleActions.getArticlesList:
      return {
        ...state,
        load: false,
        articlesList: action.payload.articles,
        articlesCount: action.payload.articlesCount,
      };
    case EArticleActions.articleLoad:
      return { ...state, load: action.payload };
    case EArticleActions.dataError:
      return { ...state, load: false, error: action.payload.error };
    default:
      return state;
  }
};
