export enum EArticleActions {
  getArticlesList = 'REQUEST_ARTICLE_LIST',
  dataError = 'ARTICLES_ERROR',
  articleLoad = 'ARTILES_LIST_LOAD',
  emptyListState = 'DELETE_ARTICLE_LIST',
}

export enum ESingleArticle {
  getArticle = 'REQUEST_ARTICLE',
  dataError = 'ARTICLE_ERROR',
  articleLoad = 'SINGLE_ARTICLE_LOAD',
}

export enum EUserArticles {
  newArticle = 'CREATE_ARTICLE',
  dataError = 'USER_ARTICLE_ERROR',
  dataLoad = 'USER_ARTICLE_LOAD',
  setTags = 'SET_TAGS_ARRAY',
  emptyTheState = 'DELETE_USER_ARTICLE',
  articleGuard = 'NOT_OWNER',
}

export enum EUserActions {
  newUser = 'SET_NEW_USER',
  userError = 'USER__ERROR',
  userLoad = 'USER_LOAD',
}

export enum Methods {
  get = 'GET',
  put = 'PUT',
  post = 'POST',
  del = 'DELETE',
}
