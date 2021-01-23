import { EActions } from '../../types/redux/index.d';
import { ISetUser } from '../../types/components/index.d';

export const registerNewUser = (payload: ISetUser) => ({ type: EActions.newUser, payload });

export const getCurrentUser = (payload: ISetUser | null) => ({ type: EActions.currentUser, payload });
