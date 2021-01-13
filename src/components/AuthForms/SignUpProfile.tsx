import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUpProfile: FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    history.push('/');
  };
  return (
    <div>
      <h2>Create new account</h2>
      <form>
        <input
          ref={register}
          type="text"
          name="username"
          placeholder="Username"
        />
        <input ref={register} type="email" name="email" placeholder="email" />
        <input
          ref={register}
          type="password"
          name="password"
          placeholder="password"
        />
      </form>
    </div>
  );
};

export default SignUpProfile;
