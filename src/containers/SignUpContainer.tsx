/* eslint-disable*/
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { SignUpProfile } from '../components/AuthForms/SignUpProfile';
import { schema } from '../tools/utils';

export const SignUpContainer = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return <SignUpProfile inputRef={register} errors={errors} />;
};
