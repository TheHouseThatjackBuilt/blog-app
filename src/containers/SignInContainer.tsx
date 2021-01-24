/* eslint-disable*/
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import omit from 'lodash.omit';

import { IUser, IUserError, IResponseUser } from '../types/redux/index.d';
import { SignInProfile } from '../components/AuthForms/SignInProfile';
import { authUser } from '../service/api';
import { errorDataFabric } from '../tools/dataFabric';
import { authSchema } from '../tools/utils';
import { registerNewUser } from '../redux/actions/index';

export const SignInContainer = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [, setUserCookie] = useCookies();
  const { register, handleSubmit, errors, setError } = useForm<Omit<IUser, 'username'>>({
    mode: 'onChange',
    resolver: yupResolver(authSchema),
  });

  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
    setLoading(true);
    authUser({ email, password })
      .then((response: { user: IResponseUser }) => {
        const { user } = response;
        setUserCookie('token', user.token);
        const newUser = omit(user, 'token', 'createdAt', 'id', 'updatedAt');
        dispatch(registerNewUser(newUser));
        history.push('/');
      })
      .catch((data: { errors: IUserError }) => {
        setLoading(false);
        setError('email', { type: 'server validation', message: '' });
        setError('password', { type: 'server validation', message: 'Email or password is invalid' });
      });
  });

  return <SignInProfile inputRef={register} errors={errors} onSubmit={onSubmit} load={loading} />;
};
