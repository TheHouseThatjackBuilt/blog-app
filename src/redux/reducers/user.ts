import { IUserState, INewUserActionsTypes } from '../../types/redux/index.d';
import { EUserActions } from '../constants';

const initial: IUserState = {
  user: null,
  errors: null,
  load: false,
};

export const userReducer = (state = initial, action: INewUserActionsTypes): IUserState => {
  switch (action.type) {
    case EUserActions.newUser:
      return { ...state, load: false, user: action.payload };
    case EUserActions.userError:
      return { ...state, load: false, errors: action.payload };
    case EUserActions.userLoad:
      return { ...state, load: action.payload };
    default:
      return state;
  }
};
