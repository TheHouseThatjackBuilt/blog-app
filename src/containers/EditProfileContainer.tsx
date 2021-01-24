import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { errorDataFabric, handlerEmptyData, handlerUserData } from '../tools/dataFabric';
import { IUpdateUser, IUserError, IResponseUser } from '../types/redux/index.d';
import { updateProfileSchema } from '../tools/utils';
import { registerNewUser } from '../redux/actions/index';
import { EditProfile } from '../components/AuthForms/EditProfile';
import { updateUser } from '../service/api';

export const EditProfileContainer: FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [userCookie, setUserCookie] = useCookies();
  const { register, handleSubmit, errors, setError } = useForm<IUpdateUser>({
    mode: 'onChange',
    resolver: yupResolver(updateProfileSchema),
  });

  const onSubmit = handleSubmit((data) => {
    setLoading(true);
    const userData = handlerEmptyData<IUpdateUser>(data);
    updateUser(userData, userCookie.token)
      .then((response: { user: IResponseUser }) => {
        const { user } = response;
        setUserCookie('token', user.token);
        const newUser = handlerUserData(user);
        dispatch(registerNewUser(newUser));
        history.push('/');
      })
      .catch((data: { errors: IUserError }) => {
        setLoading(false);
        const error = errorDataFabric<IUserError>(data.errors);
        error.forEach((key, value) => setError(value, { type: 'server validation error', message: `${value} ${key}` }));
      });
  });

  return <EditProfile inputRef={register} errors={errors} onSubmit={onSubmit} load={loading} />;
};
