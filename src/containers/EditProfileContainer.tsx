/* eslint-disable*/
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { EditProfile } from '../components/AuthForms/EditProfile';
import { updateProfileSchema } from '../tools/utils';

export const EditProfileContainer = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(updateProfileSchema),
  });
  return <EditProfile />;
  // return <EditProfile inputRef={register} errors={errors} />;
};
