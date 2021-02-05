import { Dispatch } from 'redux';
// types def:
import { Thunk, ISingleArticleState, ISingleArticleActionsTypes } from '../../types/redux/index.d';
// actions:
import { articleErrorAction, getArticleAction, aticleLoadAction } from '../actions/singleArticleActions';
// service:
import { requestArticle } from '../../service';

export const getArticleThunk: Thunk<ISingleArticleActionsTypes, ISingleArticleState> = (
  id: string,
  token?: string | undefined
) => (dispatch: Dispatch<ISingleArticleActionsTypes>) => {
  dispatch(aticleLoadAction(true));
  return requestArticle(id, token)
    .then((response) => {
      const { article } = response;
      dispatch(getArticleAction({ ...article }));
    })
    .catch((error) => dispatch(articleErrorAction(error)));
};
