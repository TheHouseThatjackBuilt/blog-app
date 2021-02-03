import React, { FC } from 'react';
// components:
import { UserArticleTagsContainer } from '../../containers/UserArticleContainer/UserArticleTagsContainer';
import { MainContainer } from '../AppElements';
import { ICreateArticle } from '../../types/components/index.d';
import {
  FormContainer,
  FormHeader,
  FormInputDescription,
  FormInputTitle,
  Form,
  FormTextField,
  SubmitButton,
} from './FormElements/index';

export const CreateArticle: FC<ICreateArticle> = ({ onSubmit, inputRef, errors, tags, load, setTags }) => (
  <MainContainer>
    <FormContainer>
      <FormHeader>Create new article</FormHeader>
      <Form onSubmit={onSubmit}>
        <FormInputTitle ref={inputRef} errors={errors} />
        <FormInputDescription ref={inputRef} errors={errors} />
        <FormTextField ref={inputRef} errors={errors} />
        <UserArticleTagsContainer tags={tags} setTags={setTags} />
        <SubmitButton load={load}>Create</SubmitButton>
      </Form>
    </FormContainer>
  </MainContainer>
);
// TODO: create transition to /articles/:author
