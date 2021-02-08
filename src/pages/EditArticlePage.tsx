import React, { FC } from 'react';
import CreateArticleContainer from '../containers/UserArticleContainer/CreateArticleContainer';
import { ErrorBoundary } from '../components/AppElements';

export const EditArticlePage: FC = () => (
  <ErrorBoundary>
    <CreateArticleContainer />
  </ErrorBoundary>
);
