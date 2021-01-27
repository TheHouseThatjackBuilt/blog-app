import { ISingleArticleActionsTypes, ISingleArticleState } from '../../types/redux/index.d';
import { ESingleArticle } from '../constants';

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
    default:
      return state;
  }
};
