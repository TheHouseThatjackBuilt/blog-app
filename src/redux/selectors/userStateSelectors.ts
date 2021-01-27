/* eslint-disable function-paren-newline */
import { createSelector } from 'reselect';
import { errorDataFabric, handlerUserData } from '../../tools/dataFabric';
import { IState, IResponseUser, IUserError } from '../../types/redux/index.d';
import { IApiError } from '../../types/service/index.d';

export const userStateUserSelector = (state: IState) => {
  debugger;
  return state.userState.user;
};
export const userStateLoadSelector = (state: IState): boolean => state.userState.load;
export const userStateErrorSelector = (state: IState) => state.userState.errors;

export const userStateErrorReselector = createSelector(userStateErrorSelector, ({ item }: IApiError<IUserError>) =>
  errorDataFabric<IUserError>(item.errors)
);

export const userHeaderReselector = createSelector(userStateUserSelector, (user: IResponseUser | null) => {
  if (!user) return null;
  return handlerUserData(user, ['token', 'bio', 'id']);
});
