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
  ArticleByAuthorPage,
  EditArticlePage,
} from '../../pages/index';

const App: React.FC = () => (
  <div className="main">
    <HeaderContainer />
    <Switch>
      <Redirect exact from="/" to="/articles?page=1" />
      <Route path="/new-article" component={CreateArticlePage} />
      <Route exact path="/articles" component={ArticleListPage} />
      <Route exact path="/articles/:id" component={SingleArticlePage} />
      <Route path="/articles/:id/edit" component={EditArticlePage} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/sign-in" component={SignInPage} />
      <Route path="/profile" component={EditProfilePage} />
      <Route path="/articles/:author" component={ArticleByAuthorPage} />
    </Switch>
  </div>
);
export default App;
