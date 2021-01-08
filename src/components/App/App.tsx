import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import ArticleListPage from '../../pages/ArticleListPage';

const App: React.FC = () => (
  <div className="main">
    <Header />
    <Switch>
      <Redirect exact from="/" to="/articles?page=1" />
      <Route exact path="/articles">
        <ArticleListPage />
      </Route>
    </Switch>
  </div>
);
export default App;
