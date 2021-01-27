import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router-dom';
// selectors
import {
  singleArticleStateErrorSelector,
  singleArticleStateLoadSelector,
  singleArticleStateSelector,
} from '../../redux/selectors/index';
// types
import { IState } from '../../types/redux/index.d';
import { IParams } from '../../types/components/index.d';
// thunk
import { getArticleThunk } from '../../redux/middlewareThunk/singleArticleThunk';
// component
import { SingleArticle } from '../../components/Articles/SingleArticle/SingleArticle';

type PropsFromRedux = ConnectedProps<typeof connector>;

const ArticleContainer = ({ article, load, error, getArticleThunk }: PropsFromRedux) => {
  const { slug } = useParams<IParams>();

  useEffect(() => {
    getArticleThunk(slug);
    if (error) throw new Error('something went wrong in Single Article');
  }, [slug, error]);

  return <SingleArticle data={article} load={load} />;
};

const mapStateToProps = (state: IState) => ({
  article: singleArticleStateSelector(state),
  load: singleArticleStateLoadSelector(state),
  error: singleArticleStateErrorSelector(state),
});

const mapDispatch = { getArticleThunk };
const connector = connect(mapStateToProps, mapDispatch);
export default connector(ArticleContainer);
