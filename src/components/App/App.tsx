import React from 'react';

import Header from '../Header/Header';
import ArticlesListContainer from '../../containers/ArticlesListContainer/ListContainer';

const App: React.FC = () => (
  <div className="main">
    <Header />
    <ArticlesListContainer />
  </div>
);
export default App;

// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';

// import { IArticleState } from '../../types/types';
// import * as ArticleActions from '../../actions/articles';

// const App: React.FC = ({ articles, articlesCount, getArticleList }: any) => {
//   useEffect(() => {
//     getArticleList(100);
//     console.log(articles, articlesCount);
//   }, []);

//   return <h1>hjel</h1>;
// };

// export default connect(
//   (state: any) => ({
//     articles: state.articleState.articles,
//     articlesCount: state.articleState.articlesCount,
//   }),
//   {
//     ...ArticleActions,
//   },
// )(App);
