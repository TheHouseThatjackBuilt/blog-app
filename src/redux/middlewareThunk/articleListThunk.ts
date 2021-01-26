import { Dispatch } from 'redux';
// types def:
import { Thunk, IArticleListActionsTypes, IArticlesListState } from '../../types/redux/index.d';
// actions:
import { articlesListAction, articlesLoadAction, articlesErrorAction } from '../actions/ArticlesListActions';
// service:
import { requestArticleList } from '../../service/api';

export const getArticleListThunk: Thunk<IArticleListActionsTypes, IArticlesListState> = (offsetPage: number) => (
  dispatch: Dispatch<IArticleListActionsTypes>
) => {
  dispatch(articlesLoadAction(true));
  return requestArticleList(offsetPage)
    .then((response) => dispatch(articlesListAction(response)))
    .catch((error) => dispatch(articlesErrorAction(error)));
};
