import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { articlesSelector, articlesCountSelector } from '../../redux/selectors/index';
import { IState } from '../../types/redux/index.d';
import { getArticleListThunk } from '../../redux/middlewareThunk/reduxThunk';
import { ArticlesList } from '../../components/Articles/ArticleList/ArticlesList';

type PropsFromRedux = ConnectedProps<typeof connector>;

const ArticlesListContainer = ({ articles, articlesCount, getArticleListThunk }: PropsFromRedux) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    (async () => {
      await getArticleListThunk(page);
      setLoading(false);
    })();
  }, [page]);

  const handlePagesSwitch = (evt: number) => setPage(evt);
  return (
    <ArticlesList articles={articles} pageHandler={handlePagesSwitch} totalPages={articlesCount} load={loading} page={page} />
  );
};

const mapStateToProps = (state: IState) => ({
  articles: articlesSelector(state),
  articlesCount: articlesCountSelector(state),
});

const mapDispatch = { getArticleListThunk };
const connector = connect(mapStateToProps, mapDispatch);

export default connector(ArticlesListContainer);
