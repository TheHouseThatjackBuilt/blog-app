import { INewUserErrorAction, INewUserLoadAction, IResponseUser, ISetNewUserAction } from '../../types/redux/index.d';
import { EUserActions } from '../constants';
import { IApiError } from '../../types/service/index.d';

export const authUserAction = (payload: IResponseUser | null): ISetNewUserAction => ({ type: EUserActions.newUser, payload });

export const userErrorAction = <T>(payload: IApiError<T>): INewUserErrorAction => ({ type: EUserActions.userError, payload });

export const userLoadAction = (payload: boolean): INewUserLoadAction => ({ type: EUserActions.userLoad, payload });
