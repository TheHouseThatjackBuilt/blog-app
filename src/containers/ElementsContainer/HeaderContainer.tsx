import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';
// selectors:
import { userStateLoadSelector, userStateUserSelector } from '../../redux/selectors/index';
// actions & thunk actions:
import { verificationUserThunk } from '../../redux/middlewareThunk/userDataThunk';
import { authUserAction } from '../../redux/actions/userActions';
// types:
import { IState } from '../../types/redux/index.d';
// components:
import { Header } from '../../components/Header/Header';

const HeaderContainer = ({ load, user, verificationUserThunk, authUserAction }: PropsFromRedux) => {
  const [userCookie, setUserCookie] = useCookies();

  useEffect(() => {
    if (userCookie.token && !user) verificationUserThunk(userCookie.token);
  }, [userCookie.token, user]);

  const logOut = () => {
    setUserCookie('token', '', { maxAge: -1 });
    authUserAction(null);
  };

  return <Header user={user} load={load} logOut={logOut} />;
};

const mapStateToProps = (state: IState) => ({
  user: userStateUserSelector(state),
  load: userStateLoadSelector(state),
});

const mapDispatch = { verificationUserThunk, authUserAction };
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);
