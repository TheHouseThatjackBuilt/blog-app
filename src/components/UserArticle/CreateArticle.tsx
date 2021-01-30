/* eslint-disable*/
import React, { FC, Ref } from 'react';
// components:
import { UserArticleTagsContainer } from '../../containers/UserArticleContainer/UserArticleTagsContainer';
import { MainContainer } from '../AppElements';
import { IForm } from '../../types/components/index.d';
import {
  FormContainer,
  FormHeader,
  FormInputDescription,
  FormInputTitle,
  Form,
  FormTextField,
  SubmitButton,
} from './FormElements/index';

export const CreateArticle: FC<IForm> = ({ onSubmit, inputRef }) => (
  <MainContainer>
    <FormContainer>
      <FormHeader>Create new article</FormHeader>
      <Form onSubmit={onSubmit}>
        <FormInputTitle ref={inputRef} />
        <FormInputDescription ref={inputRef} />
        <FormTextField ref={inputRef} />
        <UserArticleTagsContainer />
        <SubmitButton>Create</SubmitButton>
      </Form>
    </FormContainer>
  </MainContainer>
);
