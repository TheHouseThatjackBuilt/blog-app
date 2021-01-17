/* eslint-disable*/
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { SignUpProfile } from '../components/AuthForms/SignUpProfile';
import { schemaSignUp } from '../tools/validationSchema';

export const SignUpContainer = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schemaSignUp),
  });

  return <SignUpProfile inputRef={register} errors={errors} />;
};
