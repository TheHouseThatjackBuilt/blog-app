import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import {
  SingleArticlePage,
  ArticleListPage,
  SignUpPage,
  SignInPage,
  EditProfilePage,
} from '../../pages/index';

const App: React.FC = () => (
  <div className="main">
    <Header />
    <Switch>
      <Redirect exact from="/" to="/articles?page=1" />
      <Route exact path="/articles" component={ArticleListPage} />
      <Route path="/articles/:slug" component={SingleArticlePage} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/sign-in" component={SignInPage} />
      <Route path="/profile" component={EditProfilePage} />
    </Switch>
  </div>
);
export default App;
