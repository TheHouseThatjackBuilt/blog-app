/* eslint-disable*/
import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';

import { IState } from '../types/redux/index.d';
import { requestCurrentUser } from '../service/api';
import Header from '../components/Header/Header';

const HeaderContainer = ({ user }: PropsFromRedux) => {
  const [userCookie, setUserCookie] = useCookies();
  // useEffect(() => {
  //   if (userCookie.token && typeof user === null) {

  //   }

  // }, []);
  return <Header user={user} />;
};

const mapStateToProps = (state: IState) => ({
  user: state.userState!.user,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);
