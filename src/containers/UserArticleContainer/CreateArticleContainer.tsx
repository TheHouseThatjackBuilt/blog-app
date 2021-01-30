/* eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { CreateArticle } from '../../components/UserArticle/CreateArticle';
import { articleShema } from '../../tools/utils';
import { IUserArticle } from '../../types/components/index.d';

export const CreateArticleContainer = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, setError } = useForm<IUserArticle>({
    mode: 'onChange',
    resolver: yupResolver(articleShema),
  });

  // const onSubmit = handleSubmit(({ username, email, password }) => authNewUserThunk({ username, email, password }));

  return <CreateArticle />;
};
