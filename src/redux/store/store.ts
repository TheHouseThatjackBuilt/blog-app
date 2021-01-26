import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { rootReducer } from '../reducers/rootReducer';

/* eslint-disable operator-linebreak */
const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preloadedState: any) =>
  createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(ReduxThunk)));

export const store = configureStore({});
