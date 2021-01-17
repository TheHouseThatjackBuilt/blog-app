/* eslint-disable*/
import React, { FC } from 'react';

import { IForm } from '../../types/components/index.d';
import {
  FormContainer,
  Form,
  Input,
  SubmitButton,
  FormHeader,
  FormCheckbox,
} from './FormElements/index';

export const SignUpProfile: FC<IForm> = ({ inputRef, errors }) => {
  return (
    <FormContainer>
      <FormHeader>Create new account</FormHeader>
      <Form>
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
          label="Email adress"
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
        <FormCheckbox
          ref={inputRef}
          label="I agree to the processing of my personal information"
        />
        <SubmitButton>Create</SubmitButton>
      </Form>
    </FormContainer>
  );
};
