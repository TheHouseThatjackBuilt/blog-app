import { EActions, IUserState, ISetUser } from '../../types/redux/index.d';

const initial: IUserState = {
  user: null,
};

export default (state = initial, action: ISetUser): IUserState => {
  switch (action.type) {
    case EActions.newUser:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
