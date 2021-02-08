import React, { FC } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
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
// component:
import HeaderContainer from '../containers/ElementsContainer/HeaderContainer';
import { PrivateRoute } from './PrivateRoute';

const MainRouter: FC = () => (
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

export default MainRouter;
