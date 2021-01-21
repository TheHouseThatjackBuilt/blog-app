/* eslint-disable*/
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { EditProfile } from '../components/AuthForms/EditProfile';
import { schema } from '../tools/utils';

export const EditProfileContainer = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  return <EditProfile />;
  // return <EditProfile inputRef={register} errors={errors} />;
};
