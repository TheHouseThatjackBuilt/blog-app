import { createSelector } from 'reselect';
import { errorDataFabric as dataFabric } from '../../tools/dataFabric';
import { IState, IUserArticleError as IData } from '../../types/redux/index.d';
import { IApiError } from '../../types/service/index.d';

export const userArticleLoadStateSelector = (state: IState) => state.userArticleState.load;
export const userArticleErrorStateSelector = (state: IState) => state.userArticleState.errors;
export const userArticleStateSelector = (state: IState) => state.userArticleState.article;
export const userArticleStateTagsSelector = (state: IState) => state.userArticleState.userTags;

export const userArticleStateTagsReselector = createSelector(userArticleStateSelector, (article) => {
  if (article) return article.tagList;
  return null;
});

export const userArticleErrorStateReselector = createSelector(userArticleErrorStateSelector, (data: null | IApiError<IData>) => {
  if (!data) return null;
  return dataFabric<IData>(data.item.errors);
});

export const userArticleInitialStateReselector = createSelector(userArticleStateSelector, (article) => {
  if (article) return dataFabric<IData>({ title: article.title, description: article.description, body: article.body });
  return null;
});
