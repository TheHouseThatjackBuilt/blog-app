import React, { FC, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';
// pages:
import {
  SingleArticlePage,
  ArticleListPage,
  SignUpPage,
  SignInPage,
  EditProfilePage,
  CreateArticlePage,
  EditArticlePage,
} from '../pages/index';
// thunk:
import { verificationUserThunk } from '../redux/middlewareThunk/userDataThunk';
// selectors:
import { userStateUserSelector } from '../redux/selectors/index';
// component:
import HeaderContainer from '../containers/ElementsContainer/HeaderContainer';
import { PrivateRoute } from './PrivateRoute';
// types:
import { IState } from '../types/redux/index.d';

const MainRouter: FC<PropsFromRedux> = ({ user, verificationUserThunk }) => {
  const [userCookie] = useCookies();

  useEffect(() => {
    if (userCookie.token && !user) verificationUserThunk(userCookie.token);
  }, [userCookie.token, user]);

  return (
    <div className="main">
      <HeaderContainer />
      <Switch>
        <Redirect exact from="/" to="/articles?page=1" />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/sign-in" component={SignInPage} />
        <Route exact path="/articles/:id" component={SingleArticlePage} />
        <Route exact path="/articles" component={ArticleListPage} />

        <PrivateRoute path="/new-article" exact>
          <CreateArticlePage />
        </PrivateRoute>

        <PrivateRoute path="/articles/:id/edit" exact>
          <EditArticlePage />
        </PrivateRoute>

        <PrivateRoute path="/profile">
          <EditProfilePage />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  user: userStateUserSelector(state),
});

const mapDispatch = { verificationUserThunk };
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MainRouter);
