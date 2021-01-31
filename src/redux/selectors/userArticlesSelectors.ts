import { createSelector } from 'reselect';
import { errorDataFabric } from '../../tools/dataFabric';
import { IState, IUserArticleError } from '../../types/redux/index.d';
import { IApiError } from '../../types/service/index.d';

export const userArticleLoadStateSelector = (state: IState) => state.userArticleState.load;
export const userArticleErrorStateSelector = (state: IState) => state.userArticleState.errors;
export const userArticleStateSelector = (state: IState) => state.userArticleState.article;

export const userArticleErrorStateReselector = createSelector(
  userArticleErrorStateSelector,
  (data: null | IApiError<IUserArticleError>) => {
    if (!data) return null;
    return errorDataFabric<IUserArticleError>(data.item.errors);
  }
);
