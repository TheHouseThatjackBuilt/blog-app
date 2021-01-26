import React from 'react';
import { MainContainer } from '../AppElements';
import {
  FormContainer,
  FormHeader,
  FormInputDescription,
  FormInputTitle,
  Form,
  FormTextField,
  SubmitButton,
} from './FormElements/index';

export const CreateArticle = () => (
  <MainContainer>
    <FormContainer>
      <FormHeader>Create new article</FormHeader>
      <Form>
        <FormInputTitle />
        <FormInputDescription />
        <FormTextField />
        <SubmitButton />
      </Form>
    </FormContainer>
  </MainContainer>
);
