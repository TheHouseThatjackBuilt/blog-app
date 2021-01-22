import { IArticleState, ArticleActionsForReduce, EActions } from '../../types/redux/index.d';

const initial: IArticleState = {
  articles: null,
  articlesCount: 0,
  currentArticle: null,
};

export default (state = initial, action: ArticleActionsForReduce): IArticleState => {
  switch (action.type) {
    case EActions.getArticlesList:
      return {
        ...state,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
      };
    case EActions.getArticle:
      return { ...state, currentArticle: action.payload };
    default:
      return state;
  }
};
