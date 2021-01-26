export enum EArticleActions {
  getArticlesList = 'REQUEST_ARTICLE_LIST',
  dataError = 'ARTICLES_ERROR',
  articleLoad = 'ARTILES_LIST_LOAD',
}

export enum ESingleArticle {
  getArticle = 'REQUEST_ARTICLE',
  dataError = 'ARTICLE_ERROR',
  articleLoad = 'SINGLE_ARTICLE_LOAD',
}

export enum EUserActions {
  newUser = 'SET_NEW_USER',
  currentUser = 'CURRENT_USER',
  userError = 'USER__ERROR',
  userLoad = 'USER_LOAD',
}

export enum Methods {
  get = 'GET',
  put = 'PUT',
  post = 'POST',
}
