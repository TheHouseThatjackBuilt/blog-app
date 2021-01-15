/* eslint-disable*/
import React from 'react';
import { useForm } from 'react-hook-form';

import { SignUpProfile } from '../components/AuthForms/SignUpProfile';

export const SignUpContainer = () => {
  const { register, handleSubmit, errors } = useForm();

  return <SignUpProfile inputRef={register} />;
};
