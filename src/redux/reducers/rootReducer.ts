import { combineReducers } from 'redux';
import articleState from './articles';

const rootReducer = combineReducers({ articleState });

export default rootReducer;
