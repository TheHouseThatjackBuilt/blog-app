import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { IForm } from '../../types/components/index.d';
import { FormContainer, Form, Input, SubmitButton, FormHeader } from './FormElements/index';

const useStyles = makeStyles({
  label: {
    marginTop: 10,
    paddingTop: 8,
    fontSize: 14,
    color: '#595959',
    borderTop: '1px solid #E8E8E8',
  },
  signIn: {
    fontSize: 12,
    textAlign: 'center',
    color: ' #8c8c8c',
    '& > a': {
      color: '#1890ff !important',
    },
  },
});

export const SignUpProfile: FC<IForm> = ({ inputRef, errors, onSubmit, load }) => {
  const styles = useStyles();
  return (
    <FormContainer>
      <FormHeader>Create new account</FormHeader>
      <Form onSubmit={onSubmit}>
        <Input
          ref={inputRef}
          type="text"
          name="username"
          label="Username"
          error={!!errors?.username}
          helperText={errors?.username?.message}
        />
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
          label="Password"
          error={!!errors?.password}
          helperText={errors?.password?.message}
        />
        <Input
          ref={inputRef}
          type="password"
          name="confirmPassword"
          label="Repeat Password"
          error={!!errors?.confirmPassword}
          helperText={errors?.confirmPassword?.message}
        />
        <FormControlLabel
          className={styles.label}
          control={<Checkbox color="primary" name="req" inputRef={inputRef} required />}
          inputRef={inputRef}
          label="I agree to the processing of my personal information"
        />
        <SubmitButton load={load}>Create</SubmitButton>
      </Form>
      <div className={styles.signIn}>
        <span>Don’t have an account?</span>
        <Link to="/sign-up"> Sign In.</Link>
      </div>
    </FormContainer>
  );
};
