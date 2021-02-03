import { Dispatch } from 'redux';
// types def:
import { Thunk, IArticleListActionsTypes, IArticlesListState } from '../../types/redux/index.d';
// actions:
import { articlesListAction, articlesLoadAction, articlesErrorAction } from '../actions/ArticlesListActions';
// service:
import { requestArticleList, requestUserArticleList } from '../../service';

type UserThunkType = Thunk<IArticleListActionsTypes, IArticlesListState>;
type UserDispatch = Dispatch<IArticleListActionsTypes>;

export const getArticleListThunk: UserThunkType = (data: number) => (dispatch: UserDispatch) => {
  dispatch(articlesLoadAction(true));
  const page = (data - 1) * 10;
  return requestArticleList(page)
    .then((response) => dispatch(articlesListAction(response)))
    .catch((error) => dispatch(articlesErrorAction(error)));
};

export const getArticleListByAuthorThunk: UserThunkType = (page: number, author: string, token: string) => (
  dispatch: UserDispatch
) => {
  dispatch(articlesLoadAction(true));
  return requestUserArticleList(page, author, token)
    .then((response) => dispatch(articlesListAction(response)))
    .catch((error) => dispatch(articlesErrorAction(error)));
};
