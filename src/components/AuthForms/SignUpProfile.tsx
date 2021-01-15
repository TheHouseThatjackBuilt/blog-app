/* eslint-disable*/
import React, { FC } from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ISignUpProfile } from '../../types/components/index.d';

import {
  FormContainer,
  Form,
  Input,
  SubmitButton,
  FormHeader,
  FormCheckbox,
} from './FormElements/index';

export const SignUpProfile: FC<ISignUpProfile> = ({ inputRef }) => {
  return (
    <FormContainer>
      <FormHeader>Create new account</FormHeader>
      <Form>
        <Input ref={inputRef} type="text" name="username" label="Username" />
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
        <Input
          ref={inputRef}
          type="password"
          name="Repeat Password"
          label="Repeat Password"
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
