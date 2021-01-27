import { IState, IArticle } from '../../types/redux/index.d';

export const articlesSelector = (state: IState): IArticle[] | null => state.articlesListState.articles;
export const articlesCountSelector = (state: IState): number => state.articlesListState.articlesCount;
