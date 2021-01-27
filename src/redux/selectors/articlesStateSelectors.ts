import { IState, IArticle } from '../../types/redux/index.d';

export const articlesStateSelector = (state: IState): IArticle[] | null => state.articlesListState.articlesList;
export const articlesStateCountSelector = (state: IState): number => state.articlesListState.articlesCount;
export const articlesStateLoadSelector = (state: IState): boolean => state.articlesListState.load;
export const articlesStateErrorSelector = (state: IState) => state.articlesListState.errors;
