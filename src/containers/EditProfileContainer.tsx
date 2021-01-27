import React, { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
// selectors:
import { userStateLoadSelector, userStateErrorReselector, userStateUserSelector } from '../redux/selectors';
// thunk:
import { updateUserThunk } from '../redux/middlewareThunk/userDataThunk';
// fabric & utils:
import { handlerEmptyData } from '../tools/dataFabric';
import { updateProfileSchema } from '../tools/utils';
// types:
import { IState, IUpdateUser } from '../types/redux/index.d';
// component:
import { EditProfile } from '../components/AuthForms/EditProfile';

type PropsFromRedux = ConnectedProps<typeof connector>;

const EditProfileContainer: FC<PropsFromRedux> = ({ load, error, user, updateUserThunk }) => {
  const history = useHistory();
  const [userCookie] = useCookies();
  const { register, handleSubmit, errors, setError } = useForm<IUpdateUser>({
    mode: 'onChange',
    resolver: yupResolver(updateProfileSchema),
  });

  useEffect(() => {
    if (user) history.push('/');
    if (error) error.forEach((key, value) => setError(value, { type: 'server validation error', message: `${value} ${key}` }));
  }, [user, error]);

  const onSubmit = handleSubmit((data) => {
    const userData = handlerEmptyData<IUpdateUser>(data);
    updateUserThunk(userData, userCookie.token);
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

export default connector(EditProfileContainer);
