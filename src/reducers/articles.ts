import { REQUEST_ARTICLE_LIST, REQUEST_ARTICLE } from '../redux/constants';
import { IArticleState, ArticleActionsForReduce } from '../redux/types';

const initial: IArticleState = {
  articles: [],
  articlesCount: 0,
  currentArticle: null,
};

export default (
  state = initial,
  action: ArticleActionsForReduce,
): IArticleState => {
  switch (action.type) {
    case REQUEST_ARTICLE_LIST:
      return {
        ...state,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
      };
    case REQUEST_ARTICLE:
      return { ...state, currentArticle: action.payload };
    default:
      return state;
  }
};
