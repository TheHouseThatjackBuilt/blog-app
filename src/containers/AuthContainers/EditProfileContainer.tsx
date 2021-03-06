import React, { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
// selectors:
import { userStateLoadSelector, userStateErrorReselector, userStateUserSelector } from '../../redux/selectors';
// thunk:
import { updateUserThunk } from '../../redux/middlewareThunk/userDataThunk';
// Schema:
import { updateProfileSchema } from '../../tools/utils';
// types:
import { IState, IUpdateUser } from '../../types/redux/index.d';
// component:
import { EditProfile } from '../../components/AuthForms';

const EditProfileContainer: FC<PropsFromRedux> = ({ load, error, user, updateUserThunk }) => {
  const history = useHistory();
  const [userCookie] = useCookies();
  const { register, handleSubmit, errors, setError } = useForm<IUpdateUser>({
    mode: 'onChange',
    resolver: yupResolver(updateProfileSchema),
  });
  // вынести условие в тело функции ??.
  useEffect(() => {
    if (userCookie.token === undefined) history.push('/sign-in');
  });

  useEffect(() => {
    if (error) error.forEach((key, value) => setError(value, { type: 'server validation error', message: `${value} ${key}` }));
  }, [error]);

  const onSubmit = handleSubmit((data) => {
    updateUserThunk(data, userCookie.token);
    if (!error && !load && user) history.push('/');
  });

  return <EditProfile inputRef={register} errors={errors} onSubmit={onSubmit} load={load} />;
};

const mapStateToProps = (state: IState) => ({
  user: userStateUserSelector(state),
  load: userStateLoadSelector(state),
  error: userStateErrorReselector(state),
});

const mapDispatch = { updateUserThunk };
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(EditProfileContainer);
