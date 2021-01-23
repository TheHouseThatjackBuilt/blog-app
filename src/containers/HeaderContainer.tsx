/* eslint-disable*/
import React, { useEffect, useState, MouseEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';
import omit from 'lodash.omit';

import { IState } from '../types/redux/index.d';
import { ISetUser } from '../types/components/index.d';
import { requestCurrentUser } from '../service/api';
import { getCurrentUser } from '../redux/actions/index';
import Header from '../components/Header/Header';

const HeaderContainer = ({ user, getCurrentUser }: PropsFromRedux) => {
  const [userCookie, setUserCookie] = useCookies();
  const [load, setLoad] = useState(false);

  const logOut = (_event: MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setUserCookie('token', '', { maxAge: -1 });
    getCurrentUser(null);
  };
  useEffect(() => {
    if (userCookie.token && user === null) {
      setLoad(true);
      (async () => {
        const response: { user: ISetUser } = await requestCurrentUser(userCookie.token);
        const { user } = response;
        const currentUser = omit(user, 'token');
        getCurrentUser(currentUser);
        setLoad(false);
      })();
    }
  }, [userCookie.token, user]);
  return <Header user={user} load={load} logOut={logOut} />;
};

const mapStateToProps = (state: IState) => ({
  user: state.userState.user,
});

const mapDispatch = { getCurrentUser };
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);
