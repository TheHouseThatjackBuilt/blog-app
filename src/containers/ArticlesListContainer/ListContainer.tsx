import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
// selectors
import {
  articlesStateCountSelector,
  articlesStateErrorSelector,
  articlesStateLoadSelector,
  articlesStateSelector,
} from '../../redux/selectors/index';
// types
import { IState } from '../../types/redux/index.d';
// thunk
import { getArticleListThunk } from '../../redux/middlewareThunk/articleListThunk';
// components
import { ArticlesList } from '../../components/Articles/ArticleList/ArticlesList';

type PropsFromRedux = ConnectedProps<typeof connector>;

const ArticlesListContainer = ({ articles, articlesCount, load, error, getArticleListThunk }: PropsFromRedux) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getArticleListThunk(page);
    if (error) throw new Error('something went wrong in Single Article');
  }, [page]);

  const handlePagesSwitch = (evt: number) => setPage(evt);
  return <ArticlesList articles={articles} pageHandler={handlePagesSwitch} totalPages={articlesCount} load={load} page={page} />;
};

const mapStateToProps = (state: IState) => ({
  articles: articlesStateSelector(state),
  articlesCount: articlesStateCountSelector(state),
  load: articlesStateLoadSelector(state),
  error: articlesStateErrorSelector(state),
});

const mapDispatch = { getArticleListThunk };
const connector = connect(mapStateToProps, mapDispatch);

export default connector(ArticlesListContainer);
