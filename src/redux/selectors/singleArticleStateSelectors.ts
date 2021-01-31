import { createSelector } from 'reselect';

import { articlePreviewDataFabric } from '../../tools/dataFabric';
import { IState, IArticle } from '../../types/redux/index.d';
import { userStateUserSelector } from './index';

export const singleArticleStateSelector = (state: IState): IArticle | null => state.singleArtileState.article;
export const singleArticleStateLoadSelector = (state: IState): boolean => state.singleArtileState.load;
export const singleArticleStateErrorSelector = (state: IState): any => state.singleArtileState.errors;

export const singleArticleStateReselector = createSelector(singleArticleStateSelector, userStateUserSelector, (article, user) => {
  if (!article) return null;
  return user ? articlePreviewDataFabric(article, user.username) : articlePreviewDataFabric(article, null);
});
