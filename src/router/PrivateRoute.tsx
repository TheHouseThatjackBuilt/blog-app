/* eslint-disable */
import React, { FC } from 'react';
import { useCookies } from 'react-cookie';
import { connect, ConnectedProps } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { userStateUserSelector } from '../redux/selectors';
import { IState } from '../types/redux/index.d';

const PrivateRoute: FC<PropsFromRedux> = ({ children, auth, ...props }) => {
  const [useCookie] = useCookies();
  return (
    <>
      {useCookie.token && <Route {...props}>{children}</Route>}
      {!useCookie.token && <Redirect to="/sign-in" />}
    </>
  );
};

interface IPrivateRoute {
  children: React.ReactChild;
  path: string;
  exact?: boolean;
}

const mapStateToProps = (state: IState) => ({
  auth: userStateUserSelector(state),
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector> & IPrivateRoute;

export default connector(PrivateRoute);
