import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
// selectors
import {
  singleArticleStateErrorSelector,
  singleArticleStateLoadSelector,
  singleArticleStateReselector,
} from '../../redux/selectors/index';
// thunk:
import { getArticleThunk } from '../../redux/middlewareThunk/singleArticleThunk';
// types:
import { IState } from '../../types/redux/index.d';
// component:
import { SingleArticle } from '../../components/Articles';

const ArticleContainer = ({ article, load, error, getArticleThunk }: PropsFromRedux) => {
  const { id } = useParams<{ id: string }>();
  const [userCookie] = useCookies();

  useEffect(() => {
    getArticleThunk(id, userCookie.token);
  }, [id, userCookie.token]);

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
