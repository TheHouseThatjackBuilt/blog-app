/* eslint-disable*/
import React, { useEffect, MouseEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';

import { verificationUserThunk, authNewUserThunk } from '../redux/middlewareThunk/userDataThunk';
import { userStateErrorSelector, userStateLoadSelector, userStateUserSelector } from '../redux/selectors/';
import { IState } from '../types/redux/index.d';
import { Header } from '../components/Header/Header';

const HeaderContainer = ({ load, error, user, verificationUserThunk, authNewUserThunk }: PropsFromRedux) => {
  const [userCookie, setUserCookie] = useCookies();

  useEffect(() => {
    if (userCookie.token && !user) verificationUserThunk(userCookie.token);
    if (error) throw new Error('something went wrong in Header-component with user data');
  }, [userCookie.token, user, error]);

  const logOut = (_event: MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setUserCookie('token', '', { maxAge: -1 });
    authNewUserThunk(null);
  };

  return <Header user={user} load={load} logOut={logOut} />;
};

const mapStateToProps = (state: IState) => ({
  user: userStateUserSelector(state),
  error: userStateErrorSelector(state),
  load: userStateLoadSelector(state),
});

const mapDispatch = { verificationUserThunk, authNewUserThunk };
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);
