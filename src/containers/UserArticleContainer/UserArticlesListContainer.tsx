/* eslint-disable */
import React, { FC, useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';

import { IState } from '../../types/redux/index.d';
import { getArticleListByAuthorThunk } from '../../redux/middlewareThunk/articleListThunk';
import { ArticlesList } from '../../components/Articles/ArticleList/ArticlesList';
import {
  articlesStateCountSelector,
  articlesStateErrorSelector,
  articlesStateLoadSelector,
  articlesStateReselector,
  userStateUserSelector,
} from '../../redux/selectors/index';

const UserArticlesListContainer: FC<PropsFromRedux> = ({
  user,
  articles,
  articlesCount,
  load,
  error,
  getArticleListByAuthorThunk,
}) => {
  const [page, setPage] = useState(1);
  const [userCookie] = useCookies();

  useEffect(() => {
    if (user) getArticleListByAuthorThunk(page, user.username, userCookie.token);
  }, [page, user]);

  useEffect(() => {
    if (error) throw new Error('something went wrong in Single Article');
  }, [error]);

  const handlePagesSwitch = (evt: number) => setPage(evt);

  return <ArticlesList articles={articles} pageHandler={handlePagesSwitch} totalPages={articlesCount} load={load} page={page} />;
};

const mapStateToProps = (state: IState) => ({
  user: userStateUserSelector(state),
  articles: articlesStateReselector(state),
  articlesCount: articlesStateCountSelector(state),
  load: articlesStateLoadSelector(state),
  error: articlesStateErrorSelector(state),
});

const mapDispatch = { getArticleListByAuthorThunk };
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(UserArticlesListContainer);
