import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { IForm } from '../../types/components/index.d';
import { FormContainer, Form, Input, SubmitButton, FormHeader } from './FormElements/index';

const useStyle = makeStyles({
  signUp: {
    fontSize: 12,
    textAlign: 'center',
    color: ' #8c8c8c',
    '& > a': {
      color: '#1890ff !important',
    },
  },
});

export const SignInProfile: FC<IForm> = ({ inputRef, errors, onSubmit, load }) => {
  const styles = useStyle();
  return (
    <FormContainer>
      <FormHeader>Sign In</FormHeader>
      <Form onSubmit={onSubmit}>
        <Input
          ref={inputRef}
          type="email"
          name="email"
          label="Email address"
          error={!!errors?.email}
          helperText={errors?.email?.message}
        />
        <Input
          ref={inputRef}
          type="password"
          name="password"
          label="password"
          error={!!errors?.password}
          helperText={errors?.password?.message}
        />
        <SubmitButton load={load}>Login</SubmitButton>
      </Form>
      <div className={styles.signUp}>
        <span>Don’t have an account?</span>
        <Link to="/sign-up"> Sign Up.</Link>
      </div>
    </FormContainer>
  );
};
