import React, { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, useParams } from 'react-router-dom';
// selectors:
import {
  userArticleLoadStateSelector,
  userArticleStateTagsSelector,
  userArticleStateTagsReselector,
  userArticleInitialStateReselector,
  userStateUserSelector,
  userArticleErrorStateSelector,
} from '../../redux/selectors';
// thunk:
import {
  createArticleThunk,
  initUserArticleStateThunk,
  updateUserArticleThunk,
} from '../../redux/middlewareThunk/userArticleThunk';
// actions:
import {
  articleSetTagsAction,
  createNewArticleAction,
  emptyTheStateAction,
  newArticleLoadAction,
} from '../../redux/actions/newArticleActions';
// shema:
import { articleShema } from '../../tools/utils';
// types:
import { IUserArticle } from '../../types/components/index.d';
import { IState } from '../../types/redux/index.d';
// components:
import { CreateArticle } from '../../components/UserArticle/CreateArticle';
import { Spinner } from '../../components/AppElements/Spinner/Spinner';

const CreateArticleContainer: FC<PropsFromRedux> = ({
  error,
  load,
  tags,
  user,
  articleTags,
  initialForm,
  createArticleThunk,
  articleSetTagsAction,
  initUserArticleStateThunk,
  updateUserArticleThunk,
  emptyTheStateAction,
  newArticleLoadAction,
}) => {
  const history = useHistory();
  const [userCookie] = useCookies();
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit, errors, setValue } = useForm<IUserArticle>({
    mode: 'onChange',
    resolver: yupResolver(articleShema),
  });

  useEffect(() => {
    newArticleLoadAction(true);
  }, []);

  useEffect(() => {
    if (!id) newArticleLoadAction(false);
  }, [!id]);

  useEffect(() => {
    if (id && user) initUserArticleStateThunk(id, user.username);
    return () => {
      emptyTheStateAction();
    };
  }, [id, user]);

  useEffect(() => {
    if (error) throw new Error(error);
  }, [error]);

  useEffect(() => {
    if (articleTags) articleSetTagsAction(articleTags);
    if (initialForm) initialForm.forEach((key, value) => setValue(value, key));
  }, [articleTags, initialForm]);

  const onSubmit = handleSubmit(async (data) => {
    if (!id) await createArticleThunk(data, tags, userCookie.token);
    if (id && userCookie.token) await updateUserArticleThunk(data, tags, userCookie.token, id);
    history.push('/');
  });

  return (
    <>
      {load && <Spinner />}
      {!load && !error && (
        <CreateArticle
          onSubmit={onSubmit}
          inputRef={register}
          errors={errors}
          tags={tags}
          load={load}
          setTags={articleSetTagsAction}
        />
      )}
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  error: userArticleErrorStateSelector(state),
  load: userArticleLoadStateSelector(state),
  articleTags: userArticleStateTagsReselector(state),
  tags: userArticleStateTagsSelector(state),
  user: userStateUserSelector(state),
  initialForm: userArticleInitialStateReselector(state),
});

const mapDispatch = {
  createArticleThunk,
  initUserArticleStateThunk,
  articleSetTagsAction,
  createNewArticleAction,
  updateUserArticleThunk,
  emptyTheStateAction,
  newArticleLoadAction,
};

const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(CreateArticleContainer);
