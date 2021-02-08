import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';
// selectors:
import { userStateLoadSelector, userStateUserSelector } from '../../redux/selectors/index';
// actions & thunk actions:
import { authUserAction } from '../../redux/actions/userActions';
// types:
import { IState } from '../../types/redux/index.d';
// components:
import { Header } from '../../components/Header/Header';

const HeaderContainer: FC<PropsFromRedux> = ({ load, user, authUserAction }) => {
  const [, , removeCookie] = useCookies();

  const logOut = () => {
    removeCookie('token', { path: '/' });
    authUserAction(null);
  };

  return <Header user={user} load={load} logOut={logOut} />;
};

const mapStateToProps = (state: IState) => ({
  user: userStateUserSelector(state),
  load: userStateLoadSelector(state),
});

const mapDispatch = { authUserAction };
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);
