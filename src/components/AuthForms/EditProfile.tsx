import React, { FC } from 'react';
import { IForm } from '../../types/components/index.d';
import { FormContainer, Form, Input, SubmitButton, FormHeader } from './FormElements/index';

export const EditProfile: FC<IForm> = ({ inputRef, errors, onSubmit, load }) => (
  <FormContainer>
    <FormHeader>Edit Profile</FormHeader>
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
        label="Email adress"
        error={!!errors?.email}
        helperText={errors?.email?.message}
      />
      <Input
        ref={inputRef}
        type="password"
        name="password"
        label="New password"
        error={!!errors?.password}
        helperText={errors?.password?.message}
      />
      <Input
        ref={inputRef}
        type="text"
        name="image"
        label="Avatar image (url)"
        error={!!errors?.image}
        helperText={errors?.image?.message}
      />
      <SubmitButton load={load}>Save</SubmitButton>
    </Form>
  </FormContainer>
);
