import React, { FC } from 'react';

import { IForm } from '../../types/components/index.d';
import {
  FormContainer,
  Form,
  Input,
  SubmitButton,
  FormHeader,
} from './FormElements/index';

export const EditProfile: FC<IForm> = ({ inputRef }) => (
  <FormContainer>
    <FormHeader>Edit Profile</FormHeader>
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
        name="New password"
        label="New password"
      />
      <Input
        ref={inputRef}
        type="text"
        name="Avatar image"
        label="Avatar image (url)"
      />
      <SubmitButton>Save</SubmitButton>
    </Form>
  </FormContainer>
);
