import { combineReducers } from 'redux';
import { articlesListState } from './articles';
import { singleArtileState } from './singleArticle';
import { userState } from './user';

export const rootReducer = combineReducers({ articlesListState, userState, singleArtileState });
