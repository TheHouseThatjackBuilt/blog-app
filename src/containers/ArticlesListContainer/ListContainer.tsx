/* eslint-disable*/
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { IState, ListTypes } from '../../types/index';
import { getArticleList, getArticle } from '../../redux/middleware/reduxThunk';
import ArticlesList from '../../components/ArticlesList/ArticlesList';

const ArticlesListContainer: React.FC = ({
  articles,
  articlesCount,
  getArticleList,
  getArticle,
}: any) => {
  useEffect(() => {
    getArticleList(10);
    console.log(articles);
  }, []);

  return <ArticlesList />;
};

export default connect(
  (state: IState) => ({
    articles: state.articleState.articles,
    articlesCount: state.articleState.articlesCount,
  }),
  {
    getArticleList,
    getArticle,
  },
)(ArticlesListContainer);
