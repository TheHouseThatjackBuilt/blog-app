/* eslint-disable*/
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { SignInProfile } from '../components/AuthForms/SignInProfile';
import { schema } from '../tools/utils';

export const SignInContainer = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return <SignInProfile inputRef={register} errors={errors} />;
};
