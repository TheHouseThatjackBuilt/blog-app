/* eslint-disable */
import React, { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { articleShema } from '../../tools/utils';
import { IUserArticle } from '../../types/components/index.d';
import {
  userArticleLoadStateSelector,
  userArticleStateSelector,
  userArticleStateTagsSelector,
  userArticleStateTagsReselector,
  userArticleErrorStateReselector,
} from '../../redux/selectors';

import { articleSetTagsAction } from '../../redux/actions/newArticleActions';
import { IState } from '../../types/redux/index.d';
import { getArticleThunk } from '../../redux/middlewareThunk/userArticleThunk';
import { CreateArticle } from '../../components/UserArticle/CreateArticle';

type PropsFromRedux = ConnectedProps<typeof connector>;

const CreateArticleContainer: FC<PropsFromRedux> = ({
  article,
  load,
  error,
  tags,
  articleTags,
  getArticleThunk,
  articleSetTagsAction,
}) => {
  const history = useHistory();
  const [userCookie] = useCookies();
  const { register, handleSubmit, errors, setError } = useForm<IUserArticle>({
    mode: 'onChange',
    resolver: yupResolver(articleShema),
  });

  useEffect(() => {
    if (articleTags) articleSetTagsAction(articleTags);
  }, [articleTags]);

  useEffect(() => {
    console.log(article);
  }, [article]);

  useEffect(() => {
    if (error) error.forEach((key, value) => setError(value, { type: 'server validation error', message: `${value} ${key}` }));
  }, [error]);

  const onSubmit = handleSubmit((data) => getArticleThunk(data, userCookie.token));

  return (
    <CreateArticle
      onSubmit={onSubmit}
      inputRef={register}
      errors={errors}
      tags={tags}
      load={load}
      setTags={articleSetTagsAction}
    />
  );
};

const mapStateToProps = (state: IState) => ({
  article: userArticleStateSelector(state),
  load: userArticleLoadStateSelector(state),
  error: userArticleErrorStateReselector(state),
  articleTags: userArticleStateTagsReselector(state),
  tags: userArticleStateTagsSelector(state),
});

const mapDispatch = { getArticleThunk, articleSetTagsAction };
const connector = connect(mapStateToProps, mapDispatch);

export default connector(CreateArticleContainer);
