/* eslint-disable no-confusing-arrow */
import { deleteFavoriteArticle, setFavoriteArticle } from '../../service';

export const setFavoriteStatusMiddleware = (value: boolean, id: string, token: string) =>
  value ? setFavoriteArticle(id, token) : deleteFavoriteArticle(id, token);
