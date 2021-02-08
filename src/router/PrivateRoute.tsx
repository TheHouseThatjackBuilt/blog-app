/* eslint-disable */
import React, { FC } from 'react';
import { useCookies } from 'react-cookie';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute: FC<IPrivateRoute> = ({ children, ...props }) => {
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
