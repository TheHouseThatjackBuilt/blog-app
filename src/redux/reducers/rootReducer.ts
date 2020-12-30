import { combineReducers } from 'redux';
import articleState from './articles';
import errorState from './errors';

const rootReducer = combineReducers({ articleState, errorState });

export default rootReducer;
