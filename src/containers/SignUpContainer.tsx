import React, { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { userStateErrorReselector, userStateLoadSelector, userStateUserSelector } from '../redux/selectors';
import { IUser, IState } from '../types/redux/index.d';
import { authNewUserThunk } from '../redux/middlewareThunk/userDataThunk';
import { SignUpProfile } from '../components/AuthForms/SignUpProfile';
import { registerSchema } from '../tools/utils';

type PropsFromRedux = ConnectedProps<typeof connector>;

const SignUpContainer: FC<PropsFromRedux> = ({ load, error, user, authNewUserThunk }) => {
  const history = useHistory();
  const [, setUserCookie] = useCookies();
  const { register, handleSubmit, errors, setError } = useForm<IUser>({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  });

  useEffect(() => {
    if (user) setUserCookie('token', user.token);
    if (error) error.forEach((key, value) => setError(value, { type: 'server validation error', message: `${value} ${key}` }));
  }, [user, error]);

  const onSubmit = handleSubmit(({ username, email, password }) => {
    authNewUserThunk({ username, email, password });
    if (user) history.push('/');
  });

  return <SignUpProfile inputRef={register} errors={errors} onSubmit={onSubmit} load={load} />;
};

const mapStateToProps = (state: IState) => ({
  user: userStateUserSelector(state),
  load: userStateLoadSelector(state),
  error: userStateErrorReselector(state),
});
const mapDispatch = { authNewUserThunk };
const connector = connect(mapStateToProps, mapDispatch);

export default connector(SignUpContainer);
