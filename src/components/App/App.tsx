import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import { Article, ArticleListPage } from '../../pages/index';

const App: React.FC = () => (
  <div className="main">
    <Header />
    <Switch>
      <Redirect exact from="/" to="/articles?page=1" />
      <Route exact path="/articles" component={ArticleListPage} />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  </div>
);
export default App;
