/* eslint-disable */
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';
// middleware:
import { setFavoriteStatusThunk } from '../../redux/middlewareThunk/articleListThunk';
// component:
import { SetFavoriteButton } from '../../components/Articles/ArticleElements';

interface ISetFavoriteButtonContainer {
  favorited: boolean;
  favoritesCount: number;
  id: string;
}

export const SetFavoriteButtonContainer = ({ favorited, favoritesCount, id, setFavoriteStatusThunk }: PropsFromRedux) => {
  const [userCookie] = useCookies();
  const history = useHistory();

  const favoriteClickHandler = () => {
    if (!userCookie.token) history.push('/sign-in');
    setFavoriteStatusThunk(id, userCookie.token, !favorited, favoritesCount);
  };

  return <SetFavoriteButton clickHandler={favoriteClickHandler} favorite={favorited} counter={favoritesCount} />;
};

const mapDispatch = { setFavoriteStatusThunk };
const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector> & ISetFavoriteButtonContainer;

export default connector(SetFavoriteButtonContainer);
