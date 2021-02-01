import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { IState } from '../../types/redux/index.d';
import { getArticleListThunk } from '../../redux/middlewareThunk/articleListThunk';
import { ArticlesList } from '../../components/Articles/ArticleList/ArticlesList';
import {
  articlesStateCountSelector,
  articlesStateErrorSelector,
  articlesStateLoadSelector,
  articlesStateReselector,
} from '../../redux/selectors/index';

const ArticlesListContainer = ({ articles, articlesCount, load, error, getArticleListThunk }: PropsFromRedux) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getArticleListThunk(page);
  }, [page]);

  useEffect(() => {
    if (error) throw new Error('something went wrong in Single Article');
  }, [error]);

  const handlePagesSwitch = (evt: number) => setPage(evt);

  return <ArticlesList articles={articles} pageHandler={handlePagesSwitch} totalPages={articlesCount} load={load} page={page} />;
};

const mapStateToProps = (state: IState) => ({
  articles: articlesStateReselector(state),
  articlesCount: articlesStateCountSelector(state),
  load: articlesStateLoadSelector(state),
  error: articlesStateErrorSelector(state),
});

const mapDispatch = { getArticleListThunk };
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(ArticlesListContainer);
