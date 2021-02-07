/* eslint-disable operator-linebreak */
import React, { FC, useEffect, useState } from 'react';
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
// components:
import { ArticleConstructor } from '../../components/Articles/ArticleConstructor';
import { Spinner, Pagination, MainContainer } from '../../components/AppElements/index';

const ArticlesListContainer: FC<PropsFromRedux> = ({
  articles,
  articlesCount,
  load,
  error,
  getArticleListThunk,
  articlesEmptyListAction,
}) => {
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

  const content =
    articles &&
    articles?.map((article) => (
      <li key={article.header.slug} className="content__itemContainer">
        <article className="content__article-preview">
          <ArticleConstructor article={article} flag={false} />
        </article>
      </li>
    ));

  return (
    <MainContainer>
      {load && <Spinner />}
      {!load && articles && (
        <div className="content">
          <ul className="content__container-preview">{content}</ul>
          <Pagination totalPages={articlesCount} handler={handlePagesSwitch} currentPage={page} />
        </div>
      )}
    </MainContainer>
  );
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
