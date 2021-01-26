import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type Thunk<T, S> = ActionCreator<ThunkAction<Promise<any>, S, null, T>>;
