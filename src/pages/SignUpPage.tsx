import React, { FC } from 'react';

import { ErrorBoundary } from '../components/AppElements';
import SignUpContainer from '../containers/AuthContainers/SignUpContainer';

export const SignUpPage: FC = () => (
  <ErrorBoundary>
    <SignUpContainer />
  </ErrorBoundary>
);
