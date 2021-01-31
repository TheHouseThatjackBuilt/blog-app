import { createSelector } from 'reselect';
import { userStateUserSelector } from '.';
import { articlePreviewDataFabric } from '../../tools/dataFabric';
import { IState, IArticle } from '../../types/redux/index.d';

export const articlesStateSelector = (state: IState): IArticle[] | null => state.articlesListState.articlesList;
export const articlesStateCountSelector = (state: IState): number => state.articlesListState.articlesCount;
export const articlesStateLoadSelector = (state: IState): boolean => state.articlesListState.load;
export const articlesStateErrorSelector = (state: IState) => state.articlesListState.errors;

export const articlesStateReselector = createSelector(articlesStateSelector, userStateUserSelector, (articles, user) => {
  if (!articles) return null;
  if (!articles && !user) return null;
  return user
    ? articles.map((article) => articlePreviewDataFabric(article, user.username))
    : articles.map((article) => articlePreviewDataFabric(article, null));
});
