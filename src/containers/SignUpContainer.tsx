import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { IUser, IUserError, IResponseUser } from '../types/redux/index.d';
import { IApiError } from '../types/service/index.d';
import { errorDataFabric, handlerUserData } from '../tools/dataFabric';
import { SignUpProfile } from '../components/AuthForms/SignUpProfile';
import { requestNewUser } from '../service/api';
import { registerSchema } from '../tools/utils';
import { registerNewUserAction } from '../redux/actions/index';

export const SignUpContainer: FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [, setUserCookie] = useCookies();
  const { register, handleSubmit, errors, setError } = useForm<IUser>({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = handleSubmit(({ username, email, password }) => {
    setLoading(true);
    requestNewUser({ username, email, password })
      .then((response: { user: IResponseUser }) => {
        const { user } = response;
        setUserCookie('token', user.token);
        const newUser = handlerUserData(user);
        dispatch(registerNewUserAction(newUser));
        history.push('/');
      })
      .catch((data: IApiError<IUserError>) => {
        setLoading(false);
        const error = errorDataFabric<IUserError>(data.item.errors);
        error.forEach((key, value) => setError(value, { type: 'server validation error', message: `${value} ${key}` }));
      });
  });

  return <SignUpProfile inputRef={register} errors={errors} onSubmit={onSubmit} load={loading} />;
};
