import React, { FC } from 'react';

import { ErrorBoundary } from '../components/AppElements';
import ListContainer from '../containers/ContentContainers/ListContainer';

export const ArticleListPage: FC = () => (
  <ErrorBoundary>
    <ListContainer />
  </ErrorBoundary>
);
