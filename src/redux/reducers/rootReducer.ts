import { combineReducers } from 'redux';
import { articleListReducer } from './articles';
import { singleArticleReducer } from './singleArticle';
import { userReducer } from './user';

export const rootReducer = combineReducers({ articleListReducer, userReducer, singleArticleReducer });
