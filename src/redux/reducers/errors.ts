import { IErrorState, IError } from '../../types/index.d';
import { REQUEST_ERROR_HANDLER } from '../constants';

const initial: IErrorState = {
  error: null,
};

export default (state = initial, action: IError): IErrorState => {
  switch (action.type) {
    case REQUEST_ERROR_HANDLER:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
