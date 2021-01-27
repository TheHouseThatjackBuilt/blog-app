import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { userStateLoadSelector, userStateErrorReselector } from '../redux/selectors';
import { updateUserThunk } from '../redux/middlewareThunk/userDataThunk';
import { handlerEmptyData } from '../tools/dataFabric';
import { IState, IUpdateUser } from '../types/redux/index.d';
import { updateProfileSchema } from '../tools/utils';
import { EditProfile } from '../components/AuthForms/EditProfile';

type PropsFromRedux = ConnectedProps<typeof connector>;

const EditProfileContainer: FC<PropsFromRedux> = ({ load, error, updateUserThunk }) => {
  const history = useHistory();
  const [userCookie] = useCookies();
  const { register, handleSubmit, errors, setError } = useForm<IUpdateUser>({
    mode: 'onChange',
    resolver: yupResolver(updateProfileSchema),
  });

  const onSubmit = handleSubmit((data) => {
    const userData = handlerEmptyData<IUpdateUser>(data);
    updateUserThunk(userData, userCookie.token);
    if (error) error.forEach((key, value) => setError(value, { type: 'server validation error', message: `${value} ${key}` }));
    history.push('/');
  });

  return <EditProfile inputRef={register} errors={errors} onSubmit={onSubmit} load={load} />;
};

const mapStateToProps = (state: IState) => ({
  load: userStateLoadSelector(state),
  error: userStateErrorReselector(state),
});

const mapDispatch = { updateUserThunk };
const connector = connect(mapStateToProps, mapDispatch);

export default connector(EditProfileContainer);
