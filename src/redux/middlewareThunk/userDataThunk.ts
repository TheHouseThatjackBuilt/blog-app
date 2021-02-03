import { Dispatch } from 'redux';
// types defs:
import { Thunk, IUser, IUserState, INewUserActionsTypes, IUpdateUser } from '../../types/redux/index.d';
// actions:
import { authUserAction, userErrorAction, userLoadAction } from '../actions/userActions';
// service:
import { requestNewUser, authUser, updateUser, requestCurrentUser } from '../../service';
import { handlerEmptyData } from '../../tools/dataFabric';

type userThunk = Thunk<INewUserActionsTypes, IUserState>;

export const authNewUserThunk: userThunk = (data: IUser) => (dispatch: Dispatch<INewUserActionsTypes>) => {
  userLoadAction(true);
  return requestNewUser(data)
    .then((response) => dispatch(authUserAction(response.user)))
    .catch((data) => dispatch(userErrorAction(data)));
};

export const authUserThunk: userThunk = (data: Omit<IUser, 'username'>) => (dispatch: Dispatch<INewUserActionsTypes>) => {
  userLoadAction(true);
  return authUser(data)
    .then((response) => dispatch(authUserAction(response.user)))
    .catch((data) => dispatch(userErrorAction(data)));
};

export const updateUserThunk = (data: IUpdateUser, token: string) => (dispatch: Dispatch<INewUserActionsTypes>) => {
  userLoadAction(true);
  const userData = handlerEmptyData<IUpdateUser>(data);
  return updateUser(userData, token)
    .then((response) => dispatch(authUserAction(response.user)))
    .catch((data) => dispatch(userErrorAction(data)));
};

export const verificationUserThunk = (token: string) => (dispatch: Dispatch<INewUserActionsTypes>) => {
  userLoadAction(true);
  return requestCurrentUser(token)
    .then((response) => dispatch(authUserAction(response.user)))
    .catch((data) => dispatch(userErrorAction(data)));
};
