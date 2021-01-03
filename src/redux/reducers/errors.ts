import { IErrorState, IError, EActions } from '../../types/redux/index.d';

const initial: IErrorState = {
  error: null,
};

export default (state = initial, action: IError): IErrorState => {
  switch (action.type) {
    case EActions.hasError:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
