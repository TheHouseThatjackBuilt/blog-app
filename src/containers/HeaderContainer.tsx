/* eslint-disable*/
import React, { useEffect, useState, MouseEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';
import omit from 'lodash.omit';

import { IState } from '../types/redux/index.d';
import { ISetUser } from '../types/components/index.d';
import { requestCurrentUser } from '../service/api';
import { getCurrentUserAction } from '../redux/actions/index';
import Header from '../components/Header/Header';

const HeaderContainer = ({ user, getCurrentUserAction }: PropsFromRedux) => {
  const [userCookie, setUserCookie] = useCookies();
  const [load, setLoad] = useState(false);

  const logOut = (_event: MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setUserCookie('token', '', { maxAge: -1 });
    getCurrentUserAction(null);
  };
  useEffect(() => {
    if (userCookie.token && !user) {
      setLoad(true);
      (async () => {
        const response: { user: ISetUser } = await requestCurrentUser(userCookie.token);
        const { user } = response;
        const currentUser = omit(user, 'token');
        getCurrentUserAction(currentUser);
        setLoad(false);
      })();
    }
  }, [userCookie.token, user]);
  return <Header user={user} load={load} logOut={logOut} />;
};

const mapStateToProps = (state: IState) => ({
  user: state.userState.user,
});

const mapDispatch = { getCurrentUserAction };
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);
