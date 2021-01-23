import { EActions, IUserState, UserActionsForReduce } from '../../types/redux/index.d';

const initial: IUserState = { user: null };

export default (state = initial, action: UserActionsForReduce): IUserState => {
  switch (action.type) {
    case EActions.newUser:
    case EActions.currentUser:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
