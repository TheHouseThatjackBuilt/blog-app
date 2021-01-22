import { combineReducers } from 'redux';
import articleState from './articles';
import errorState from './errors';
import userState from './user';

const rootReducer = combineReducers({ articleState, errorState, userState });

export default rootReducer;
