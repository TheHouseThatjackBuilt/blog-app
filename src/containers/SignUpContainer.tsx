import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { SignUpProfile } from '../components/AuthForms/SignUpProfile';
import { requestNewUser } from '../service/api';
import { errorDataFabric } from '../tools/dataFabric';
import { schema } from '../tools/utils';
import { IUser, IUserError } from '../types/redux/index.d';

export const SignUpContainer = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { register, handleSubmit, errors, setError } = useForm<IUser>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(({ username, email, password }) => {
    setLoading(true);
    requestNewUser({ username, email, password })
      .then(response => {
        const hello = response;
        console.log(hello);

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
