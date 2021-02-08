import React, { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
// selectors:
import { userStateUserSelector, userStateLoadSelector, userStateErrorSelector } from '../../redux/selectors/userStateSelectors';
// thunk:
import { authUserThunk } from '../../redux/middlewareThunk/userDataThunk';
// types:
import { IState, IUser } from '../../types/redux/index.d';
// Schema:
import { authSchema } from '../../tools/utils';
// component:
import { SignInProfile } from '../../components/AuthForms';

const SignInContainer: FC<PropsFromRedux> = ({ load, error, user, authUserThunk }) => {
  const history = useHistory();
  const [, setUserCookie] = useCookies();
  const { register, handleSubmit, errors, setError } = useForm<Omit<IUser, 'username'>>({
    mode: 'onChange',
    resolver: yupResolver(authSchema),
  });

  useEffect(() => {
    if (user) {
      setUserCookie('token', user.token);
      history.push('/articles?page=1');
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      setError('email', { type: 'server validation', message: '' });
      setError('password', { type: 'server validation', message: 'Email or password is invalid' });
    }
  }, [error]);

  const onSubmit = handleSubmit(async ({ email, password }) => authUserThunk({ email, password }));

  return <SignInProfile inputRef={register} errors={errors} onSubmit={onSubmit} load={load} />;
};

const mapStateToProps = (state: IState) => ({
  user: userStateUserSelector(state),
  load: userStateLoadSelector(state),
  error: userStateErrorSelector(state),
});

const mapDispatch = { authUserThunk };
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(SignInContainer);
