import React, { FC } from 'react';

import { ErrorBoundary } from '../components/AppElements';
import CreateArticleContainer from '../containers/UserArticleContainer/CreateArticleContainer';

export const EditArticlePage: FC = () => (
  <ErrorBoundary>
    <CreateArticleContainer />
  </ErrorBoundary>
);
