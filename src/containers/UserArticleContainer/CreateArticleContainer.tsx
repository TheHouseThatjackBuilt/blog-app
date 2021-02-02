import React, { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, useParams } from 'react-router-dom';

import {
  userArticleLoadStateSelector,
  userArticleStateTagsSelector,
  userArticleStateTagsReselector,
  userArticleErrorStateReselector,
  userArticleInitialStateReselector,
} from '../../redux/selectors';

import { articleSetTagsAction, createNewArticleAction } from '../../redux/actions/newArticleActions';
import { createArticleThunk, initUserArticleStateThunk } from '../../redux/middlewareThunk/userArticleThunk';

import { articleShema } from '../../tools/utils';
import { IUserArticle } from '../../types/components/index.d';
import { IState } from '../../types/redux/index.d';
import { CreateArticle } from '../../components/UserArticle/CreateArticle';

const CreateArticleContainer: FC<PropsFromRedux> = ({
  load,
  error,
  tags,
  articleTags,
  initialForm,
  createArticleThunk,
  articleSetTagsAction,
  initUserArticleStateThunk,
}) => {
  const history = useHistory();
  const [userCookie] = useCookies();
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit, errors, setError, setValue } = useForm<IUserArticle>({
    mode: 'onChange',
    resolver: yupResolver(articleShema),
  });

  useEffect(() => {
    if (!userCookie.token) history.push('/sign-in');
  }, [userCookie.token]);

  useEffect(() => {
    if (id) initUserArticleStateThunk(id);
  }, [id]);

  useEffect(() => {
    if (articleTags) articleSetTagsAction(articleTags);
    if (initialForm) initialForm.forEach((key, value) => setValue(value, key));
  }, [articleTags, initialForm]);

  useEffect(() => {
    if (error) error.forEach((key, value) => setError(value, { type: 'server validation error', message: `${value} ${key}` }));
  }, [error]);

  const onSubmit = handleSubmit((data) => {
    createArticleThunk(data, tags, userCookie.token);
    if (!error) history.push('/');
  });

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
  load: userArticleLoadStateSelector(state),
  error: userArticleErrorStateReselector(state),
  articleTags: userArticleStateTagsReselector(state),
  tags: userArticleStateTagsSelector(state),
  initialForm: userArticleInitialStateReselector(state),
});

const mapDispatch = { createArticleThunk, initUserArticleStateThunk, articleSetTagsAction, createNewArticleAction };
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(CreateArticleContainer);
