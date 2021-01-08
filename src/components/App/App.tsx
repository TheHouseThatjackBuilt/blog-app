import React from 'react';
// import { browserrouter } from 'react-router-dom';

import Header from '../Header/Header';
import ArticlesListContainer from '../../containers/ArticlesListContainer/ListContainer';

const App: React.FC = () => (
  <div className="main">
    <Header />
    <ArticlesListContainer />
  </div>
);
export default App;
