import { IState, IArticle } from '../../types/index.d';

const articlesSelector = (state: IState): IArticle[] => state.articleState.articles;
const articlesCountSelector = (state: IState): number => state.articleState.articlesCount;

export { articlesSelector, articlesCountSelector };
