import { combineReducers } from 'redux';
import { articlesListState } from './articles';
import { singleArtileState } from './singleArticle';
import { userArticleState } from './userArticle';
import { userState } from './user';

export const rootReducer = combineReducers({ articlesListState, userState, singleArtileState, userArticleState });
