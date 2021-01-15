import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { IForm } from '../../types/components/index.d';
import {
  FormContainer,
  Form,
  Input,
  SubmitButton,
  FormHeader,
} from './FormElements/index';

const useStyle = makeStyles({
  signUp: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'center',
    color: ' #8c8c8c',
    '& > a': {
      color: '#1890ff !important',
    },
  },
});

export const SignInProfile: FC<IForm> = ({ inputRef }) => {
  const styles = useStyle();

  return (
    <FormContainer>
      <FormHeader>Sign In</FormHeader>
      <Form>
        <Input
          ref={inputRef}
          type="email"
          name="Email adress"
          label="Email adress"
        />
        <Input
          ref={inputRef}
          type="password"
          name="Password"
          label="password"
        />
        <SubmitButton>Login</SubmitButton>
        <div className={styles.signUp}>
          <span>Don’t have an account?</span>
          <Link to="/sign-up">Sign Up.</Link>
        </div>
      </Form>
    </FormContainer>
  );
};
