/* eslint-disable*/
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IState } from '../types/redux/index.d';

import Header from '../components/Header/Header';

const HeaderContainer = ({ user }: PropsFromRedux) => {
  return <Header user={user} />;
};

const mapStateToProps = (state: IState) => ({
  user: state.userState!.user,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);
