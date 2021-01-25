import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import HeaderContainer from '../../containers/HeaderContainer';
import {
  SingleArticlePage,
  ArticleListPage,
  SignUpPage,
  SignInPage,
  EditProfilePage,
  CreateArticlePage,
} from '../../pages/index';

const App: React.FC = () => (
  <div className="main">
    <HeaderContainer />
    <Switch>
      <Redirect exact from="/" to="/articles?page=1" />
      <Route path="/new-article" component={CreateArticlePage} />
      <Route exact path="/articles" component={ArticleListPage} />
      <Route path="/articles/:slug" component={SingleArticlePage} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/sign-in" component={SignInPage} />
      <Route path="/profile" component={EditProfilePage} />
    </Switch>
  </div>
);
export default App;
