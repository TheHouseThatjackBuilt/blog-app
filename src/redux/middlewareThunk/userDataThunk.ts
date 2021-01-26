import { Dispatch } from 'redux';
// types defs:
import { Thunk, IResponseUser, IUser, IUserState, INewUserActionsTypes } from '../../types/redux/index.d';
// actions:
import { authUserAction, userErrorAction, userLoadAction } from '../actions/userActions';
// service:
import { requestNewUser } from '../../service/api';

export const authUserThunk: Thunk<INewUserActionsTypes, IUserState> = (data: IUser) => (
  dispatch: Dispatch<INewUserActionsTypes>
) => {
  userLoadAction(true);
  return requestNewUser(data)
    .then((response: { user: IResponseUser }) => dispatch(authUserAction(response.user)))
    .catch((data) => dispatch(userErrorAction(data)));
};
