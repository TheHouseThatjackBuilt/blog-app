/* eslint-disable*/
import React from 'react';
import { useForm } from 'react-hook-form';

import { SignInProfile } from '../components/AuthForms/SignInProfile';

export const SignInContainer = () => {
  const { register, handleSubmit, errors } = useForm();

  return <SignInProfile inputRef={register} />;
};
