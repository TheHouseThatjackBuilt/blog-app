import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import omit from 'lodash.omit';

import { IUser, IUserError, IResponseUser } from '../types/redux/index.d';
import { SignUpProfile } from '../components/AuthForms/SignUpProfile';
import { requestNewUser } from '../service/api';
import { errorDataFabric } from '../tools/dataFabric';
import { schema } from '../tools/utils';
import { setUser } from '../redux/actions/index';

export const SignUpContainer: FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors, setError } = useForm<IUser>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(({ username, email, password }) => {
    setLoading(true);
    requestNewUser({ username, email, password })
      .then((response: { user: IResponseUser }) => {
        const user = omit(response.user, 'token');
        dispatch(setUser(user));
        history.push('/');
      })
      .catch((data: { errors: IUserError }) => {
        setLoading(false);
        const error = errorDataFabric<IUserError>(data.errors);
        error.forEach((key, value) => setError(value, { type: 'server validation error', message: `${value} ${key}` }));
      });
  });

  return <SignUpProfile inputRef={register} errors={errors} onSubmit={onSubmit} load={loading} />;
};
