export { Thunk } from './thunk.d';
export {
  IAutorArticle,
  IArticleList,
  IArticle,
  IUser,
  IUserError,
  IResponseUser,
  IUpdateUser,
  IUserArticleError,
} from './response.d';

export { IArticlesListState, IUserState, ISingleArticleState, IState, IUserArticleState } from './store.d';

export {
  IArticlesErrorAction,
  IArticlesLoadAction,
  IGetArticlesAction,
  IArticleListActionsTypes,
  IGetSingleArticleAction,
  ISingleArticleLoadAction,
  ISingleArticleErrorAction,
  ISingleArticleActionsTypes,
  INewUserErrorAction,
  INewUserLoadAction,
  ISetNewUserAction,
  INewUserActionsTypes,
  ICreateNewArticleAction,
  INewArticleErrorAction,
  INewArticleLoadAction,
  IUserArticlesActionsTypes,
  ISetArticleTagsAction,
  IEmptyTheStateAction,
  IArticlesEmptyAction,
  IArticleGuardAction,
  ISetFavoriteAction,
  IDeleteArticleAction,
} from './actions.d';
