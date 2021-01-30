/* eslint-disable*/
import React from 'react';
// components:
import { UserArticleTagsContainer } from '../../containers/UserArticleContainer/UserArticleTagsContainer';
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
        <UserArticleTagsContainer />
        <SubmitButton>Create</SubmitButton>
      </Form>
    </FormContainer>
  </MainContainer>
);
