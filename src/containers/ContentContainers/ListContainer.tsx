import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';
// selectors:
import {
  articlesStateCountSelector,
  articlesStateErrorSelector,
  articlesStateLoadSelector,
  articlesStateReselector,
} from '../../redux/selectors/index';
// thunk:
import { getArticleListThunk } from '../../redux/middlewareThunk/articleListThunk';
// actions:
import { articlesEmptyListAction } from '../../redux/actions/ArticlesListActions';
// types:
import { IState } from '../../types/redux/index.d';
// component:
import { ArticlesList } from '../../components/Articles';

const ArticlesListContainer = ({
  articles,
  articlesCount,
  load,
  error,
  getArticleListThunk,
  articlesEmptyListAction,
}: PropsFromRedux) => {
  const [page, setPage] = useState(1);
  const [userCookie] = useCookies();

  useEffect(() => {
    getArticleListThunk(page, userCookie.token);

    return () => {
      articlesEmptyListAction();
    };
  }, [page, userCookie.token]);

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
