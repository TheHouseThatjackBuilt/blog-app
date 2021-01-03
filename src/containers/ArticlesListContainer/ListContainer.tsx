/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { IState } from '../../types/redux/index';
import { getArticleList, getArticle } from '../../redux/middleware/reduxThunk';
import {
  articlesSelector,
  articlesCountSelector,
} from '../../redux/selectors/index';

import Spinner from '../../components/Spinner/Spinner';
import ArticlesList from '../../components/ArticlesList/ArticlesList';

type PropsFromRedux = ConnectedProps<typeof connector>;

const ArticlesListContainer = ({
  articles,
  articlesCount,
  getArticleList,
  getArticle,
}: PropsFromRedux) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    (async () => {
      await getArticleList(page);
      setLoading(false);
    })();
  }, [page]);

  const handlePagesSwitch = (page: number) => setPage(page);
  return (
    <main className="main__content">
      {loading ? <Spinner /> : <ArticlesList articles={articles} />}
    </main>
  );
};

const mapStateToProps = (state: IState) => ({
  articles: articlesSelector(state),
  articlesCount: articlesCountSelector(state),
});

const mapDispatch = { getArticleList, getArticle };
const connector = connect(mapStateToProps, mapDispatch);

export default connector(ArticlesListContainer);
