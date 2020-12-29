/* eslint-disable*/
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { IState, IArticleList } from '../../types/types';
import * as ArticleActions from '../../redux/actions/articles';
import List from '../../components/List/List';

const ListContainer: React.FC<IArticleList> = ({
  articles,
  articlesCount,
  getArticleList,
}) => {
  useEffect(() => {});

  return <List />;
};

export default connect(
  (state: IState) => ({
    articles: state.articleState.articles,
    articlesCount: state.articleState.articlesCount,
  }),
  {
    ...ArticleActions,
  },
)(ListContainer);
