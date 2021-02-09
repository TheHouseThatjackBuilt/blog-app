import React, { FC } from 'react';

import { ErrorBoundary } from '../components/AppElements';
import ArticleContainer from '../containers/ContentContainers/ArticleContainer';

export const SingleArticlePage: FC = () => (
  <ErrorBoundary>
    <ArticleContainer />
  </ErrorBoundary>
);
