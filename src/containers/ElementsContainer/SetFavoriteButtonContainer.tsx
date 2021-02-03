/* eslint-disable */
import React, { FC, useState, useEffect } from 'react';

import { useCookies } from 'react-cookie';

import { setFavoriteStatusMiddleware } from '../../redux/middlewareThunk/middleware';
import { SetFavoriteButton } from '../../components/Articles/ArticleHeader/SetFavoriteButton';

interface ISetFavoriteButtonContainer {
  favorited: boolean;
  favoritesCount: number;
  id: string;
}

export const SetFavoriteButtonContainer: FC<ISetFavoriteButtonContainer> = ({ favorited, favoritesCount, id }) => {
  const [favorite, setFavorite] = useState(favorited);
  const [favCounter, setFavCounter] = useState(favoritesCount);
  const [userCookie] = useCookies();

  useEffect(() => {
    setFavorite(favorited);
    setFavCounter(favoritesCount);
  }, [favorited, favoritesCount]);

  const favoriteClickHandler = () => {
    if (!userCookie.token) return;
    setFavorite(!favorite);
    setFavCounter(!favorite ? favCounter + 1 : favCounter - 1);
    setFavoriteStatusMiddleware(!favorite, id, userCookie.token);
  };

  return <SetFavoriteButton clickHandler={favoriteClickHandler} favorite={favorite} counter={favCounter} />;
};
