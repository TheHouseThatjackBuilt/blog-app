import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { getArticleListThunk } from '../../redux/middlewareThunk/articleListThunk';
import { articlesEmptyListAction } from '../../redux/actions/ArticlesListActions';
import {
  articlesStateCountSelector,
  articlesStateErrorSelector,
  articlesStateLoadSelector,
  articlesStateReselector,
} from '../../redux/selectors/index';

import { ArticlesList } from '../../components/Articles/ArticleList/ArticlesList';
import { IState } from '../../types/redux/index.d';

const ArticlesListContainer = ({
  articles,
  articlesCount,
  load,
  error,
  getArticleListThunk,
  articlesEmptyListAction,
}: PropsFromRedux) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getArticleListThunk(page);

    return () => {
      articlesEmptyListAction();
    };
  }, []);

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

const mapDispatch = { getArticleListThunk, articlesEmptyListAction };
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(ArticlesListContainer);
