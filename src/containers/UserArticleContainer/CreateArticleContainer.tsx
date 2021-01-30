/* eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { articleShema } from '../../tools/utils';
import { IUserArticle } from '../../types/components/index.d';
import { CreateArticle } from '../../components/UserArticle/CreateArticle';

export const CreateArticleContainer = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, setError } = useForm<IUserArticle>({
    mode: 'onChange',
    resolver: yupResolver(articleShema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return <CreateArticle onSubmit={onSubmit} inputRef={register} errors={errors} />;
};
