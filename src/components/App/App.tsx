import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import { Article, ArticleListPage, SignUpPage } from '../../pages/index';
import { SignInProfile, EditProfile } from '../AuthForms/index';

const App: React.FC = () => (
  <div className="main">
    <Header />
    <Switch>
      <Redirect exact from="/" to="/articles?page=1" />
      <Route exact path="/articles" component={ArticleListPage} />
      <Route path="/articles/:slug" component={Article} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/sign-in" component={SignInProfile} />
      <Route path="/profile" component={EditProfile} />
    </Switch>
  </div>
);
export default App;
