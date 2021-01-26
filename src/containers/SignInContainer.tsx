import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { IUser, IResponseUser } from '../types/redux/index.d';
import { SignInProfile } from '../components/AuthForms/SignInProfile';
import { handlerUserData } from '../tools/dataFabric';
import { authUser } from '../service/api';
import { authSchema } from '../tools/utils';
import { registerNewUserAction } from '../redux/actions/index';

export const SignInContainer: FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [, setUserCookie] = useCookies();
  const { register, handleSubmit, errors, setError } = useForm<Omit<IUser, 'username'>>({
    mode: 'onChange',
    resolver: yupResolver(authSchema),
  });

  const onSubmit = handleSubmit(({ email, password }) => {
    setLoading(true);
    authUser({ email, password })
      .then((response: { user: IResponseUser }) => {
        const { user } = response;
        setUserCookie('token', user.token);
        const newUser = handlerUserData(user);
        dispatch(registerNewUserAction(newUser));
        history.push('/');
      })
      .catch(() => {
        setLoading(false);
        setError('email', { type: 'server validation', message: '' });
        setError('password', { type: 'server validation', message: 'Email or password is invalid' });
      });
  });

  return <SignInProfile inputRef={register} errors={errors} onSubmit={onSubmit} load={loading} />;
};
