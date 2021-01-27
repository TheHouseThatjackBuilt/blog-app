import { IState, IArticle } from '../../types/redux/index.d';

export const singleArticleStateSelector = (state: IState): IArticle | null => state.singleArtileState.article;
export const singleArticleStateLoadSelector = (state: IState): boolean => state.singleArtileState.load;
export const singleArticleStateErrorSelector = (state: IState): any => state.singleArtileState.errors;
