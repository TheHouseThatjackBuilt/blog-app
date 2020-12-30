import { ThunkActionType, DispatchType } from '../../types/index.d';
import { requestArticleList, requestArticle } from '../../service/RealWorldAPI';
import {
  requestListAction,
  requestArticleAction,
  requestErrorHandler,
} from '../actions/index';

const getArticleList: ThunkActionType = (offsetPage: number) => (
  dispatch: DispatchType,
): Promise<any> => requestArticleList(offsetPage)
  .then((response) => dispatch(requestListAction(response)))
  .catch((error) => dispatch(requestErrorHandler(error)));

const getArticle: ThunkActionType = (id: string) => (
  dispatch: DispatchType,
): Promise<any> => requestArticle(id)
  .then((response) => dispatch(requestArticleAction(response)))
  .catch((error) => dispatch(requestErrorHandler(error)));

export { getArticleList, getArticle };
