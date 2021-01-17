/* eslint-disable*/
import React from 'react';
import { useForm } from 'react-hook-form';

import { EditProfile } from '../components/AuthForms/EditProfile';

export const EditProfileContainer = () => {
  const { register, handleSubmit, errors } = useForm();

  return <EditProfile inputRef={register} errors={errors} />;
};
