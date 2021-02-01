import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router-dom';
// selectors
import {
  singleArticleStateErrorSelector,
  singleArticleStateLoadSelector,
  singleArticleStateReselector,
} from '../../redux/selectors/index';

import { IState } from '../../types/redux/index.d';
import { IParams } from '../../types/components/index.d';
import { getArticleThunk } from '../../redux/middlewareThunk/singleArticleThunk';
import { SingleArticle } from '../../components/Articles/SingleArticle/SingleArticle';

const ArticleContainer = ({ article, load, error, getArticleThunk }: PropsFromRedux) => {
  const { slug } = useParams<IParams>();

  useEffect(() => {
    getArticleThunk(slug);
  }, [slug]);

  useEffect(() => {
    if (error) throw new Error('something went wrong in Single Article');
  }, [error]);

  return <SingleArticle data={article} load={load} />;
};

const mapStateToProps = (state: IState) => ({
  article: singleArticleStateReselector(state),
  load: singleArticleStateLoadSelector(state),
  error: singleArticleStateErrorSelector(state),
});

const mapDispatch = { getArticleThunk };
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ArticleContainer);
