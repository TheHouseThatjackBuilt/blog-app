import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { IState } from '../../types/redux/index.d';
import { getArticleList } from '../../redux/middleware/reduxThunk';
import { articlesSelector, articlesCountSelector } from '../../redux/selectors/index';

import ArticlesList from '../../components/Articles/ArticleList/ArticlesList';

const ArticlesListContainer = ({ articles, articlesCount, getArticleList }: PropsFromRedux) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    (async () => {
      await getArticleList(page);
      setLoading(false);
    })();
  }, [page]);

  const handlePagesSwitch = (evt: number) => setPage(evt);
  return <ArticlesList articles={articles} pageHandler={handlePagesSwitch} totalPages={articlesCount} load={loading} page={page} />;
};

const mapStateToProps = (state: IState) => ({
  articles: articlesSelector(state),
  articlesCount: articlesCountSelector(state),
});

const mapDispatch = { getArticleList };
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ArticlesListContainer);
