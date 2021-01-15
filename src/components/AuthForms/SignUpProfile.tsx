/* eslint-disable*/
import React, { FC } from 'react';
import { ISignUpProfile } from '../../types/components/index.d';
import {
  FormContainer,
  Form,
  Input,
  SubmitButton,
  FormHeader,
} from './FormElements/index';

export const SignUpProfile: FC<ISignUpProfile> = ({ ref }) => {
  return (
    <FormContainer>
      <FormHeader>Create new account</FormHeader>
      <Form>
        <Input ref={ref} type="text" name="username" label="Username" />
        <Input
          ref={ref}
          type="email"
          name="Email adress"
          label="Email adress"
        />
        <Input ref={ref} type="password" name="Password" label="password" />
        <Input
          ref={ref}
          type="password"
          name="Repeat Password"
          label="Repeat Password"
        />
        <SubmitButton>Create</SubmitButton>
      </Form>
    </FormContainer>
  );
};
