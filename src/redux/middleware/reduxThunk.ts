import {
  ThunkActionType,
  DispatchType,
  ArticleActions,
  IArticleState,
} from '../../types/redux/index.d';
import {
  requestListAction,
  requestArticleAction,
  requestErrorHandler,
} from '../actions/index';
import { requestArticleList, requestArticle } from '../../service/api';

const getArticleList: ThunkActionType<ArticleActions, IArticleState> = (
  offsetPage: number,
) => (dispatch: DispatchType<ArticleActions>): Promise<ArticleActions> => requestArticleList(offsetPage)
  .then((response) => dispatch(requestListAction(response)))
  .catch((error) => dispatch(requestErrorHandler(error)));

const getArticle: ThunkActionType<ArticleActions, IArticleState> = (
  id: string,
) => (dispatch: DispatchType<ArticleActions>): Promise<ArticleActions> => requestArticle(id)
  .then((response) => dispatch(requestArticleAction(response)))
  .catch((error) => dispatch(requestErrorHandler(error)));

export { getArticleList, getArticle };
